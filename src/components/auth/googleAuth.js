import {
  auth,
  signInWithPopup,
  GoogleAuthProvider,
} from "../../firebaseConfig.js";

import { showInfo, showError } from "../../utils/notification.js";

export async function signWithGoogle() {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);

    if (result._tokenResponse.isNewUser) {
      showInfo("Registration via Google was successful");
    } else {
      showInfo("Google login successful");
    }
  } catch (error) {
    showError("Google login error: ", error.message);
  }
}
