const burger = document.getElementById("burger");
const navlink_list = document.getElementsByClassName("navlink");
const navlinks = document.getElementById("navlinks");

function toggleBurgerIcon() {
  icon = burger.querySelector("i");
  if (icon.classList.contains("fa-times")) {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  } else if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  }
}

burger.addEventListener("click", () => {
  if (navlinks.classList.contains("navlinks-show")) {
    navlinks.classList.remove("navlinks-show");
  } else {
    navlinks.classList.add("navlinks-show");
  }
  toggleBurgerIcon();
});

for (i = 0; i < navlink_list.length; i++){
  navlink_list[i].addEventListener("click", () => {
      if (navlinks.classList.contains("navlinks-show")) {
        navlinks.classList.remove("navlinks-show");
        toggleBurgerIcon();
      }
  })
}
