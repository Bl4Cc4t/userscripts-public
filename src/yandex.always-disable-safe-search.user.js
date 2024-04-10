// ==UserScript==
// @name          Yandex - Always disable safe search
// @version       0.1
// @description   Always disable the safe search toggle when performing a search on yandex.
// @author        schwarzkatz
// @match         https://yandex.com/*
// @grant         none
// @updateURL     https://github.com/Bl4Cc4t/userscripts-public/raw/master/src/yandex.always-disable-safe-search.user.js
// @downloadURL   https://github.com/Bl4Cc4t/userscripts-public/raw/master/src/yandex.always-disable-safe-search.user.js
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

  waitForElm(`.head-filter_type_moderate`).then(() => $(`[role=menuitem] > [data-bem*=unlimited]`).click())
})()
