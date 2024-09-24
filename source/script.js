let navigation = document.querySelector(".navigation");
let navToggle = document.querySelector(".header__toggle");

navigation.classList.remove("navigation--no-js");

navToggle.addEventListener("click", function () {
  if (navigation.classList.contains("navigation--opened")) {
    navigation.classList.remove("navigation--opened");
    navigation.classList.add("navigation--closed");
  } else {
    navigation.classList.add("navigation--opened");
    navigation.classList.remove("navigation--closed");
  }
});
