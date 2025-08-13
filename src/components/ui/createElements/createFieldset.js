export function createFieldset(todo) {
  const fieldset = document.createElement("fieldset");
  fieldset.classList.add("radio__container");
  fieldset.setAttribute("data-id", todo.id);
  return fieldset;
}
