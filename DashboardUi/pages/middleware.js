import { isAuthenticated } from "./userIsAuth.js";

export function middleware() {

  if (!isAuthenticated()) {
    alert("Não autenticado")
    window.location.href = "../Authentication/auth.html";
    return;
  }

}

