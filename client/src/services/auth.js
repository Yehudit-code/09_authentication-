import { httpPost } from "./http.js";

//login
export const login = (username, password) => {
  httpPost("/auth/login", { username, password })
    .then(response => {
      if (response.token) {
        localStorage.setItem("token", response.token);
      } else {
        console.error("No token in response");
      }
    })
    .catch(error => {
      console.error("Login error:", error);
    });
};

//logout
export const logout = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.error("No token found in localStorage");
    return;
  }

  try {
    const res = await httpPost("/auth/logout", { token });
    console.log(res.message);

    localStorage.removeItem("token");
  } catch (err) {
    console.error("Logout failed:", err.response ? err.response.data : err.message);
  }
};