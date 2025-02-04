"use strict";

const toggleBtn = document.querySelector(".theme-toggle__btn");
const toggleSwitch = document.querySelector(".theme-toggle__btn__switch");
const test = document.querySelector(".test");

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
  test.textContent = "working";
  setTimeout(() => {
    test.textContent = "";
  }, 1000);
  isClicked = !isClicked;
  toggleTheme(!isClicked);
});
