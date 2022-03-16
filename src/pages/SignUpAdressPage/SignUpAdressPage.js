import React from "react";
import BackToLogin from "../../assets/img/backToLogin.png";
import {
  Container,
  Adress,
  Bar,
  Arrow,
  TextAdress,
  AdressForm,
} from "./styled";
import { TextField, Button, CircularProgress } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { goBack, goToLoginPage } from "../../routes/coordinators";
import useRequest from "../../hooks/useRequest";
import { baseUrl } from "../../constants/urls";
import useFormHook from "../../hooks/useFormHook.js";
import header, { mainHeader } from "../../constants/headers";
import ToastAnimated, { showToast } from "../../constants/ui-lib";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useForm } from "react-hook-form";

const SignUpAdressPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const [requestData, isLoading] = useRequest();
  const { register, setValue, setFocus } = useForm();
  const [form, onChangeInput] = useFormHook({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: ""
  });

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.json())
    .then((data) => {
        setValue("address", data.logradouro);
        setValue("neighborhood", data.bairro);
        setValue("complement", data.complemento);
        setValue("city", data.localidade);
        setValue("uf", data.uf);
        setFocus("addressNumber");
    })
    .catch((err) => {console.log(err.response)});
  };

  const onSubmitAdress = async (evt) => {
    evt.preventDefault();
    const { token } = await requestData(
      `${baseUrl}address`,
      "put",
      form,
      header
    );
    localStorage.setItem("newToken", token);
    if (mainHeader !== null) {
      goToLoginPage(navigate);
    } else {
      showToast({
        type: "error",
        message: "Infelizmente não foi possível fazer o cadastro",
      });
    }
  };

    return (
      <Container>
        <ToastAnimated />
        <Adress>
          <Bar>
            <Arrow
              src={BackToLogin}
              onClick={() => goBack(navigate)}
              alt="Back to login icon"
            />
          </Bar>
          <TextAdress>
            <p>Meu endereço</p>
          </TextAdress>
          <AdressForm onSubmit={onSubmitAdress}>
            <TextField
              label={"CEP"}
              type={"number"}
              {...register("cep")}
              onBlur={checkCEP}
              variant={"outlined"}
              required
            />
            <TextField
              label={"Logradouro"}
              type={"text"}
              {...register("address")}
              variant={"outlined"}
              name={"street"}
              value={form.street}
              onChange={onChangeInput}
              required
            />

            <TextField
              label={"Número"}
              type={"number"}
              {...register("addressNumber")}
              variant={"outlined"}
              name={"number"}
              value={form.number}
              onChange={onChangeInput}
              required
            />

            <TextField
              label={"Complemento"}
              type={"text"}
              {...register("complement")}
              variant={"outlined"}
              name={"complement"}
              value={form.complement}
              onChange={onChangeInput}
            />
            <TextField
              label={"Bairro"}
              type={"text"}
              {...register("neighborhood")}
              variant={"outlined"}
              name={"neighbourhood"}
              value={form.neighbourhood}
              onChange={onChangeInput}
              required
            />
            <TextField
              label={"Cidade"}
              type={"text"}
              {...register("city")}
              variant={"outlined"}
              name={"city"}
              value={form.city}
              onChange={onChangeInput}
              required
            />

            <TextField
              label={"Estado"}
              type={"text"}
              {...register("uf")}
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
        </Adress>
      </Container>
    );
};
export default SignUpAdressPage;
