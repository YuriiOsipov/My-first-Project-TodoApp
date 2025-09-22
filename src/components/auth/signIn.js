import {
  auth,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "../../firebaseConfig.js";
import { loadData } from "../index.js";
import { showConfirmation, showWarning } from "../../utils/notification.js";
import { signWithGoogle } from "./googleAuth.js";

const googleButton = document.getElementById("google-signin-button");
googleButton.addEventListener("click", signWithGoogle);

const forgotPasswordForm = document.getElementById("forgot-password-form");
const forgotPasswordButton = document.getElementById("forgot-password-button");
forgotPasswordButton.addEventListener("click", showForgotPasswordForm);

const signinForm = document.getElementById("signin-form");

const taskContainer = document.getElementById("task-container");

const sidebar = document.getElementById("sidebar");

signinForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("signin-email").value;

  const password = document.getElementById("signin-password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    if (!user.emailVerified) {
      showWarning("Your email is not verified. Please check your mail.");
      const resend = await showConfirmation("Resend verification email?");

      if (resend) {
        await sendEmailVerification(user);
        showSuccess("Verification email resent. Check your email.");
      }
      return;
    }
    document.getElementById("logout-button").style.display = "block";
    hideSigninForm();
    showSidebar();
    showTasksBlock();
    loadData();
  } catch (error) {
    switch (error.code) {
      case "auth/too-many-requests":
        showWarning("Too many login attempts. Please try again later.");
        break;
      case "auth/invalid-credential":
        showWarning("Incorrect credentials. Check your email and password.");
        break;

      default:
        showWarning("Authorization error", error.message, error.code);

        break;
    }
  }
});

export function showSidebar() {
  sidebar.style.display = "block";
}

export function showTasksBlock() {
  taskContainer.style.display = "block";
}

export function hideSigninForm() {
  signinForm.style.display = "none";
}

function showForgotPasswordForm() {
  forgotPasswordForm.style.display = "flex";
  hideSigninForm();
}
