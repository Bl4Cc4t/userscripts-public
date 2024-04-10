// ==UserScript==
// @name          Patreon - Old Style
// @version       0.1
// @description   non-mobile layout for patreon
// @author        schwarzkatz
// @match         https://www.patreon.com/*
// @grant         GM_addStyle
// @grant         GM_getResourceText
// @require       https://github.com/Bl4Cc4t/userscripts-public/raw/master/lib/waitForKeyElements.js
// @resource      css https://github.com/Bl4Cc4t/userscripts-public/raw/master/src/picarto.pre21style.css
// @updateURL     https://github.com/Bl4Cc4t/userscripts-public/raw/master/src/patreon.old-style.user.js
// @downloadURL   https://github.com/Bl4Cc4t/userscripts-public/raw/master/src/patreon.old-style.user.js
// @run-at        document-start
// ==/UserScript==


(function() {
  // stylesheet
  waitForKeyElements("head", () => GM_addStyle(GM_getResourceText("css")))

  // favicon
  waitForKeyElements("head [rel*=shortcut]", e => e.href = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB8lBMVEUAAAD6aFT5aFT5aFT5aFT5aFT5aFT5aFT5aFT6aVX5aFT5aFT5aFT5aFT5aFT6aVX5aFT5aFT5aFT5aFT5aFT5aFT5aFT5aFT6aVX5aFT6aVX5aFT5aFT5aFT5aFT5aFT5aFT5aFT5aFT5aFT7aVb5aFT5aFT5aFT5aFT5aFT7alb6aFX5aFT6aFT7aFT5Z1P5ZlH5Z1L5ZlL7aVTMXVJxR05wR05tRk6dUlD4aFT6eWj7l4n8r6T8u7L8urH8q6D7kYP5dWL9aVSpVVAELUkBLEkAK0lTQEz3Z1T6fm3+6eb//Pz/////+vn+4t78rqP6dmSqVVAILkkFLUlWQU35aVX7nI7+6OX//v7+3Nj6i3z7pZn/9vT+7On7lYf/9PL+5+T6gnH6d2X+39v9ycL5bFn7qJ3/9/b7j4D5aFP5b1z92NP8vrb6gXH+8vD5cV77koT/+/v+7uz6fGv5ZVH7mo3//v3/8/L6gnL7loj+8e/6f276iHj/9vX+5uL5dWP5dGL+49/9y8T5alb8urD//fz7n5L6hHT+3dj7lon9xLz5cl/8vrX/+fn8q5/5a1j5bFj7nI/+3dn/+Pf90s36j4D5c2D91dD+3tr90sz8t675blv5cF75cF2oVVD8aVTGXFJeQ01dQk1aQU2QT0/3aFT/QXqdAAAALHRSTlMADTZuo8zn9v0DJ3K86fwCLZDi/hV8Or8EXQVx8fTwOxa+LuEBKLtty+YBA9OIpq4AAAABYktHREz3bxDzAAAAB3RJTUUH5gcWFBAd+XDzSAAAAnxJREFUSMedlvdb00Acxq8lkEBpIYECpcyWUeAwaVQUUUS0LoJVEUXFWVGKG/cEB04U956o/6cZl3WXtMb3p9yT9/Pc+I47ADD5/AVUYRHNMHRRIVXg94GcKi4JlAZD0FAoWBooKXa1l5WzXAXEVMGx5WXO/sowBx3FhSud/FXVDHQRU11F2GsiHMwhLlJj99dG62BO1UVrbacTrYd5VB+1nlakIZ8fwoaI6W9U19+9RFa3YeAFISkKAm/uo1H3NzUr46XLlvf0rFjZq/1NwlV9q9f0rx1YxxtIcxMCwmq0BtdvSKU2btqs+bf0bx2SZA1vS28X9RiGNX8srg4Hd+wcGUntUoHR3XskXWN79+lzxGOKv4WFBLB/XLLowEASEWyLDLTGcUA8eEiy6fARtKp4qwwEIAbwRzMSpmMTyBSQ878NB8TjYzhwYhJN0eYD/iAGZKdOSoROIVPQD9pDGCCePkMCmbPaSYXaAQUxQDh3ngSmL6CjpUACBy5eukwCV66iTSRABzHDtSESuH4DhaID0Dgg3rxFArdn0JJowOAAP3uHBO7eQy6GBGD2PuGfeyAaALEkKD6cxoFHs3r+0eSm5c/0nN0//lifQN50ggT4qSe25BhOjxpllyADp1Tn0/lnlhg8XzDrlCJTQ63nFy9foXi/fvMWZg2/nBpE8mkj8V3f/PvMh4+fJj8b69eSj0xvvWnwE1++LiTFrMWvpDdZQKZ4mxkVkEOJukst0U723wG206XNuE0QszWyb5ZG5ii9kaFW+f3Hz8XFX7//uANGq0TNGPYqcvebzdh7u/d+oXi+srxfit6v3f+42L0/HWR1OT1OukBO5Xv+/AWLTZF8GkfmoQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wNy0yMlQyMDoxNToyNCswMDowMEvNYtoAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDctMjJUMjA6MTA6NDIrMDA6MDB5Bi2fAAAAAElFTkSuQmCC`)
  waitForKeyElements(`head [sizes="16x16"]`, e => e.href = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA81BMVEUAAAD5aFT6aVX5aFT5aFT5aFT5aFT5aFT5aFT5aFT5aFT5aFT5aFT5aFT5aFT5aFT5aFT5aFT6aFT8aVT5Z1P5ZlH5ZlL7aVTBWlF8Sk7WYFL7Z1P5cV77m438tKr7pZn6emj9aVSMTk8GLUm1V1D9dWL9zMX//Pz////+4d36hXX5Z1KNTk8JLkm2Vk//rqL9zcb5bFm2W1T/0sv+7Om2WlP/zcb+6OX6d2X/oJP/+/r8v7b5aVa2V1H9blr8s6n+8e///fz/9/b9ysP6eGa2WFH9aFT6gnH7loj6iXr5blqLTk+1WFH5ZVG+WlF2SE7VX1JYhpcLAAAAEXRSTlMAAAAHSKjk+xiS7rAGSe2n42Mv5ZcAAAABYktHRCi9sLWyAAAAB3RJTUUH4QYPFyQ4BmxrvAAAAL9JREFUGNNlj8UWwkAMRTPYtGhThhaHosXd3V3+/2uYaVlBdrnnJO8+ACBOl9tDqcftchIAcBBJ9qI1XlkiDiCSTw2ryCJahKFPIuCX9Wgsnkim0pksQ9kPgaCRyxeKpbJpVqq1YABCaNQbzZYppt3BECgCdHsW6GeZAlSAwdACozGjNmhOpgLM5kjtk8Vytd5sd3uGiv30cJyfzpcrQ/6Ux97ydwO1h8ZleSwXe77eui0vxIS6rn53of5X7rf+BzvbGUoTUe2MAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA2LTE1VDIzOjM2OjU2KzAyOjAwNuIxOQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNi0xNVQyMzozNjo1NiswMjowMEe/iYUAAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII=`)
  waitForKeyElements(`head [sizes="32x32"]`, e => e.href = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABg1BMVEUAAAD5aFT6aVX5aVX5Z1P5aFX5aFT5aFT5aFT5aFT5aFT5aFT5aFT5aFT5aFT5aFT5aFT5aFT5aFT5aFT5aFT5aFT5aFT5aFT5aFT5aFT5aFT6aVX5aFT5aFT5aFT5aFT5aFT5aFT7aFT7aVT6aFT5Z1P5Z1L3Z1TcYVPVX1LoZFP5ZlL5blv6emj6fWz6dWP5aVbsZVNJPkwaMkqST0/8aVT6d2X8rKH92dT+7Or+7+3+5uP9x8D7kYL5albrZVM1OUsALEkBLEmGTE/9aVT6iXr+3dn//v7/////9vX8t675b1w2OUsCLEmHTE/6gnL+5eL//f35bFj9ycL7kYP9Z1L6iHj/9PP9yMD9Z1H8qJz+5+P6dmT+8O/6fm38s6n+7uz6fGr7m47//fz+3Nf5cF39aFP6eWf8sab8qJ3//Pv+4t78vrX//Pz+6uj7j4D8qp7+6eb/+Pf90Mr6h3f6emn7npH8vbT8rqP6jX75ZlFEPEwTMEqPTk/2Z1TLXVLkY1NSnefyAAAAIXRSTlMAAAAAAAAEKWys2fL9AzaX3/saieo1wv5B2MECN+kq3vzx1iI8AAAAAWJLR0RI8ALU6gAAAAd0SU1FB+EGDxckOAZsa7wAAAG3SURBVDjLhZPnU8JAEMXvbKQoVQUEhBMSxWBFbNiNGhDsvffee8c/3VxywgGOvOEDM+83e5vdtwAQwTIDw3J8eTnPsYyhDIJswQqjyWxBRBazyVhBI0XQaqtEWaq0WWHRr19cUlVtRzmyV1eVFOt+KXRw6A9xDliq1zc6Earz+wPEEERB/+M0aq9Aaw1C9Q3BYCMmBCnU1NzSKmlEjVXtFLpsCAXa2sPhjghCUmdXd09vtK9/QKtic0EA3R4VGBwaHhmVkTg2PqFgxeKTmPC4IXCZEAYSyeSULE7PKESz8QFcwuQCtd4MMDevpBVbwH14awFjSQOLS8sZQFnBJSwMYFEaWF2jfGV9A3fBAi4DLMZpYHNLxNMCPAVs08DOLq7AAx/1xN4+BRwcYsBHA0fHUQo40Ublo5+QhdOztH/epAE83aQshC4uiX91LeorpT9TRkLo5nZWte/uH8hGWXpQsrpM4fEp/vzyGpJI+JisUWtpeJPU329o1FHTy8pPlbossu7ECF53rvC6SWDePz4+8wEcGD1yX8FU6juQ62uRI6H1RyJ5PgltwdirRIHDKXx6hY/3v/P/Ab4tm0M/xuolAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA2LTE1VDIzOjM2OjU2KzAyOjAwNuIxOQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNi0xNVQyMzozNjo1NiswMjowMEe/iYUAAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII=`)

  // navbar stuff
  waitForKeyElements("#account-menu-toggle > :nth-child(1) [src]", avatar => avatar.closest("#account-menu-toggle").insertAdjacentHTML("beforebegin", `
    <div class="pos-navbar-msg">
      <a href="/messages?mode=${avatar.getAttribute("src").match("/user/") ? "patron" : "campaign"}">
        <svg viewBox="0 0 24 24"><path d="M7.333 12.667l-2.666 2.666v-4H3.333A1.333 1.333 0 0 1 2 10V3.333C2 2.597 2.597 2 3.333 2h9.334C13.403 2 14 2.597 14 3.333V6" data-fill="1" data-stroke="1" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M11.333 18A1.333 1.333 0 0 1 10 16.667V10c0-.736.597-1.333 1.333-1.333h9.334C21.403 8.667 22 9.264 22 10v6.667c0 .736-.597 1.333-1.333 1.333h-1.334v4l-4-4h-4z" data-fill="1" data-stroke="1" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
    </div>
  `))

  // dropdown
  waitForKeyElements("#account-menu [role=dialog]", dropdown => dropdown.insertAdjacentHTML("beforeend", `
    <div class="pos-dropdown">${
      Object.entries({
        "Posts from my creators": "/home",
        "My profile":             "/user",
        "Explore creators":       "/search",
        "Manage memberships":     "/pledges",
        "My profile settings":    "/settings",
        "Help Center & FAQ":      "https://support.patreon.com/hc/en-us",
        "Create on Patreon":      "/create",
        "Log out":                "/logout",
      }).map(e => `<a href="${e[1]}">${e[0]}</a>`).join("")
    }</div>
  `))

  waitForKeyElements(`[data-tag=post-content-collapse]`, e => e.addEventListener("click", evt => {
    evt.stopImmediatePropagation()
  }))
})()
