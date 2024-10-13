let navigation = document.querySelector(".navigation");
let navToggle = document.querySelector(".header__toggle");

navigation.classList.remove("navigation--no-js");

navToggle.addEventListener("click", function () {
  if (navigation.classList.contains("navigation--closed")) {
    navigation.classList.remove("navigation--closed");
    navigation.classList.add("navigation--opened");
    navToggle.setAttribute("aria-label", "закрыть меню");
  } else {
    navigation.classList.add("navigation--closed");
    navigation.classList.remove("navigation--opened");
    navToggle.setAttribute("aria-label", "открыть меню");
  }
});