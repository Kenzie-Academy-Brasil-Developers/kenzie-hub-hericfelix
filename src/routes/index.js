import { Route, Switch } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

const Routes = () => {
  const [isAutenticated, setIsAutenticated] = useState(false);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#017BFF",
      },
      secondary: {
        main: "#09053C",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default Routes;
