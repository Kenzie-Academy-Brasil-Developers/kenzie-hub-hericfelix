import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Container, List } from "./style";

const Header = ({ isAutenticated, setIsAutenticated }) => {
  return (
    <Container>
      <div>
        <figure>
          <img src={logo} alt="Logo KenzieHub"></img>
        </figure>
        <List>
          {isAutenticated ? (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Portfolio</Link>
              </li>
              <li>
                <Link to="/profile">My Profile</Link>
              </li>
              <li>
                <Link>Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Portfolio</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </List>
      </div>
    </Container>
  );
};

export default Header;
