import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthPage } from "./pages/auth-page";
import { TaskPage } from "./pages/tasks";
import { useAuth } from "./hooks/useAuth";
import { AuthContext } from "./context/auth.context";
import { NavBar } from "./components/NavBar";
import { About } from "./pages/About";

function App() {
  console.log(process.env.PUBLIC_URL);
  const { token, userId, admin, login, logout } = useAuth();
  const isAuth = !!token;
  return (
    <AuthContext.Provider value={{ token, admin, userId, isAuth, login, logout }}>
      <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
        <NavBar />
        <Switch>
          {/* <Route exact path="/" component={AuthPage} /> */}
          <Route path="/tasks">
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
          <Redirect to="/tasks" />
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
