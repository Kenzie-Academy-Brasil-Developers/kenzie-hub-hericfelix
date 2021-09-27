import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Container, Content, Form } from "./style";

const Login = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Form>
          <h2>Login</h2>
          <Input label="e-mail" />
        </Form>
      </Content>
      <Footer />
    </Container>
  );
};

export default Login;
