import { updateTaskOrderOnServer } from "../../API/index.js";
import { showLoader, hideLoader } from "../../utils/healpers.js";
import { showError } from "../../utils/notification.js";

export async function updateTasksOrder(container) {
  const todos = [...container.querySelectorAll(".todo")];
  const updatedOrder = todos.map((todo, index) => {
    return {
      id: todo.getAttribute("data-id"),
      order: index + 1,
    };
  });

  try {
    showLoader();
    for (const task of updatedOrder) {
      await updateTaskOrderOnServer(task.id, task.order);
    }

    return true;
  } catch (error) {
    showError("Failed to update task order!");
  } finally {
    hideLoader();
  }
}
