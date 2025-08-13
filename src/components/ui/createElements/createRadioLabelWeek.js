export function createRadioLabelWeek(todo) {
  const label = document.createElement("label");
  label.classList.add("radio__label");
  label.setAttribute("for", `week-id_${todo.id}`);
  label.textContent = "Week";
  return label;
}
