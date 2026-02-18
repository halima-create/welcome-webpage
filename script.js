// script.js - JavaScript interactions

// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
  // Get the button element
  const alertButton = document.getElementById("alertButton");

  // Add click event listener to the button
  alertButton.addEventListener("click", function () {
    // Show alert message when button is clicked
    alert(
      "🎉 Hello! Thanks for clicking the button!\n\nThis is your JavaScript alert working properly.",
    );

    // Optional: Log to console
    console.log("Button was clicked at:", new Date().toLocaleTimeString());
  });

  // Optional: Add welcome message in console
  console.log("✅ Page loaded successfully!");
  console.log("📝 Try clicking the purple button.");
});
