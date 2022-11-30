// ========== DARK THEME ========== //

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// PREVIOUSLY SELECTED TOPIC (checking from local storage)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.body.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We need to validate if the user has previously chosen a topic

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / desactivate the theme manually with the button

themeButton.addEventListener("click", () => {
  // Add or remove the dark/light icon --icon them
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user has chosen
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentTheme());
});

console.log("THEME SETTING IS WORKING !");

// ========== MENU SHOW Y HIDDEN ========== //
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// ========== MENU SHOW =========== //
// Validate if the constant exists

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// ========== MENU HIDE =========== //
// Validate if the constant exists

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

console.log("MENU SETTING IS WORKING !");

// ========== REMOVE MENU PROFILE =========== //

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // when we click on nav__link, we remove the show menu
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));
console.log("Remove menu profile is working !");

// ========== Typewriter Effect =========== //


new Typewriter('#typewriter', {
  strings: ['Arnaud Berrier', 'Web developer', 'FullStack Developer', 'Mobile Developer'],
  autoStart: true,
  loop: true,
  cursor: "|"
});
console.log("Typewriter effect is working !"); 
