import { CardBox } from "./style";

const Card = ({ tech, level }) => {
  return (
    <CardBox>
      <div>{tech}</div>
      <p>{level}</p>
    </CardBox>
  );
};

export default Card;
