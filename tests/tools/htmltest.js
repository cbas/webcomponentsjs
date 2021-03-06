/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

// if standalone
if (window.top === window) {
  // if standalone
  var failed = false;
  window.done = function() {
    window.onerror = null;
    if (!failed) {
      var d = document.createElement('pre');
      d.style.cssText = 'padding: 6px; background-color: lightgreen;';
      d.textContent = 'Passed';
      document.body.appendChild(d);
    }
  };
  window.onerror = function(x) {
    failed = true;
    var d = document.createElement('pre');
    d.style.cssText = 'padding: 6px; background-color: #FFE0E0;';
    d.textContent = 'FAILED: ' + x;
    document.body.appendChild(d);
  };
} else
// if part of a test suite
{
  window.done = function() {
    window.onerror = null;
    parent.postMessage('ok', '*');
  };

  window.onerror = function(x) {
    parent.postMessage({error: x}, '*');
  };
}

