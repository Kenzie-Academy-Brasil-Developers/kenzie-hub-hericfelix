import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 50px);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1170px;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  figure {
    img {
      width: 600px;
    }
  }
  div {
    background-color: var(--dark-blue);
    height: 350px;
    width: 335px;
    border-radius: 40px;
    color: var(--white);
    padding: 35px;
    display: flex;
    flex-direction: column;
    justify-content: self-start;
    align-items: center;

    h2 {
      background-color: transparent;
      font-size: 2.5rem;
      text-align: center;
      font-weight: 600;
      margin-bottom: 40px;
    }
    p {
      margin-top: 10px;
      background-color: transparent;
      font-size: 0.8rem;
      text-align: left;
      a {
        color: var(--light-blue);
      }
      a:hover {
        filter: brightness(1.5);
      }
    }
  }
`;
