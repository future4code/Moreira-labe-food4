import React from "react";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { ChangeInfoForm, ChangeUserInfo, Container, Header, Title } from "./styled";
import GlobalContext from "../../Global/GlobalContext";
import { goBack } from "../../routes/coordinators";
import Back from "../../assets/img/backToLogin.png";
import { TextField, Button } from "@material-ui/core";

const ChangeUserInfoPage = () => {
  useUnprotectedPage();

  const { navigate } = React.useContext(GlobalContext);
  return (
    <Container>
      <ChangeUserInfo>
        <Header>
          <Title>
            <img
              src={Back}
              onClick={() => goBack(navigate)}
              alt="Back to last page icon"
            />
            <h1>Editar</h1>
          </Title>
        </Header>
        <ChangeInfoForm>
        <TextField
          label={"Nome"}
          placeholder={"Nome e sobrenome"}
          variant={"outlined"}
          name={"name"}
          required
        />
        <TextField
          label={"Email"}
          type={"email"}
          placeholder={"email@email.com"}
          variant={"outlined"}
          name={"email"}
          required
        />
        <TextField
          label={"CPF"}
          type={"text"}
          placeholder={"000.000.000-00"}
          variant={"outlined"}
          name={"cpf"}
          title="Digite seu CPF com pontos e traço"
          inputProps={{ maxLength: 14 }}
          pattern="[0-9]"
          required
        />
        <Button>Salvar</Button>
        </ChangeInfoForm>
      </ChangeUserInfo>
    </Container>
  );
};
export default ChangeUserInfoPage;
