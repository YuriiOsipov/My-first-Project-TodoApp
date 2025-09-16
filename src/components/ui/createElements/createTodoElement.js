import {
  createContainerCheckbox,
  createLabelCheckbox,
  createCheckboxImportant,
  createLabelCheckboxImportant,
  createCheckbox,
  createText,
  createTime,
  createDeleteButton,
  createUpdateButton,
  createFieldset,
  createLegend,
  createRadioLabelDay,
  createRadioLabelWeek,
  createRadioLabelMonth,
  createRadioInputDay,
  createRadioInputWeek,
  createRadioInputMonth,
  createHandleElement,
} from "../index.js";
import { initDeadlineRadios } from "../../index.js";

export function createTodoElement(todo) {
  const todoElement = document.createElement("div");
  todoElement.classList.add("todo");
  todoElement.setAttribute("data-id", todo.id);

  const containerCheckbox = createContainerCheckbox();
  const handle = createHandleElement();
  const fieldset = createFieldset(todo);
  const legend = createLegend();
  const radioLabelDay = createRadioLabelDay(todo);
  const radioLabelWeek = createRadioLabelWeek(todo);
  const radioLabelMonth = createRadioLabelMonth(todo);
  const radioInputDay = createRadioInputDay(todo);
  const radioInputWeek = createRadioInputWeek(todo);
  const radioInputMonth = createRadioInputMonth(todo);
  const labelCheckbox = createLabelCheckbox(todo);
  const labelImportant = createLabelCheckboxImportant(todo);
  const checkboxImportant = createCheckboxImportant(todo);
  const checkbox = createCheckbox(todo);
  const updateButton = createUpdateButton(todo);
  const textElement = createText(todo, updateButton);
  const timeElement = createTime(todo);
  const deleteButton = createDeleteButton(todo);

  radioLabelDay.append(radioInputDay);
  radioLabelWeek.append(radioInputWeek);
  radioLabelMonth.append(radioInputMonth);

  fieldset.append(legend, radioLabelDay, radioLabelWeek, radioLabelMonth);

  labelImportant.append(checkboxImportant);
  labelCheckbox.prepend(checkbox);

  containerCheckbox.append(labelCheckbox, fieldset, labelImportant);

  todoElement.append(
    handle,
    containerCheckbox,
    textElement,
    timeElement,
    deleteButton
  );
  initDeadlineRadios(todo, todoElement);

  return todoElement;
}
