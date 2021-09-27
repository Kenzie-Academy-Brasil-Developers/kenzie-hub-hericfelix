import { useForm } from "react-hook-form";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Container, Content, Form } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import api from "../../services/api";
import { Redirect, useHistory } from "react-router";
import { toast } from "react-toastify";

const Login = ({ isAutenticated, setIsAutenticated }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("Field required"),
    password: yup.string().required("Field required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleLogin = (data) => {
    console.log(data);
    api
      .post("/sessions", data)
      .then((res) => {
        console.log(res);
        const { token } = res.data;
        console.log(token);
        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        setIsAutenticated(true);
        return history.push("/profile");
      })
      .catch((_) => toast.error("Wrong e-mail or password!"));
  };

  if (isAutenticated) {
    return <Redirect to="/profile" />;
  }
  return (
    <Container>
      <Header isAutenticated={isAutenticated} />
      <Content>
        <Form onSubmit={handleSubmit(handleLogin)}>
          <h2>Login</h2>
          <Input
            register={register}
            name="email"
            label="E-mail"
            error={errors.email?.message}
          />
          <Input
            type="password"
            register={register}
            name="password"
            label="Password"
            error={errors.password?.message}
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
