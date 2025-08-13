export function createLabelCheckbox(todo) {
  const labelCheckbox = document.createElement("label");
  labelCheckbox.classList.add("checkbox", "checkbox-completed");

  labelCheckbox.setAttribute("for", `completed=${todo.id}`);

  const span = document.createElement("span");
  span.classList.add("checkbox-custom");

  labelCheckbox.append(span);

  return labelCheckbox;
}
