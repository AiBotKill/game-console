/*
 * (c) 2011, Colonia
 * jukka@colonia.fi
 *
 * ALL RIGHTS RESERVED. This code contains material protected under
 * International and Federal Copyright Laws and Treaties. Any unauthorized
 * copy or use of this material is prohibited. No part of this code
 * may be reproduced or transmitted in any form without express written
 * permission from the author.
 *
 * @author Jukka Hell
 */

package botkill.gameconsole

import grails.util.Holders;

import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse
import org.codehaus.groovy.grails.commons.GrailsApplication
import org.codehaus.groovy.grails.plugins.web.taglib.ApplicationTagLib
import org.springframework.web.context.request.RequestContextHolder
import org.apache.log4j.Logger

class AuthenticateService {

    GrailsApplication grailsApplication;
    CookieService cookieService;

    static transactional = true;
    static final String USERNAME_COOKIE_VALUE = "MKU";
    static final String USER_LOGIN_COOKIE_MAC_VALUE = "ULCM";

    /**
     * Implementation for user authentication.
     * Currently, simple name-password-combination is needed
     */
    Team login(String username, String password) {
        Team u = Team.authenticate(username, password)

        if (u) {
            login(u)
        }

        return u;
    }

    /**
     * Create login logics here
     * @param Team t that is being logged in
     */
    void login(Team u) {
        HttpServletResponse response = RequestContextHolder.getRequestAttributes().getCurrentResponse();

        u.save();

        String email = u.name.encodeAsBase64();
        cookieService.setCookie(USERNAME_COOKIE_VALUE, email, response);
        String ulcm = (grailsApplication.config.loginCookie.secretKey?.toString() + u.name).encodeAsSHA1(); // User login cookie mac to verify cookie
        cookieService.setCookie(USER_LOGIN_COOKIE_MAC_VALUE, ulcm, response);
    }

    /**
     * Logout currently logged in user
     * @return Boolean true if logout was successful, otherwise false
     */
    boolean logout() {
        String loggedInUser = cookieService.getCookie(USERNAME_COOKIE_VALUE);

        if (loggedInUser) {
            HttpServletResponse response = RequestContextHolder.getRequestAttributes().getCurrentResponse();
            cookieService.deleteCookie(USERNAME_COOKIE_VALUE, response);
            cookieService.deleteCookie(USER_LOGIN_COOKIE_MAC_VALUE, response);
            return true;
        }
        return false;
    }

    static Team getLoggedInUser() {
        CookieService cs = CookieService.getInstance();
        String username = cs.getCookie(USERNAME_COOKIE_VALUE);
        String ulcm = cs.getCookie(USER_LOGIN_COOKIE_MAC_VALUE); // User login cookie mac

        if (username && !username.equals("")) {
            try {
                username = new String(username.decodeBase64());
            } catch (RuntimeException e) {
                Logger log = Logger.getLogger(AuthenticateService.class.getPackage().getName());
                log.debug("Invalid username in cookie. Unable to base64 decode it. Exception: ${e.getMessage()}");
                username = null;
            }

            String neededMac = (Holders.grailsApplication.config.loginCookie.secretKey?.toString() + username).encodeAsSHA1();
            if (neededMac == ulcm) {
                Team u = Team.findByName(username);
                if (u) {
                    return u;
                } else {
                    return null;
                }
            }
        } else {
            return null;
        }
    }

    /**
     * Check if user is human.
     * @param String answer that is given
     * @param String captcha number to identify which question was answered
     * @return boolean True if succeeded, otherwise false
     */
    boolean checkCaptcha(String answer, String captchaNro) {
        answer = answer?.toUpperCase()?.trim();
        boolean correctAnswer = false;

        ApplicationTagLib g = grailsApplication.mainContext.getBean('org.codehaus.groovy.grails.plugins.web.taglib.ApplicationTagLib');
        String answerString = g.message(code:"captcha.answer${captchaNro}");
        if (answerString.contains(",")) {
            List<String> answerOptions = answerString.split(",");
            if (answerOptions.contains(answer)) {
                correctAnswer = true;
            }
        } else if (answerString == answer) {
            correctAnswer = true;
        }

        if (answerString && answerString != "" && correctAnswer) {
            return true;
        } else {
            return false;
        }
    }
}
