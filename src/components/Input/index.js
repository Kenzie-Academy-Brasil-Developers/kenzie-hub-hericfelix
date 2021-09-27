import { Container, InputBox } from "./style";

const Input = ({ label, register, name, ...rest }) => {
  return (
    <Container>
      <p>{label}</p>
      <InputBox>
        <input {...register(name)} {...rest}></input>
      </InputBox>
    </Container>
  );
};

export default Input;
