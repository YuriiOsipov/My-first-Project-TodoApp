import { host } from "../host.js";
import { getUserInfo } from "../../utils/authHealper.js";

export async function updateTodoDeadline(id, updatedFields) {
  try {
    const { uid, token } = await getUserInfo();

    const response = await fetch(`${host}/${uid}/${id}.json?auth=${token}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFields),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to update task deadline. Deadline: ${response.status}`
      );
    }

    return true;
  } catch (error) {
    throw error;
  }
}
