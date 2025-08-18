export function createHandleElement() {
  const handle = document.createElement("button");
  handle.type = "button";
  handle.className = "todo__handle";
  handle.setAttribute("aria-label", "Drag to reorder");
  handle.innerHTML = '<span aria-hidden="true">⠿⠿</span>';

  return handle;
}
