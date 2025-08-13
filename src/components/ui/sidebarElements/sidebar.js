import { closeSidebar, toggleSidebar } from "../../index.js";

export const burgerButton = document.getElementById("burger-button");
export const sidebar = document.getElementById("sidebar");

document.addEventListener("DOMContentLoaded", () => {
  burgerButton.addEventListener("click", toggleSidebar);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeSidebar();
    }
  });

  window.addEventListener("click", (e) => {
    const isClickInsideSidebar = e.target.closest("#sidebar");
    const isClickOnBurger = e.target.closest("#burger-button");

    if (!isClickInsideSidebar && !isClickOnBurger) {
      closeSidebar();
    }
  });
});
