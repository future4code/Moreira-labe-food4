import React from 'react';
import { useNavigate } from 'react-router-dom';
import redLogo from '../../assets/img/redLogo.png'
import BackToLogin from '../../assets/img/backToLogin.png';
import { Container, SignUp, Img, TextSignUp, SignUpForm, SignUpButton, SignUpText, Bar, Arrow  } from './styled';
import { TextField } from '@material-ui/core';
import { goBack } from '../../routes/coordinators';





const SignUpPage = () => {

    const navigate = useNavigate()

    return (
        <Container>
            <SignUp>
                <Bar>
                    <Arrow src={BackToLogin} onClick={() => goBack(navigate)} alt="Back to login icon"/>
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
                        required
                    />
                    <TextField
                        label={'Email'}
                        type={'email'}
                        placeholder={'email@email.com'}
                        variant={'outlined'}
                        required
                    />
                    <TextField
                        label={'CPF'}
                        type={'text'}
                        placeholder={'000.000.000-00'}
                        variant={'outlined'}
                        required
                        pattern='[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}'
                        title='Digite um CPF nesse formato: 000.000.000-00'
                    />
                    <TextField
                        label={'Senha'}
                        type={'password'}
                        placeholder={'Mínimo 6 caracteres'}
                        variant={'outlined'}
                        required
                    />
                    <TextField
                        label={'Confirmar'}
                        type={'password'}
                        placeholder={'Confirmar senha anterior'}
                        variant={'outlined'}
                        required
                    />
                    <SignUpButton>Criar</SignUpButton>
                </SignUpForm>
            </SignUp>
        </Container>
    )
}

export default SignUpPage;