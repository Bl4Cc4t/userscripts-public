// ==UserScript==
// @name          Google Search - Pre 2021 style
// @version       0.3
// @description   Small script to get the non-experimental look without Google Sans back (https://imgur.com/a/pbjChlu)
// @author        schwarzkatz
// @match         https://www.google.com/search*
// @grant         GM_addStyle
// @updateURL     https://github.com/Bl4Cc4t/userscripts-public/raw/master/google_search.pre21style.user.js
// @downloadURL   https://github.com/Bl4Cc4t/userscripts-public/raw/master/google_search.pre21style.user.js
// ==/UserScript==

(function() {
  GM_addStyle(`
    * {
      font-family: arial, sans-serif !important;
    }
    /* Smaller headers */
    #res h3, #botstuff h3, h2 {
      font-size: 20px !important;
      line-height: 26px !important;
      letter-spacing: unset !important;
    }

    /* smaller, hover-only box shadow */
    form[role=search] .logo + div {
      box-shadow: none !important;
      border-color: rgb(223, 225, 229) !important;
    }
    form[role=search] .logo + div:hover {
      box-shadow: 0 1px 6px rgba(32,33,36,.28) !important;
    }
    em {
      font-weight: bold !important;
    }
  `)

  // removes the font styling completely, some elements (People also ask/h2) are not matched by the css above, since they have an !important flag
  Array.from(document.querySelectorAll("style")).find(e => e.textContent.match(/^@font-face/)).remove()
})()
