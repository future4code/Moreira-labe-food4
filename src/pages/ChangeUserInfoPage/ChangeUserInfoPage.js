import React from "react";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { ChangeInfoForm, ChangeUserInfo, Container, Header, Title } from "./styled";
import GlobalContext from "../../Global/GlobalContext";
import { goBack } from "../../routes/coordinators";
import Back from "../../assets/img/backToLogin.png";
import { TextField, Button, CircularProgress } from "@material-ui/core";
import useFormHook from '../../hooks/useFormHook.js';

const ChangeUserInfoPage = () => {
  useUnprotectedPage();
  const [form, onChangeInput] = useFormHook({name: '', email: '', cpf: ''});
  const { navigate, editProfile, isLoading } = React.useContext(GlobalContext);

  const onSubmitForm = (evt) => {
    evt.preventDefault();
    editProfile(form);
  }

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
        <ChangeInfoForm onSubmit={onSubmitForm}>
        <TextField
          label={"Nome"}
          placeholder={"Nome e sobrenome"}
          variant={"outlined"}
          name={"name"}
          value={form.name}
          onChange={onChangeInput}
          required
        />
        <TextField
          label={"Email"}
          type={"email"}
          placeholder={"email@email.com"}
          variant={"outlined"}
          name={"email"}
          value={form.email}
          onChange={onChangeInput}
          required
        />
        <TextField
          label={"CPF"}
          type={"text"}
          placeholder={"000.000.000-00"}
          variant={"outlined"}
          name={"cpf"}
          value={form.cpf.replace(/^(\d{3})\D*(\d{3})\D*(\d{3})\D*(\d{2})$/g,'$1.$2.$3-$4')}
          onChange={onChangeInput}
          title="Digite seu CPF com pontos e traço"
          inputProps={{ maxLength: 14 }}
          pattern="[0-9]"
          required
        />
        <Button type={'submit'}>{isLoading?<CircularProgress style={{"color": "white"}} size={24}/>:<>Salvar</>}</Button>
        </ChangeInfoForm>
      </ChangeUserInfo>
    </Container>
  );
};
export default ChangeUserInfoPage;
