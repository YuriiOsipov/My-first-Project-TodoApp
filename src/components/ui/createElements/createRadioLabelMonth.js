export function createRadioLabelMonth(todo) {
  const label = document.createElement("label");
  label.classList.add("radio__label");
  label.setAttribute("for", `month-id_${todo.id}`);
  label.textContent = "Month";
  return label;
}
