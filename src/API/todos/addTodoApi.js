import { host } from "../host.js";
import { getUserInfo } from "../../utils/authHealper.js";

export async function addTodo(newTodo) {
  try {
    const { uid, token } = await getUserInfo();

    const response = await fetch(`${host}/${uid}.json?auth=${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });

    if (!response.ok) {
      throw new Error(`Не удалось добавить задачу. Статус: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}
