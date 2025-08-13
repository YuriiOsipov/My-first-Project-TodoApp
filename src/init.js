import {
  initDeleteCompleted,
  initAddTodo,
  hideSigninForm,
  hideSignupForm,
} from "./components/index.js";
import { auth, onAuthStateChanged } from "./firebaseConfig.js";
import { loadData } from "./components/index.js";
import { showTasksBlock, showSidebar } from "./components/index.js";
import { showWarning } from "./utils/notification.js";

export function initApp() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (!user.emailVerified) {
        showWarning(
          "Ваш email не верифицирован. Пожалуйста, проверьте Вашу почту"
        );
        return;
      }
      loadData();
      hideSigninForm();
      hideSignupForm();
      showSidebar();
      showTasksBlock();
    } else {
      document.getElementById("signup-form").style.display = "flex";
    }
  });

  initAddTodo();
  initDeleteCompleted();
}
