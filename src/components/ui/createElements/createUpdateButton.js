import { updateTask } from "../../index.js";

export function createUpdateButton(todo) {
  const updateButton = document.createElement("button");
  updateButton.classList.add("button-change");

  updateButton.addEventListener("click", () => updateTask(todo));

  const updateIcon = document.createElement("img");
  updateIcon.src = "./assets/icons/icon-update.png";
  updateIcon.alt = "Change";
  updateIcon.title = "Change";
  updateIcon.width = 24;

  updateButton.append(updateIcon);

  return updateButton;
}
