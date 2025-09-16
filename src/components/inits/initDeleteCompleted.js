import { showError } from "../../utils/notification.js";
import { deleteCompletedTodos } from "../../API/index.js";
import { deleteCompletedButton, loadData, container } from "../index.js";
import { showConfirmation } from "../../utils/notification.js";

export function initDeleteCompleted() {
  deleteCompletedButton.addEventListener("click", async () => {
    const isConfirmed = await showConfirmation(
      "All completed tasks will be deleted! Are you sure?"
    );

    if (!isConfirmed) {
      return;
    }

    try {
      await deleteCompletedTodos(container);
      await loadData();
    } catch (error) {
      showError("Failed to delete task list");
    }
  });
}
