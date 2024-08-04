// ==UserScript==
// @name            Groww - Allow open in new tab
// @match           https://groww.in/*
// @version         0.1
// @description     Allows opening links in new tabs.
// @author          schwarzkatz
// @grant           GM_openInTab
// @require         https://github.com/Bl4Cc4t/userscripts-public/raw/master/lib/react-util.js?v0.1
// @updateURL       https://github.com/Bl4Cc4t/userscripts-public/raw/master/src/groww.allow-open-in-new-tab.user.user.js
// @downloadURL     https://github.com/Bl4Cc4t/userscripts-public/raw/master/src/groww.allow-open-in-new-tab.user.user.js
// ==/UserScript==

// Important: currently does not work in Firefox due to CSP issues.

const GLOBALS = {
    reactRootSelector: "[data-reactroot]",
    isCtrlClick: false,
    pushIsPatched: false
}

/**
 * Allow opening of react <Link> elements in new tabs.
 */
function allowOpenInNewTab() {
    // allow ctrl clicks
    document.body.addEventListener("click", event => {
        GLOBALS.isCtrlClick = event.ctrlKey
        patchRouterPush()

    }, { capture: true })

    // allow middle mouse clicks
    document.body.addEventListener("auxclick", event => {
        GLOBALS.isCtrlClick = true
        patchRouterPush()
        event.target.dispatchEvent(new MouseEvent("click", { ctrlKey: true, bubbles: true }))
    })
}

/**
 * Patches the react-router push function for intercepting.
 */
function patchRouterPush() {
    if (GLOBALS.pushIsPatched) return
    console.log("patching react-router::push")

    const router = getRootReactPropByName(reactRootSelector, "router")
    const _push = router.push
    router.push = function() {
        if (typeof arguments[0] !== "string") {
            console.error("unhandled react-router push arguments", arguments)
            return _push.apply(this, arguments)
        }

        if (!GLOBALS.isCtrlClick)
            return _push.apply(this, arguments)

        GM_openInTab(`${location.origin}${arguments[0]}`)
        return true
    }

    console.log("patched react-router::push")
    GLOBALS.pushIsPatched = true
}


(function() {
    try {
        allowOpenInNewTab()
    } catch (e) {
        console.error(e)
    }
})()
