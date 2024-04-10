// ==UserScript==
// @name          Reddit - Always disable safe search
// @version       0.1
// @description   Always disable the safe search toggle when performing a search on reddit.
// @author        schwarzkatz
// @match         https://www.reddit.com/*
// @grant         none
// @updateURL     https://github.com/Bl4Cc4t/userscripts-public/raw/master/src/reddit.always-disable-safe-search.user.js
// @downloadURL   https://github.com/Bl4Cc4t/userscripts-public/raw/master/src/reddit.always-disable-safe-search.user.js
// ==/UserScript==

(function() {
  // wait for element to exist
  // https://stackoverflow.com/a/61511955
  function waitForElm(selector) {
    return new Promise(resolve => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector))
      }

      const observer = new MutationObserver(mutations => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector))
          observer.disconnect()
        }
      })

      observer.observe(document.body, {
        childList: true,
        subtree: true
      })
    })
  }

  waitForElm(`#safe-search-toggle[aria-checked=true]`).then(e => e.click())
})()
