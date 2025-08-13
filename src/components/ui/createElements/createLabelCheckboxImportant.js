export function createLabelCheckboxImportant(todo) {
  const labelImportant = document.createElement("label");

  labelImportant.setAttribute("for", `important=${todo.id}`);

  labelImportant.classList.add("checkbox-important");

  return labelImportant;
}
