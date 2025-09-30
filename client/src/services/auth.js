import { httpPost } from "./http.js";

//login
export const login = async (username, password) => {
  try {
    const response = await httpPost("/auth/login", { username, password });

    if (response.token) {
      localStorage.setItem("token", response.token);
    } else {
      console.error("No token in response");
    }
    return response;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
};

//logout
export const logout = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.error("No token found in localStorage");
    return;
  }

  try {
    const res = await httpPost(
      "/auth/logout",
      {}, 
      { Authorization: `Bearer ${token}` }
    ); console.log(res.message);

    localStorage.removeItem("token");
  } catch (err) {
    console.error("Logout failed:", err.response ? err.response.data : err.message);
  }
};