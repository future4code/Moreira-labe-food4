import React from 'react';
import redLogo from '../../assets/img/redLogo.png'
import { Img, LoginForm, Container, Login, TextLogin, LoginButton, SignUpText } from './styled';
import { TextField } from '@material-ui/core';





const LoginPage = () => {
    return (
        <Container>
            <Login>
                <Img src={redLogo}/>
                <TextLogin>Entrar</TextLogin> 
                <LoginForm>
                    <TextField
                        label={'Email'}
                        type={'email'}
                        variant={'outlined'}
                        requerid
                    />
                    <TextField
                    label={'Senha'}
                    type={'password'}
                    variant={'outlined'}
                    requerid
                    />
                <LoginButton >Entrar</LoginButton>
                <SignUpText>
                    Não possui cadastro? 
                    <button variant={'text'} type={'submit'}>Clique aqui</button>
                </SignUpText>
                </LoginForm>
            </Login>
        </Container>
    )
}

export default LoginPage;