/**
 * enableUI.js
 * A simple script to display the hostname of the current page.
 * Hosted via GitHub CDN or similar.
 */

(function () {
  /**
   * Function to alert the hostname of the current page.
   */
  function jslogger() {
    alert(window.location.hostname);
  }

  // Expose the function globally to be accessible when included via <script>.
  window.enableUI = jslogger;
})();
