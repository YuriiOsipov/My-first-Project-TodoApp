import { draggedEl, shiftY, placeholder } from "../../index.js";

export function moveDrag(clientX, clientY, container) {
  if (!draggedEl) return;

  const edge = 60;
  if (clientY < edge) window.scrollBy(0, -12);
  if (clientY > window.innerHeight - edge) window.scrollBy(0, 12);

  draggedEl.style.top = `${clientY - shiftY}px`;

  const elUnder = document.elementFromPoint(clientX, clientY);
  const overTodo = elUnder?.closest(".todo");

  if (!overTodo || overTodo === draggedEl || overTodo === placeholder) return;

  const draggedRect = draggedEl.getBoundingClientRect();
  const overRect = overTodo.getBoundingClientRect();

  // Если тянем вниз — перемещаем, как только низ перетаскиваемого элемента касается верхушки соседнего
  if (draggedRect.bottom >= overRect.top && draggedRect.top < overRect.top) {
    container.insertBefore(placeholder, overTodo.nextSibling);
    return;
  }

  // Если тянем вверх — перемещаем, как только верх перетаскиваемого элемента касается низа соседнего
  if (
    draggedRect.top <= overRect.bottom &&
    draggedRect.bottom > overRect.bottom
  ) {
    container.insertBefore(placeholder, overTodo);
    return;
  }
}
