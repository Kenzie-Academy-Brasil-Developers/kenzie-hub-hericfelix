import { Container, InputBox } from "./style";

const Input = ({ label, ...rest }) => {
  return (
    <Container>
      <p>{label}</p>
      <InputBox>
        <input {...rest}></input>
      </InputBox>
    </Container>
  );
};

export default Input;
