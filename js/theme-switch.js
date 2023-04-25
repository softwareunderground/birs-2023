const themeButton = document.getElementById("themeSwitcher");

function toggleTheme(theme) {
    if (theme == "auto") {
        document.body.removeAttribute("data-theme");
    } else {
        document.body.setAttribute("data-theme", theme);
    }
}

function updateIcon(theme) {
    let icon = themeButton.querySelector("i");
    icon.removeAttribute("class");
    if (theme == "dark") {
        icon.setAttribute("class", "fa-solid fa-moon");
    } else if (theme == "light") {
        icon.setAttribute("class", "fa-solid fa-sun");
    } else if (theme == "auto") {
        icon.setAttribute("class", "fa-solid fa-circle-half-stroke");
    }
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
  updateIcon(theme);
});
