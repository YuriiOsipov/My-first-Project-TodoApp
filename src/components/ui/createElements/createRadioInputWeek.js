export function createRadioInputWeek(todo) {
  const checkbox = document.createElement("input");
  checkbox.type = "radio";
  checkbox.classList.add("radio__button");
  checkbox.setAttribute("id", `week-id_${todo.id}`);
  checkbox.setAttribute("name", `task-deadline${todo.id}`);
  checkbox.setAttribute("value", "week");

  checkbox.checked = todo.week;

  return checkbox;
}
