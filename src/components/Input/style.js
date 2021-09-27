import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  color: var(--white);
  p {
    background-color: transparent;
    font-weight: 500;
  }
`;

export const InputBox = styled.div`
  border-radius: 5px;
  border: 3px solid var(--dark-blue);
  background-color: var(--white);
  padding: 5px;
  width: 100%;

  input {
    background-color: transparent;
    border: none;
  }
  input:focus {
    outline: none;
  }
`;
