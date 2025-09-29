import { httpPost } from "./http.js";

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
