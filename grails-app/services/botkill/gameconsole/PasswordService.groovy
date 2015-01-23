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

import org.springframework.web.context.request.RequestContextHolder
import org.apache.log4j.Logger

class PasswordService {

    static transactional = false;

    String generatePassword(int length = 8) {
        List<Character> chars = ['A','B','C','D','E','F','G','H','2','3','4','5','6','7','8','9','I','J','K','L','M','N','O','P','2','3','4','5','6','7','8','9','Q','R','S','T','U','V','W','X','Y','Z','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        Random random = new Random();
        return (1..length).collect{ chars[random.nextInt(chars.size())] }.join();
    }

    String getFormToken(String name = "formToken") {
        Random random = new Random();
		String randString = random.nextFloat() as String;
		randString += new Date().getTime().toString();
        String token = randString.encodeAsMD5().toUpperCase();
		RequestContextHolder.currentRequestAttributes().getSession()."${name}" = token;
		return token;
    }

    /**
     * Implementation for password encryption can be called via this method
     * @param String password to encrypt
     * @return String encrypted password
     */
    static String encrypt(String pass) {
        // Hash a password for the first time
        return BCrypt.hashpw(pass, BCrypt.gensalt(5));
    }

    static boolean check(String pass, String hashed) {
        try {
            return BCrypt.checkpw(pass, hashed);
        } catch (IllegalArgumentException e) {
            Logger log = Logger.getLogger(PasswordService.class.getPackage().getName());
            log.error("Invalid password in db. Hashed password: ${hashed}. Exception: ${e.getMessage()}");
            return false;
        } catch (NullPointerException e) {
            return false;
        }
    }
}
