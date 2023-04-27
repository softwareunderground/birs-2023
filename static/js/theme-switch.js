// Get theme button by id
const themeButton = document.getElementById("themeSwitcher");

// Check if there's a persistent configuration of the website's theme
let theme = localStorage.getItem("theme");
if (theme) {
  toggleTheme(theme);
}

function setTheme(theme) {
  // Change the data-theme attribute of the page
  if (theme == "auto") {
    document.body.removeAttribute("data-theme");
  } else {
    document.body.setAttribute("data-theme", theme);
  }
}

function updateIcon(theme) {
  // Update icon of the theme switcher button
  if (theme == "dark") {
    fa_icon_class = "fa-solid fa-moon";
  } else if (theme == "light") {
    fa_icon_class = "fa-solid fa-sun";
  } else {
    fa_icon_class = "fa-solid fa-circle-half-stroke";
  }
  icon = themeButton.querySelector("i");
  icon.removeAttribute("class");
  icon.setAttribute("class", fa_icon_class);
}

function toggleTheme(theme) {
  // Toggle website's theme
  //
  // Changes data-theme attribute of the page, updates button icon and saves
  // the current configuration to localStorage so the change is persistent
  setTheme(theme);
  updateIcon(theme);
  localStorage.setItem("theme", theme);
}

themeButton.addEventListener("click", () => {
  theme = "auto";
  if (!document.body.hasAttribute("data-theme")) {
    theme = "dark";
  } else if (document.body.getAttribute("data-theme") == "dark") {
    theme = "light";
  } else if (document.body.getAttribute("data-theme") == "light") {
    theme = "auto";
  }
  toggleTheme(theme);
});
