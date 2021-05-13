// ==UserScript==
// @name          MyHeritage Open link in new tab
// @version       0.1
// @description   Open links in new tabs when ctrl-clicking
// @namespace     https://www.reddit.com/r/chrome/comments/nawcnh/site_does_not_allow_open_in_new_tab/
// @author        schwarzkatz
// @include       https://www.myheritage.*/*
// @grant         unsafeWindow
// @updateURL     https://github.com/Bl4Cc4t/userscripts-public/raw/master/myheritage.open-link-in-new-tab.user.js
// @downloadURL   https://github.com/Bl4Cc4t/userscripts-public/raw/master/myheritage.open-link-in-new-tab.user.js
// ==/UserScript==

(function() {
  // capture writeRedirectActivity calls
  let wra = unsafeWindow.writeRedirectActivity
  unsafeWindow.writeRedirectActivity = function() {
    // open in new tab
    if (openInNewTab) {
      lastLink.href = arguments[2]

    // or call original function
    } else {
      wra.apply(this, arguments)
    }
  }

  // do not diable buttons on click
  unsafeWindow.disableCssButton = function() {}

  // listen to click events
  let openInNewTab = false
  window.addEventListener("click", e => {
    openInNewTab = e.ctrlKey
    lastLink = e.target
  }, true)
})()
