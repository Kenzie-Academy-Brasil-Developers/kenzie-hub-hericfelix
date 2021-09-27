import { Route, Switch } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

const Routes = () => {
  const [isAutenticated, setIsAutenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

    if (token) {
      return setIsAutenticated(true);
    }
  }, [isAutenticated]);

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
          <Home
            setIsAutenticated={setIsAutenticated}
            isAutenticated={isAutenticated}
          />
        </Route>
        <Route path="/login">
          <Login
            setIsAutenticated={setIsAutenticated}
            isAutenticated={isAutenticated}
          />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/profile">
          <Profile
            setIsAutenticated={setIsAutenticated}
            isAutenticated={isAutenticated}
          />
        </Route>
      </Switch>
    </ThemeProvider>
  );
};

export default Routes;
