// toggle.js

// Ensure default theme is dark unless user has a saved preference
(function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "light") {
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark"); // default = dark
  }
})();

// Toggle logic
document.getElementById("theme-toggle").addEventListener("click", function () {
  const body = document.body;
  const isDark = body.classList.toggle("dark");

  // Save preference
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
