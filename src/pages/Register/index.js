import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import registerFigure from "../../assets/registerFigure.svg";
import { Container, Content, Form, SelectBox, TextAreaBox } from "./style";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";

const Register = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email("Invalid E-mail").required(),
    password: yup
      .string()
      .min("6", "Must have at least 6 characters")
      .required(),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")])
      .required(),
    contact: yup.string().required(),
    course_module: yup.string().required(),
    bio: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleRegister = (data) => {
    console.log(data);
    history.push("/login");
  };

  return (
    <Container>
      <Header />
      <Content>
        <Form onSubmit={handleSubmit(handleRegister)}>
          <h2>Register</h2>
          <Input register={register} name="name" label="Name" />
          <Input register={register} name="email" label="E-mail" />
          <Input
            type="password"
            register={register}
            name="password"
            label="Password"
          />
          <Input
            type="password"
            register={register}
            name="confirm_password"
            label="Confirm Password"
          />
          <Input register={register} name="contact" label="Contact" />
          <SelectBox>
            <p>Course Module</p>
            <select {...register("course_module")}>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro módulo (Introdução ao Frontend)
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo módulo (Frontend Avançado)
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro módulo (Introdução ao Backend)
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto módulo (Backend Avançado)
              </option>
            </select>
          </SelectBox>
          <TextAreaBox>
            <p>Bio</p>
            <textarea rows="4" {...register("bio")}></textarea>
          </TextAreaBox>
          <Button
            size="large"
            variant="contained"
            type="submit"
            color="secondary"
          >
            Register
          </Button>
        </Form>
        <figure>
          <img src={registerFigure} alt="registerFigure.svg" />
          <figcaption>registerFigure.svg</figcaption>
        </figure>
      </Content>
      <Footer />
    </Container>
  );
};

export default Register;
