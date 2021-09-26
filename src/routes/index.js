import { Route, Switch } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import { useState } from "react";

const Routes = () => {
  const [isAutenticated, setIsAutenticated] = useState(false);

  return (
    <Switch>
      <Route exact path="/">
        <Home isAutenticated={isAutenticated} />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </Switch>
  );
};

export default Routes;
