// toggle.js

(function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  //  Default to light theme
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  } else if (savedTheme === "light") {
    document.body.classList.remove("dark");
  } else {
    // No saved preference → use light by default
    document.body.classList.remove("dark");
  }
})();

// Theme toggle logic
document.getElementById("theme-toggle").addEventListener("click", function () {
  const body = document.body;
  const isDark = body.classList.toggle("dark");

  // Save preference
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
