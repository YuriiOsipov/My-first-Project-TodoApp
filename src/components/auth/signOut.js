import { auth, signOut } from "../../firebaseConfig.js";
import { hideSignupForm } from "./signUp.js";
import { showSigninForm } from "./signUp.js";
import { showInfo, showError } from "../../utils/notification.js";

document.getElementById("logout-button").addEventListener("click", async () => {
  try {
    await signOut(auth);
    hideSignupForm();
    showSigninForm();
    document.getElementById("task-container").style.display = "none";
    document.getElementById("sidebar").style.display = "none";
    showInfo("You have left the application");
  } catch (error) {
    showError("Error exiting the application:", error.message);
  }
});
