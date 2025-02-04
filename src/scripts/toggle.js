"use strict";

const toggleBtn = document.querySelector(".theme-toggle__btn");
const toggleSwitch = document.querySelector(".theme-toggle__btn__switch");

const colorScheme = window.matchMedia("(prefers-color-scheme: light)");

const toggleTheme = (match) => {
  toggleSwitch?.setAttribute("data-toggle", match ? "false" : "true");
};

colorScheme.addEventListener("change", (e) => {
  const isLight = e.matches;
  toggleTheme(isLight);
});

let isClicked = false;
toggleBtn?.addEventListener("click", () => {
  isClicked = !isClicked;
  toggleTheme(!isClicked);
});
