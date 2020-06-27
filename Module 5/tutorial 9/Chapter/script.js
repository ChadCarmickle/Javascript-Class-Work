
"use strict";

function clearCookies() {
    var cookieString = document.cookie;
    var cookieArray = cookieString.split("; ");
    var expiresDate = new Date();
    expiresDate.setDate(expiresDate.getDate() - 7);
    
    for (var i = 0; i < cookieArray.length; i++) {
        document.cookie = cookieArray[i] + "; expires=" + expiresDate.toUTCString();
    }
}

window.addEventListener("load", clearCookies, false);