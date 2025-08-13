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
      showInfo("Регистрация через Google прошла успешно");
    } else {
      showInfo("Вход через Google выполнен успешно");
    }
  } catch (error) {
    showError("Ошибка входа через Google: ", error.message);
  }
}
