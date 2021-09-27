import styled from "styled-components";

export const CardBox = styled.div`
  width: 125px;
  height: 110px;
  border-radius: 5px;
  background-color: var(--white);
  color: var(--dark-blue);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  div {
    gap: 0px;
    width: 100%;
    height: 40px;
    border-radius: 5px 5px 0 0;
    background-color: var(--light-blue);
    color: var(--white);
    text-align: center;
    padding-top: 10px;
    font-weight: 600;
  }
  p {
    padding-top: 5px;
  }
  svg {
    font-size: 1.3rem;
    cursor: pointer;
    color: red;
  }
  @media (min-width: 768px) {
    cursor: pointer;
  }
`;
