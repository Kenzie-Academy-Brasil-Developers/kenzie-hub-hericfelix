import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Container, List } from "./style";

const Header = ({ isAutenticated }) => {
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
                <Link>Home</Link>
              </li>
              <li>
                <Link>Portfolio</Link>
              </li>
              <li>
                <Link>My Profile</Link>
              </li>
              <li>
                <Link>Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Portfolio</Link>
              </li>
              <li>
                <Link>Register</Link>
              </li>
              <li>
                <Link>Login</Link>
              </li>
            </>
          )}
        </List>
      </div>
    </Container>
  );
};

export default Header;
