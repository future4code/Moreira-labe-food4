import React from 'react';
import redLogo from '../../assets/img/redLogo.png'
import BackToLogin from '../../assets/img/backToLogin.png';
import { Container, SignUp, Img, TextSignUp, SignUpForm, SignUpButton, SignUpText, Bar, Arrow  } from './styled';
import { TextField } from '@material-ui/core';






const SignUpPage = () => {
    return (
        <Container>
            <SignUp>
                <Bar>
                    <Arrow src={BackToLogin} alt="Back to login icon"/>
                </Bar>
                <Img src={redLogo} alt="Ifuture logo"/>
                <TextSignUp>
                    <p>Cadastrar</p>
                </TextSignUp> 
                <SignUpForm>
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
                    <SignUpButton>Criar</SignUpButton>
                </SignUpForm>
            </SignUp>
        </Container>
    )
}

export default SignUpPage;