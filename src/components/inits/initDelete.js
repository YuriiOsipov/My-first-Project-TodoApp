import { deleteTodo } from "../../API/index.js";
import { loadData } from "../index.js";
import { showConfirmation, showError } from "../../utils/notification.js";

export function initDelete(todo, deleteButton) {
  deleteButton.addEventListener("click", async () => {
    const isConfirmed = await showConfirmation(
      "Вы уверены, что хотите удалить эту задачу навсегда?"
    );
    if (!isConfirmed) {
      return;
    }

    try {
      await deleteTodo(todo.id);
      await loadData();

      deleteButton.closest(".todo").remove();
    } catch (error) {
      showError("Не удалось удалить задачу");
    }
  });
}
