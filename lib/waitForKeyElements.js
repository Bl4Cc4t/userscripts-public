/**
 * Execute callback function on elements once they are available in the DOM.
 * Heavily based on https://gist.github.com/BrockA/2625891 but without jQuery.
 * @param  {string}   selector        A valid CSS selector string.
 * @param  {Function} callback        The callback function to execute. Gets passed the added element node.
 * @param  {boolean}  wait_once       Optional: If set to false, continue to search for new elements even after the first match is found.
 * @param  {string}   iframe_selector Optional: valid CSS selector string for an iframe to search elements in.
 * @return {void}
 */
function waitForKeyElements(selector, callback, wait_once, iframe_selector) {
  var target_nodes
  var targets_found = false
  var WAIT_TIME_MS = 300
  

  // get the target nodes
  if (typeof iframe_selector == "undefined") {
    target_nodes = document.querySelectorAll(selector)
  }
  // get nodes from iframe
  else {
    var iframe = document.querySelector(iframe_selector)
    if (!iframe) return
    else {
      target_nodes = iframe.contentDocument.querySelectorAll(selector)
    }
  }


  if (target_nodes && target_nodes.length > 0) {
    targets_found = true

    // loop over all nodes and execute the callback function
    for (var i = 0; i < target_nodes.length; i++) {
      var node = target_nodes[i]

      if (!node.dataset.already_found) {
        callback(node)
        node.dataset.already_found = "true"
      }
    }
  }

  // Get the timer-control variable for this selector.
  var control_obj  = waitForKeyElements.control_obj || {}
  var control_key  = selector.replace(/[^\w]/g, "_")
  var time_control = control_obj[control_key]

  // Now set or clear the timer as appropriate.
  if (targets_found && wait_once && time_control) {
    // The only condition where we need to clear the timer.
    clearInterval(time_control)
    delete control_obj[control_key]
  }

  // Set a timer, if needed.
  else if (!time_control) {
    time_control = setInterval(function () { waitForKeyElements(selector, callback, wait_once, iframe_selector) }, WAIT_TIME_MS)
    control_obj[control_key] = time_control
  }
  waitForKeyElements.control_obj = control_obj
}
