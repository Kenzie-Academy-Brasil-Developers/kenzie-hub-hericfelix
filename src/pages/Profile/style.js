import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1170px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const CardBox = styled.div`
  width: 100%;
  max-width: 730px;
  background-color: var(--light-blue);
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 7px;
  h2 {
    background-color: transparent;
    color: var(--white);
    font-weight: 600;
    margin-bottom: 10px;
    padding-left: 25px;
  }
  > div {
    background-color: var(--dark-blue);
    display: flex;
    flex-wrap: wrap;
    border-radius: 0 0 7px 7px;
    padding: 30px;
    gap: 40px;
  }
`;
export const AddCard = styled.div`
  width: 125px;
  height: 110px;
  border-radius: 5px;
  justify-content: center;
  display: flex;
  align-items: center;
  background-color: var(--white);
  font-size: 4rem;
  color: var(--light-blue);

  @media (min-width: 768px) {
    cursor: pointer;
  }
`;
