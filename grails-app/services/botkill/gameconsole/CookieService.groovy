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

import org.codehaus.groovy.grails.commons.GrailsApplication

import javax.servlet.http.Cookie
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse
import javax.servlet.http.HttpSession
import org.springframework.web.context.request.RequestContextHolder
import grails.util.Environment;

class CookieService {

    GrailsApplication grailsApplication

    static transactional = false;

    /**
     * Return an instance depending on current environment
     * @return
     */
    static CookieService getInstance() {
        switch (Environment.current) {
            case Environment.TEST:
                return null;
            default:
                return new CookieService();
        }
    }

    String getCookie(String name) {
        HttpServletRequest request = RequestContextHolder.currentRequestAttributes().request
        Cookie cke = request.cookies.find {it.name == name}

        if (cke) {
            return cke.value
        }

        return null
    }

    void setCookie(String name, String value, HttpServletResponse response) {
        int defaultMaxAge = -1;
        setCookie(name, value, defaultMaxAge, response)
    }

    void setCookie(String name, String value, int maxAge, HttpServletResponse response) {
        Cookie cookie = new Cookie(name, value)
        cookie.domain = grailsApplication.config.utils.cookie.domain
        cookie.path = grailsApplication.config.utils.cookie.path
        cookie.maxAge = maxAge
        cookie.secure = grailsApplication.config.utils.cookie.secure
        response.addCookie(cookie)
    }

    static String getSessionId() {
        return getSession().id
    }

    void deleteCookie(String name, HttpServletResponse response, String domain = null) {
        if (! domain) {
            domain = grailsApplication.config.utils.cookie.domain
        }

        Cookie cookie = new Cookie(name, null)

        if (domain) {
            cookie.setDomain(domain)
        }

        cookie.setMaxAge(0)
        cookie.setPath("/")
        response.addCookie(cookie)
    }

    static HttpSession getSession() {
        return RequestContextHolder.currentRequestAttributes().getSession()
    }
}
