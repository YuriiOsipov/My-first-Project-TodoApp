import { cachedTodos } from "../../index.js";
import { renderData } from "../../index.js";
import { showInfo } from "../../../utils/notification.js";

document.querySelectorAll(".sidebar__link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = e.target.dataset.filter;
    console.log("Фильтрация по:", filter);

    let dataToRender = cachedTodos;

    switch (filter) {
      case "completed":
        dataToRender = cachedTodos.filter((task) => task.completed);

        if (dataToRender.length === 0) {
          showInfo("You have no completed tasks.");
        }

        renderData(dataToRender);
        break;
      case "all":
        console.log(cachedTodos);

        renderData(cachedTodos);
        break;
      case "active":
        dataToRender = cachedTodos.filter((task) => !task.completed);

        if (dataToRender.length === 0) {
          showInfo("You have no active tasks.");
        }

        renderData(dataToRender);
        break;
      case "important":
        dataToRender = cachedTodos.filter((task) => task.important);

        if (dataToRender.length === 0) {
          showInfo("You don't have any important tasks.");
        }

        renderData(dataToRender);
        break;
      case "today":
        dataToRender = cachedTodos.filter((task) => task.day);

        if (dataToRender.length === 0) {
          showInfo("You have no tasks for today");
        }
        renderData(dataToRender);
        break;

      case "week":
        dataToRender = cachedTodos.filter((task) => task.week);

        if (dataToRender.length === 0) {
          showInfo("You have no tasks for the week");
        }
        renderData(dataToRender);
        break;

      case "month":
        dataToRender = cachedTodos.filter((task) => task.month);

        if (dataToRender.length === 0) {
          showInfo("You don't have any tasks for the month");
        }
        renderData(dataToRender);
        break;
    }

    document.getElementById("sidebar").classList.remove("open");
  });
});
