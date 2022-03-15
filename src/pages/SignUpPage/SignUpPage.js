import React, { useState } from 'react';
import redLogo from '../../assets/img/redLogo.png'
import BackToLogin from '../../assets/img/backToLogin.png';
import * as S from './styled';
import { TextField } from '@material-ui/core';
import { formatMs, TextField } from '@material-ui/core';
import useRequest from '../../hooks/useRequest.js';
import useForm from '../../hooks/useForm.js';
import { baseUrl } from '../../constants/urls';


const SignUpPage = () => {
    const [requestData, isLoading] = useRequest();
    const [form, onChangeInput] = useForm({name: '', email: '', cpf: '', password: '',});
    const [pass2, setPass2] = useState('');

    const onChangePass2 = (evt) => {
        setPass2(evt.target.value);
    };

    const onSubmitForm = async (evt) => {
        evt.preventDefault();

        if (form.password === pass2) {
            const result = await requestData(`${baseUrl}signup` , 'post', form);
            console.log(result);
        }
        else {
            alert('senhas não correspondem')
        }

    };

    return (
        <S.Container>
            <S.SignUp>
                <S.Bar>
                    <S.Arrow src={BackToLogin} alt="Back to login icon"/>
                </S.Bar>
                <S.Img src={redLogo} alt="Ifuture logo"/>
                <S.TextSignUp>
                    <p>Cadastrar</p>
                </S.TextSignUp> 
                <S.SignUpForm>                 
                <SignUpForm onSubmit={onSubmitForm}>
                    <TextField
                        label={'Nome'}
                        placeholder={'Nome e sobrenome'}
                        variant={'outlined'}
                        name={'name'}
                        value={form.name}
                        onChange={onChangeInput}
                        required
                    />
                    <TextField
                        label={'Email'}
                        type={'email'}
                        placeholder={'email@email.com'}
                        variant={'outlined'}
                        name={'email'}
                        value={form.email}
                        onChange={onChangeInput}
                        required
                    />
                    <TextField
                        label={'CPF'}
                        type={'number'}
                        placeholder={'000.000.000-00'}
                        variant={'outlined'}
                        name={'cpf'}
                        value={form.cpf}
                        onChange={onChangeInput}
                        pattern="\d{3}.\d{3}.\d{3}-\d{2}"
                        title='Digite seu CPF com pontos e traço'
                        required
                    />
                    <TextField
                        label={'Senha'}
                        type={'password'}
                        placeholder={'Mínimo 6 caracteres'}
                        variant={'outlined'}
                        name={'password'}
                        value={form.password}
                        onChange={onChangeInput}
                        required
                    />
                    <TextField
                        label={'Confirmar'}
                        type={'password'}
                        placeholder={'Confirmar senha anterior'}
                        variant={'outlined'}
                        name={'pass2'}
                        value={pass2}
                        onChange={onChangePass2}
                        required
                    />
                    <S.SignUpButton>Criar</S.SignUpButton>
                </S.SignUpForm>
            </S.SignUp>
        </S.Container>
    )
}

export default SignUpPage;