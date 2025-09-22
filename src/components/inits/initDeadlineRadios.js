import { updateTodoDeadline } from "../../API/index.js";
import { loadData } from "../index.js";
import { showError } from "../../utils/notification.js";

export function initDeadlineRadios(todo, todoElement) {
  const radios = todoElement.querySelectorAll(".radio__button");

  radios.forEach((radio) => {
    const value = radio.value;

    radio.checked = todo[value] === true;

    radio.addEventListener("click", async (e) => {
      if (radio.checked && todo[value] === true) {
        radio.checked = false;

        const updatedFields = {
          day: false,
          week: false,
          month: false,
        };

        try {
          await updateTodoDeadline(todo.id, updatedFields);
          await loadData();
        } catch (error) {
          showError("Error removing deadline");
        }
      } else {
        const updatedFields = {
          day: false,
          week: false,
          month: false,
          [value]: true,
        };

        try {
          await updateTodoDeadline(todo.id, updatedFields);
          await loadData();
        } catch (error) {
          showError("Error updating deadline");
        }
      }
    });
  });
}
