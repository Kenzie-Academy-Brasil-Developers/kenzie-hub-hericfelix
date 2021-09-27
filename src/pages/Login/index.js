import { useForm } from "react-hook-form";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Container, Content, Form } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <Header />
      <Content>
        <Form onSubmit={handleSubmit(handleLogin)}>
          <h2>Login</h2>
          <Input register={register} name="email" label="E-mail" />
          <Input
            type="password"
            register={register}
            name="password"
            label="Password"
          />
          <Button
            color="secondary"
            sx={{ width: 250 }}
            size="large"
            variant="contained"
            type="submit"
          >
            Login
          </Button>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
};

export default Login;
