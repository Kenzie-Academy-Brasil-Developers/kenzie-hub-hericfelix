import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Card from "../../components/Card";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import {
  AddCard,
  CardBox,
  Container,
  Content,
  AddNewTechBox,
  Form,
  SelectBox,
} from "./style";
import { MdAddCircle } from "react-icons/md";
import { Redirect } from "react-router";
import { useState } from "react";

const Profile = ({ isAutenticated, setIsAutenticated }) => {
  const [isAddingTech, setIsAddingTech] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required("Field required"),
    status: yup.string().required("Field required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleNewTechnology = () => {
    setIsAddingTech(true);
  };

  if (!isAutenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Header
        isAutenticated={isAutenticated}
        setIsAutenticated={setIsAutenticated}
      />
      <Content>
        <CardBox>
          <h2>My Technologies</h2>
          <div>
            <Card tech="react" level="advanced" />
            <Card tech="react" level="advanced" />
            <AddCard onClick={() => setIsAddingTech(true)}>
              <MdAddCircle />
            </AddCard>
          </div>
        </CardBox>
      </Content>
      <Footer />
      {isAddingTech && (
        <AddNewTechBox>
          <Form onSubmit={handleSubmit(handleNewTechnology)}>
            <h2>Add New Tech</h2>
            <Input
              register={register}
              name="name"
              label="Name"
              error={errors.email?.message}
            />
            <SelectBox>
              <p>
                Status
                {!!errors.status?.message && (
                  <span>{errors.status?.message}</span>
                )}
              </p>
              <select {...register("status")}>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </SelectBox>
            <Button
              size="large"
              variant="contained"
              type="submit"
              color="secondary"
            >
              Add
            </Button>
          </Form>
        </AddNewTechBox>
      )}
    </Container>
  );
};

export default Profile;
