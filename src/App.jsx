import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthPage } from "./pages/auth-page";
import { TaskPage } from "./pages/tasks";
import { useAuth } from "./hooks/useAuth";
import { AuthContext } from "./context/auth.context";
import { NavBar } from "./components/NavBar";

function App() {
  const { token, userId, admin, login, logout } = useAuth();
  const isAuth = !!token;

  return (
    <AuthContext.Provider value={{ token, admin, userId, isAuth, login, logout }}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={AuthPage} />>
          <Route exact path="/tasks/:page">
            <TaskPage />
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
