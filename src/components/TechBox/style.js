import styled from "styled-components";

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

export const AddNewTechBox = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Form = styled.form`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--light-blue);
  height: 300px;
  max-height: 60vh;
  width: 300px;
  border-radius: 40px;
  color: var(--white);
  padding: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  h2 {
    background-color: transparent;
    font-weight: 600;
    font-size: 1.9rem;
  }
`;

export const SelectBox = styled.div`
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
  select {
    border-radius: 5px;
    border: 2px solid var(--dark-blue);
    background-color: var(--white);
    padding: 5px;
    padding-top: 7px;
    width: 195px;
    height: 40px;
  }
`;
