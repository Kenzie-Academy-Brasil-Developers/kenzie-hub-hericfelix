import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { Container, Content } from "./style";

import { Redirect } from "react-router";
import TechBox from "../../components/TechBox";

const Profile = ({ isAutenticated, setIsAutenticated }) => {
  if (!isAutenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Header
        isAutenticated={isAutenticated}
        setIsAutenticated={setIsAutenticated}
      />
      <Content>
        <TechBox />
      </Content>
      <Footer />
    </Container>
  );
};

export default Profile;
