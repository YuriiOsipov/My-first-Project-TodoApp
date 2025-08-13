import { host } from "../host.js";
import { getUserInfo } from "../../utils/authHealper.js";

export async function toggleTodoImportantStatus(id, important) {
  try {
    const { uid, token } = await getUserInfo();

    const response = await fetch(`${host}/${uid}/${id}.json?auth=${token}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ important }),
    });

    if (!response.ok) {
      throw new Error(
        `Не удалось обновить статус важности задачи. Статус: ${response.status}`
      );
    }

    return true;
  } catch (error) {
    throw error;
  }
}
