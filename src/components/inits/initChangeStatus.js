import { toggleTodoStatus } from "../../API/index.js";
import { loadData } from "../index.js";
import { showError } from "../../utils/notification.js";

export function initChangeStatus(todo, checkbox) {
  checkbox.addEventListener("change", async () => {
    try {
      await toggleTodoStatus(todo, checkbox.checked);
      await loadData();
    } catch (error) {
      showError("Не удалось изменить статус задачи!");
    }
  });
}
