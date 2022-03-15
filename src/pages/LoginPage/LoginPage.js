import React from "react";
import redLogo from "../../assets/img/redLogo.png";
import * as L from "./styled";
import { TextField } from "@material-ui/core";

const LoginPage = () => {
  return (
    <L.Container>
      <L.Login>
        <L.Img src={redLogo} />
        <L.TextLogin>Entrar</L.TextLogin>
        <L.LoginForm>
          <TextField
            label={"Email"}
            type={"email"}
            variant={"outlined"}
            requerid
          />
          <TextField
            label={"Senha"}
            type={"password"}
            variant={"outlined"}
            requerid
          />

          <L.LoginButton>Entrar</L.LoginButton>
          <L.SignUpText>
            Não possui cadastro?
            <L.button variant={"text"} type={"submit"}>
              Clique aqui
            </L.button>
          </L.SignUpText>
        </L.LoginForm>
      </L.Login>
    </L.Container>
  );
};

export default LoginPage;
