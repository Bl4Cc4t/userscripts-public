// ==UserScript==
// @name          Reddit - Unblur all posts
// @version       0.1
// @description   Always show unblurred posts (tagged as spoilers)
// @author        schwarzkatz
// @match         https://www.reddit.com/*
// @grant         GM_addStyle
// @require       https://github.com/Bl4Cc4t/userscripts-public/raw/master/lib/waitForKeyElements.js
// @updateURL     https://github.com/Bl4Cc4t/userscripts-public/raw/master/src/reddit.unblur-all-posts.user.js
// @downloadURL   https://github.com/Bl4Cc4t/userscripts-public/raw/master/src/reddit.unblur-all-posts.user.js
/// @run-at        document-start
// ==/UserScript==


(function() {
  GM_addStyle(`
    [data-click-id="media"] .ImageBox-image[src*="blur="] {
      filter: unset !important;
      height: 100% !important;
      width: auto !important;
    }
  `)



  // single image
  waitForKeyElements(`[data-click-id="media"] .ImageBox-image[src*="//preview."][src*="blur="]`, e => {
    e.src = e.src.replace("//preview.", "//i.")
  })


  // external media
  waitForKeyElements(`[data-click-id="media"] .ImageBox-image[src*="//external-preview."][src*="blur="]`, e => {
    let post = e.closest(`[data-testid="post-container"]`)
    if (!post) return

    let link = post.querySelector(`[data-testid="outbound-link"]`)
    if (!link) return

    // normal image
    else if (link.href.match(/\.(jpe?g|png)/)) {
      e.src = link.href
    }

    // embed
    // else {
    //
    // }
  })
})()
