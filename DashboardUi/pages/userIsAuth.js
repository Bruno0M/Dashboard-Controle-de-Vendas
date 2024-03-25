export function isAuthenticated() {
  const token = localStorage.getItem('token');

  if (!token) {
    window.location.href = "../Authentication/auth.js";
    return false;
  }

  const decodedToken = JSON.parse(atob(token.split('.')[1]));
  const tokenExpirationTime = decodedToken.exp * 1000;
  const currentTime = Date.now();

  if (currentTime >= tokenExpirationTime) {
    alert("Não autenticado")
    localStorage.removeItem('token');
    window.location.href = "../Authentication/auth.js";
    return false;
  }
  
  return true;
}