// lib/auth.js
export function saveSession(token, user) {
  if (typeof window === "undefined") return;
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
}

export function clearSession() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}

export function getSession() {
  if (typeof window === "undefined") return null;
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  return token ? { token, user: user ? JSON.parse(user) : null } : null;
}

