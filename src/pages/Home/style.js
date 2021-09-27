import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const Background = styled.div`
  @media (min-width: 768px) {
    position: absolute;
    z-index: -2;
    height: 100vw;
    width: 100vw;
    min-width: 90vh;
    min-height: 98vh;
    left: -40%;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--light-blue);
    border-radius: 50%;
    overflow: hidden;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1170px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  figure {
    display: none;
  }
  div {
    background-color: var(--dark-blue);
    height: 350px;
    max-height: 60vh;
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
  @media (min-width: 768px) {
    justify-content: space-between;
    figure {
      display: block;
      background-color: transparent;
      img {
        width: 600px;
      }
    }
  }
`;
