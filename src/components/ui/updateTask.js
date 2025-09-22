import { showError } from "../../utils/notification.js";
import { loadData } from "../index.js";
import { updateTodo } from "../../API/index.js";

export async function updateTask(todo) {
  const { value: newText } = await Swal.fire({
    title: "Editing a task",
    input: "text",
    inputLabel: "Enter the text of the new task",
    inputValue: todo.text,
    showCancelButton: true,
    confirmButtonText: "Save",
    cancelButtonText: "Cancel",
    inputValidator: (value) => {
      if (!value) {
        return "The field cannot be empty";
      }
    },
  });

  if (newText) {
    try {
      await updateTodo(todo.id, newText);
      await loadData();
    } catch (error) {
      showError("Failed to edit task!");
    }
  }
}
