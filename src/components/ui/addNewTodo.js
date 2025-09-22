import { showError, showWarning } from "../../utils/notification.js";
import { addTodo } from "../../API/index.js";
import { loadData } from "../index.js";

export async function addNewTodo(taskInput) {
  const newTodoText = taskInput.value.trim();

  if (!newTodoText) {
    showWarning("Enter the task text!");
    return;
  }

  const newTodo = {
    text: newTodoText,
    createdAt: Date.now(),
    completed: false,
    important: false,
    day: false,
    week: false,
    month: false,
  };

  try {
    await addTodo(newTodo);
    taskInput.value = "";
    await loadData();
  } catch (error) {
    showError("Failed to add task!");
  }
}
