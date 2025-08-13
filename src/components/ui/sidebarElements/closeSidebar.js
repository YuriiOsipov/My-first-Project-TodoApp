import { burgerButton, sidebar } from "./sidebar.js";

export function closeSidebar() {
  sidebar.classList.remove("open");
  burgerButton.setAttribute("aria-expanded", "false");
}
