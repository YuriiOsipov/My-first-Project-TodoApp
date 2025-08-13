export function createRadioInputDay(todo) {
  const checkbox = document.createElement("input");
  checkbox.type = "radio";
  checkbox.classList.add("radio__button");
  checkbox.setAttribute("id", `day-id_${todo.id}`);
  checkbox.setAttribute("name", `task-deadline${todo.id}`);
  checkbox.setAttribute("value", "day");

  checkbox.checked = todo.day;

  return checkbox;
}
