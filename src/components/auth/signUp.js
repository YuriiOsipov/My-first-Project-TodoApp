import {
  auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "../../firebaseConfig.js";
import { signWithGoogle } from "./googleAuth.js";
import { showInfo, showError, showWarning } from "../../utils/notification.js";
const signupForm = document.getElementById("signup-form");
const signinForm = document.getElementById("signin-form");
const signInButton = document.getElementById("signIn");

const googleButton = document.getElementById("google-signup-button");
googleButton.addEventListener("click", signWithGoogle);

signInButton.addEventListener("click", (event) => {
  event.preventDefault();
  hideSignupForm();
  showSigninForm();
});

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("signup-email").value;

  const password = document.getElementById("signup-password").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
    await sendEmailVerification(user);

    showInfo(
      "To log in you need to verify your email. Please check your email."
    );
    signupForm.reset();
    hideSignupForm();
    showSigninForm();
  } catch (error) {
    switch (error.code) {
      case "auth/email-already-exists":
      case "auth/email-already-in-use":
        showWarning("This email is already registered. Please log in.");
        break;
      case "auth/invalid-email":
        showWarning("Invalid email format. Please check the entered data.");
        break;
      case "auth/weak-password":
        showWarning("Password must be at least 6 characters");
        break;

      default:
        showError("An unknown error occurred:", error.message, error.code);

        break;
    }
  }
});

export function hideSignupForm() {
  signupForm.style.display = "none";
}

export function showSigninForm() {
  signinForm.style.display = "flex";
}
