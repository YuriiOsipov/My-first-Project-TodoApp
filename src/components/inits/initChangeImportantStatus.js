import { toggleTodoImportantStatus } from "../../API/index.js";
import { loadData } from "../index.js";
import { showError } from "../../utils/notification.js";

export function initChangeImportantStatus(todo, checkbox) {
  checkbox.addEventListener("change", async () => {
    try {
      await toggleTodoImportantStatus(todo, checkbox.checked);
      await loadData();
    } catch (error) {
      showError("Failed to change task status!");
    }
  });
}
