import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  color: var(--white);
  margin-bottom: 10px;
  p {
    background-color: transparent;
    font-weight: 500;
    span {
      color: red;
    }
  }
`;

export const InputBox = styled.div`
  border-radius: 5px;
  border: 2px solid var(--dark-blue);
  background-color: var(--white);
  padding: 5px;
  padding-top: 7px;
  width: 100%;
  height: 40px;

  input {
    background-color: transparent;
    border: none;
  }
  input:focus {
    outline: none;
  }
`;
