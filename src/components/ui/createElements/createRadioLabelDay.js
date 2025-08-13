export function createRadioLabelDay(todo) {
  const label = document.createElement("label");
  label.classList.add("radio__label");
  label.setAttribute("for", `day-id_${todo.id}`);
  label.textContent = "Day";
  return label;
}
