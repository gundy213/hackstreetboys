// Select the button
use strict;

const btn = document.querySelector(".btn-toggle");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");

// Listen for a click on the button
btn.addEventListener("click", function() {
  // If the current URL contains "css/lightTheme.css"
  if (theme.getAttribute("href") == "css/lightTheme.css") {
    // ... then switch it to "css/darkTheme.css"
    theme.href = "css/darkTheme.css";
  // Otherwise...
  } 
  else {
    // ... switch it to "css/lightTheme.css"
    theme.href = "css/lightTheme.css";
  }
}
