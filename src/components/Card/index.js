import { CardBox } from "./style";
import { BsTrashFill } from "react-icons/bs";
import { useState } from "react";
import api from "../../services/api";

const Card = ({ tech, level, id, loadTechs }) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token"))
  );

  const handleDelete = async () => {
    await api.delete(`/users/techs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    loadTechs();
  };
  return (
    <CardBox>
      <div>{tech.length < 15 ? tech : tech.substring(0, 12).concat("...")}</div>
      <p>{level}</p>

      <BsTrashFill onClick={handleDelete} />
    </CardBox>
  );
};

export default Card;
