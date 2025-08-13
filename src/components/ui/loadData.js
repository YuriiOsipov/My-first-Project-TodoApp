import { showError, showInfo } from "../../utils/notification.js";
import { getTodos } from "../../API/index.js";
import { renderData } from "../index.js";
import { getUserInfo } from "../../utils/authHealper.js";
import { deleteCompletedButton } from "../index.js";

import { showLoader, hideLoader } from "../../utils/healpers.js";

export let cachedTodos = [];

export async function loadData() {
  try {
    showLoader();

    const { uid, token } = await getUserInfo();
    const todos = await getTodos(uid, token);

    cachedTodos = todos.map((todo) => ({ ...todo }));

    if (cachedTodos.length === 0) {
      showInfo("У вас пока нет задач");
      deleteCompletedButton.style.display = "none";
    } else {
      renderData(cachedTodos);
    }

    return cachedTodos;
  } catch (error) {
    console.error(error.message);

    showError("Не удалось получить данные!");
  } finally {
    hideLoader();
  }
}
