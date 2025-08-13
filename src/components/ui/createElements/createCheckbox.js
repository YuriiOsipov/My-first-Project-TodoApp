import { initChangeStatus } from "../../index.js";

export function createCheckbox(todo) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute("id", `completed=${todo.id}`);
  checkbox.classList.add("checkbox-input");
  checkbox.checked = todo.completed;

  initChangeStatus(todo.id, checkbox);

  return checkbox;
}
