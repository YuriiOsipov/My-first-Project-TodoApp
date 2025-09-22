import { updateTasksOrder, loadData } from "../index.js";
import { moveDrag, createPlaceholder } from "../ui/index.js";

export let draggedEl = null;
export let placeholder = null;
export let pointerId = null;
export let shiftY = 0;
export let startScrollY = 0;

export function initDragAndDropUniversal(container) {
  if (container.__dndInited) return;
  container.__dndInited = true;

  container.addEventListener("dragstart", (e) => e.preventDefault());

  function startDrag(e, todoEl) {
    draggedEl = todoEl;
    pointerId = e.pointerId;
    startScrollY = window.scrollY;

    const rect = draggedEl.getBoundingClientRect();
    shiftY = e.clientY - rect.top;

    placeholder = createPlaceholder(rect.height);
    container.insertBefore(placeholder, draggedEl.nextSibling);

    draggedEl.classList.add("todo--dragging");
    draggedEl.style.position = "fixed";
    draggedEl.style.left = `${rect.left}px`;
    draggedEl.style.top = `${e.clientY - shiftY}px`;
    draggedEl.style.width = `${rect.width}px`;
    draggedEl.style.zIndex = 1000;
    draggedEl.style.pointerEvents = "none";

    draggedEl.setPointerCapture(pointerId);
  }

  container.addEventListener("pointerdown", (e) => {
    const handle = e.target.closest(".todo__handle");
    if (!handle) return;

    const todoEl = handle.closest(".todo");
    if (!todoEl) return;

    e.preventDefault();
    startDrag(e, todoEl);
  });

  document.addEventListener("pointermove", (e) => {
    if (!draggedEl || e.pointerId !== pointerId) return;
    moveDrag(e.clientX, e.clientY, container);
  });

  async function finishDrag() {
    if (!draggedEl) return;

    placeholder.parentNode.insertBefore(draggedEl, placeholder);
    placeholder.remove();

    draggedEl.classList.remove("todo--dragging");
    draggedEl.style.position = "";
    draggedEl.style.left = "";
    draggedEl.style.top = "";
    draggedEl.style.width = "";
    draggedEl.style.zIndex = "";
    draggedEl.style.pointerEvents = "";

    draggedEl.releasePointerCapture(pointerId);

    draggedEl = null;
    placeholder = null;
    pointerId = null;

    await updateTasksOrder(container);
    await loadData();
  }

  document.addEventListener("pointerup", async (e) => {
    if (!draggedEl || e.pointerId !== pointerId) return;
    await finishDrag();
  });

  window.addEventListener("scroll", () => {
    if (!draggedEl) return;
    const top = parseFloat(draggedEl.style.top || "0");
    const delta = window.scrollY - startScrollY;
    draggedEl.style.top = `${top + delta}px`;
    startScrollY = window.scrollY;
  });
}
