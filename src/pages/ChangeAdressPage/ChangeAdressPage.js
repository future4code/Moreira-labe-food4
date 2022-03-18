import React from "react";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import Back from "../../assets/img/backToLogin.png";
import {
  Container,
  ChangeAdress,
  Header,
  Title,
  AdressForm
} from "./styled";
import { TextField, Button, CircularProgress } from "@material-ui/core";
import GlobalContext from "../../Global/GlobalContext";
import { goBack } from "../../routes/coordinators";
import ToastAnimated from "../../constants/ui-lib";

const ChangeAdressPage = () => {
  useUnprotectedPage();

  const { isLoading, navigate } = React.useContext(GlobalContext);

  return (
    <Container>
      <ToastAnimated />
      <ChangeAdress>
        <Header>
        <Title>
            <img
            src={Back}
            onClick={() => goBack(navigate)}
            alt="Back to last page icon"
            />
            <h1>Endereço</h1>
        </Title>
        </Header>
        <AdressForm>
          <TextField
            label={"Rua"}
            type={"text"}
            variant={"outlined"}
            name={"street"}
            required
          />

          <TextField
            label={"Número"}
            type={"number"}
            variant={"outlined"}
            name={"number"}
            required
          />

          <TextField
            label={"Complemento"}
            type={"text"}
            variant={"outlined"}
            name={"complement"}
          />
          <TextField
            label={"Bairro"}
            type={"text"}
            variant={"outlined"}
            name={"neighbourhood"}
            required
          />
          <TextField
            label={"Cidade"}
            type={"text"}
            variant={"outlined"}
            name={"city"}
            required
          />

          <TextField
            label={"Estado"}
            type={"text"}
            variant={"outlined"}
            name={"state"}
            required
          />
          <Button type="submit">
            {isLoading ? (
              <CircularProgress style={{ color: "white" }} size={24} />
            ) : (
              <>Salvar</>
            )}
          </Button>
        </AdressForm>
      </ChangeAdress>
    </Container>
  );
};
export default ChangeAdressPage;
