export function isAuthenticated() {
  const token = localStorage.getItem('token');

  if (!token) {
    return false;
  }

  const decodedToken = JSON.parse(atob(token.split('.')[1]));
  const tokenExpirationTime = decodedToken.exp * 1000;
  const currentTime = Date.now();

  if (currentTime >= tokenExpirationTime) {
    localStorage.removeItem('token');
    window.location.href = "/pages/auth/";
    return false;
  }
  
  return true;
}