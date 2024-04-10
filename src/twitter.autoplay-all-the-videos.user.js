// ==UserScript==
// @name            Twitter - Autoplay all the videos
// @match           https://mobile.twitter.com/*
// @match           https://twitter.com/*
// @match           https://x.com/*
// @version         0.2
// @description     Autoplays all the videos. Useful if you use a user style to unblur media, like this one: https://userstyles.world/style/15658/twitterx-disable-media-tab-blur
// @author          schwarzkatz
// @grant           none
// @require         https://github.com/Bl4Cc4t/userscripts-public/raw/master/lib/waitForKeyElements.js
// @updateURL       https://github.com/Bl4Cc4t/userscripts-public/raw/master/src/twitter.autoplay-all-the-videos.user.js
// @downloadURL     https://github.com/Bl4Cc4t/userscripts-public/raw/master/src/twitter.autoplay-all-the-videos.user.js
// ==/UserScript==


// override pause function with dummy
const HTMLMediaElement_pause = HTMLMediaElement.prototype.pause
HTMLMediaElement.prototype.pause = function() {}

/**
 * Plays a video.
 * @param {HTMLMediaElement} video
 */
function play(video) {
    console.log("playing", video)
    document.querySelectorAll("video").forEach(pause)
    video.play()
}

/**
 * Pauses a video.
 * @param {HTMLMediaElement} video
 */
function pause(video) {
    if (video.paused)
        return
    console.log("paused", video)
    HTMLMediaElement_pause.apply(video)
}

/**
 * Re-enables manual pausing via the player controls.
 */
function reenablePlayerPause() {
    const selector = `
        [data-testid=videoComponent] > :nth-child(2) :not([class]) > :empty,
        [data-testid=videoComponent] [data-testid=scrubber] + * > :nth-child(1) [role=button]`
    waitForKeyElements(selector, element => {
        const video = element.closest(`[data-testid=videoComponent]`).querySelector("video")
        element.addEventListener("click", () => pause(video))
    }, false)
}

/**
 * Creates an observer videos that become visible in the viewport.
 * @returns {IntersectionObserver}
 */
function autoplayVideos() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const target = entry.target
            if (entry.isIntersecting) {
                play(target)
            } else {
                pause(target)
            }
        })
    }, {
		rootMargin: '0px 100px',
		threshold: 0.9
    })

    waitForKeyElements(`article video`, video => observer.observe(video))
}


(function() {
    autoplayVideos()
    reenablePlayerPause()
})()
