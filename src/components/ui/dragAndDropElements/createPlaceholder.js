export function createPlaceholder(height) {
  const placeholder = document.createElement("div");
  placeholder.className = "todo-placeholder";
  placeholder.style.height = `${height}px`;
  return placeholder;
}
