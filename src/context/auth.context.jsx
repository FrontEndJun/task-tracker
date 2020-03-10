import { createContext } from "react";

export const AuthContext = createContext({
  token: null,
  admin: false,
  userId: null,
  isAuth: false,
});
