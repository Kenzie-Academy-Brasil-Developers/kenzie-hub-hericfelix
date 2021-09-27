import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { AddCard, CardBox, Container, Content } from "./style";
import { MdAddCircle } from "react-icons/md";

const Profile = () => {
  return (
    <Container>
      <Header />
      <Content>
        <CardBox>
          <h2>My Technologies</h2>
          <div>
            <Card tech="react" level="advanced" />
            <Card tech="react" level="advanced" />
            <AddCard>
              <MdAddCircle />
            </AddCard>
          </div>
        </CardBox>
      </Content>
      <Footer />
    </Container>
  );
};

export default Profile;
