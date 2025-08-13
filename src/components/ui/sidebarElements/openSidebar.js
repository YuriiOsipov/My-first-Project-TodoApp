import { burgerButton, sidebar } from "./sidebar.js";

export function openSidebar() {
  sidebar.classList.add("open");
  burgerButton.setAttribute("aria-expanded", "true");
}
