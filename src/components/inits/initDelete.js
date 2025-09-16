import { deleteTodo } from "../../API/index.js";
import { loadData } from "../index.js";
import { showConfirmation, showError } from "../../utils/notification.js";

export function initDelete(todo, deleteButton) {
  deleteButton.addEventListener("click", async () => {
    const isConfirmed = await showConfirmation(
      "Are you sure you want to delete this task permanently?"
    );
    if (!isConfirmed) {
      return;
    }

    try {
      await deleteTodo(todo.id);
      await loadData();

      deleteButton.closest(".todo").remove();
    } catch (error) {
      showError("Failed to delete task");
    }
  });
}
