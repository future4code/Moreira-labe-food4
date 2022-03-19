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
import useFormHook from "../../hooks/useFormHook";

const ChangeAdressPage = () => {
  useUnprotectedPage();
  const [form, onChangeInput] = useFormHook({street: "",
  number: "",
  neighbourhood: "",
  city: "",
  state: "",
  complement: ""});
  const { navigate, editAdress, isLoading } = React.useContext(GlobalContext);

  const onPutAdress = (evt) => {
    evt.preventDefault();
    editAdress(form);
  }

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
        <AdressForm onSubmit={onPutAdress}>
        <TextField
            label={"Rua"}
            type={"text"}
            variant={"outlined"}
            name={"street"}
            value={form.street}
              onChange={onChangeInput}
            required
          />

          <TextField
            label={"Número"}
            type={"number"}
            variant={"outlined"}
            name={"number"}
            value={form.number}
            onChange={onChangeInput}
            required
          />

          <TextField
            label={"Complemento"}
            type={"text"}
            variant={"outlined"}
            name={"complement"}
            value={form.complement}
            onChange={onChangeInput}
          />
          <TextField
            label={"Bairro"}
            type={"text"}
            variant={"outlined"}
            name={"neighbourhood"}
            value={form.neighbourhood}
            onChange={onChangeInput}
            required
          />
          <TextField
            label={"Cidade"}
            type={"text"}
            variant={"outlined"}
            name={"city"}
            value={form.city}
            onChange={onChangeInput}
            required
          />

          <TextField
            label={"Estado"}
            type={"text"}
            variant={"outlined"}
            name={"state"}
            value={form.state}
            onChange={onChangeInput}
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