import React from 'react';
import redLogo from '../../assets/img/redLogo.png'
import BackToLogin from '../../assets/img/backToLogin.png';
import * as S from './styled';
import { TextField } from '@material-ui/core';






const SignUpPage = () => {
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
                    <TextField
                        label={'Nome'}
                        placeholder={'Nome e sobrenome'}
                        variant={'outlined'}
                        requerid
                    />
                    <TextField
                        label={'Email'}
                        type={'email'}
                        placeholder={'email@email.com'}
                        variant={'outlined'}
                        requerid
                    />
                    <TextField
                        label={'CPF'}
                        type={'text'}
                        placeholder={'000.000.000-00'}
                        variant={'outlined'}
                        requerid
                    />
                    <TextField
                        label={'Senha'}
                        type={'password'}
                        placeholder={'Mínimo 6 caracteres'}
                        variant={'outlined'}
                        requerid
                    />
                    <TextField
                        label={'Confirmar'}
                        type={'password'}
                        placeholder={'Confirmar senha anterior'}
                        variant={'outlined'}
                        requerid
                    />
                    <S.SignUpButton>Criar</S.SignUpButton>
                </S.SignUpForm>
            </S.SignUp>
        </S.Container>
    )
}

export default SignUpPage;