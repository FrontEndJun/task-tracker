import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthPage } from "./pages/auth-page";
import { TaskPage } from "./pages/tasks";
import { About } from "./pages/About";
import { useAuth } from "./hooks/useAuth";
import { AuthContext } from "./context/auth.context";
import { NavBar } from "./components/NavBar";

function App() {
  const { token, userId, admin, login, logout } = useAuth();
  const isAuth = !!token;

  return (
    <AuthContext.Provider value={{ token, admin, userId, isAuth, login, logout }}>
      <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
        <NavBar />
        <Switch>
          <Route exact path="/tasks/:page">
            <TaskPage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {!isAuth && (
            <Route exact path="/auth">
              <AuthPage />
            </Route>
          )}
          <Redirect to="/tasks/1" />
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
