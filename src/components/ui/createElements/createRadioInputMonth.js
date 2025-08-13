export function createRadioInputMonth(todo) {
  const checkbox = document.createElement("input");
  checkbox.type = "radio";
  checkbox.classList.add("radio__button");
  checkbox.setAttribute("id", `month-id_${todo.id}`);
  checkbox.setAttribute("name", `task-deadline${todo.id}`);
  checkbox.setAttribute("value", "month");

  checkbox.checked = todo.month;

  return checkbox;
}
