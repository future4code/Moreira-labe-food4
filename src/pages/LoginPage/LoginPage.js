import React from 'react';
import { useNavigate } from 'react-router-dom';
import redLogo from '../../assets/img/redLogo.png'
import { Img, LoginForm, Container, Login, TextLogin, LoginButton, SignUpText } from './styled';
import { TextField } from '@material-ui/core';
import { goToSignUpPage } from '../../routes/coordinators';




const LoginPage = () => {
    
    const navigate = useNavigate()

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
                        requered
                    />
                    <TextField
                        label={'Senha'}
                        type={'password'}
                        variant={'outlined'}
                        required
                    />
                <LoginButton>Entrar</LoginButton>
                </LoginForm>
                <SignUpText>
                    Não possui cadastro? 
                    <button variant={'text'} type={'submit'} onClick={() => goToSignUpPage(navigate)} >Clique aqui</button>
                </SignUpText>
            </Login>
        </Container>
    )
}

export default LoginPage;