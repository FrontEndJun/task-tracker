import { useState, useEffect, useCallback } from "react";

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [admin, setAdmin] = useState(null);

  const login = useCallback((jwttoken, id, isAdmin) => {
    setToken(jwttoken);
    setUserId(id);
    setAdmin(isAdmin);

    localStorage.setItem("userdata", JSON.stringify({ token: jwttoken, admin: isAdmin, userId: id }));
  }, []);
  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setAdmin(null);

    localStorage.removeItem("userdata");
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userdata"));

    if (data && data.token) {
      login(data.token, data.userId, data.admin);
    }
  }, [login]);

  return { login, logout, token, admin, userId };
};
