import { initChangeImportantStatus } from "../../index.js";

export function createCheckboxImportant(todo) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute("id", `important=${todo.id}`);
  checkbox.classList.add("checkbox-important__input");
  checkbox.checked = todo.important;

  initChangeImportantStatus(todo.id, checkbox);

  return checkbox;
}
