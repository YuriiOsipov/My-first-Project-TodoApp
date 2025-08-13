import { burgerButton, sidebar } from "./sidebar.js";

export function toggleSidebar() {
  const isOpen = sidebar.classList.toggle("open");

  burgerButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
}
