// domain-logger.js

(function () {
    const logDomain = () => {
      try {
        const currentDomain = window.location.hostname;
        console.log(`Current Domain: ${currentDomain}`);
        alert(`Website Loaded! Current Domain: ${currentDomain}`); // Alert on page load with domain
        return currentDomain;
      } catch (error) {
        console.error("An error occurred while logging domain:", error);
      }
    };
  
    const loadScript = (src) => {
      try {
        const script = document.createElement("script");
        script.src = src;
        script.type = "text/javascript";
        script.async = true;
  
        script.onload = () => {
          console.log(`Successfully loaded script: ${src}`);
        };
  
        script.onerror = () => {
          console.error(`Failed to load script: ${src}`);
        };
  
        document.head.appendChild(script);
        return `Loading script: ${src}`;
      } catch (error) {
        console.error("An error occurred while loading the script:", error);
      }
    };
  
    // Expose functions to the global `window` object
    window.domainLogger = {
      logDomain,
      loadScript,
    };
  
    // Execute domain logging and alert on page load
    document.addEventListener("DOMContentLoaded", logDomain);
  })();
  
