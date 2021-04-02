// ==UserScript==
// @name          Picarto Pre 2021 Style
// @version       0.1
// @description   Picarto with the non flat style. More pleasing to the eyes.
// @author        schwarzkatz
// @match         https://picarto.tv/*
// @grant         GM_addStyle
// @grant         GM_getResourceText
// @resource      css https://github.com/Bl4Cc4t/userscripts-public/raw/master/picarto.pre21style.css
// @require       https://code.jquery.com/jquery-3.5.1.min.js
// @require       https://gist.github.com/raw/2625891/waitForKeyElements.js
// @updateURL     https://github.com/Bl4Cc4t/userscripts-public/raw/master/picarto.pre21style.user.js
// @downloadURL   https://github.com/Bl4Cc4t/userscripts-public/raw/master/picarto.pre21style.user.js
// ==/UserScript==

(function() {
  GM_addStyle(GM_getResourceText("css"))
  waitForKeyElements("#channel-page", e => $(e).css("--primary-color-half", `${$("#channel-page").css("--primary-color")}80`))
})()
