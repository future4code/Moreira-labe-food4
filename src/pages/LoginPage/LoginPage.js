import React from 'react';
import { useNavigate } from 'react-router-dom';
import redLogo from '../../assets/img/redLogo.png'
import { Img, LoginForm, Container, Login, TextLogin, LoginButton, SignUpText } from './styled';
import { TextField } from '@material-ui/core';
import { goToSignUpPage } from '../../routes/coordinators';
import useRequest from '../../hooks/useRequest.js';
import useForm from '../../hooks/useForm.js';
import { baseUrl } from '../../constants/urls.js';

const LoginPage = () => {
    const [requestData, isLoading] = useRequest();
    const [form, onChangeInput] = useForm({email: '', password: ''});

    const onSubmitForm = async (evt) => {
        evt.preventDefault(); 

        const response = await requestData(`${baseUrl}login`, 'post', form);

        console.log(response);
    }


const LoginPage = () => {
    
    const navigate = useNavigate()

    return (
        <Container>
            <Login>
                <Img src={redLogo}/>
                <TextLogin>Entrar</TextLogin> 
                <LoginForm onSubmit={onSubmitForm}>
                    <TextField
                        label={'Email'}
                        name={'email'}
                        value={form.email}
                        type={'email'}
                        onChange={onChangeInput}
                        variant={'outlined'}
                        required
                    />
                    <TextField
                        label={'Senha'}
                        name={'password'}
                        value={form.password}
                        type={'password'}
                        onChange={onChangeInput}
                        variant={'outlined'}
                        required
                    />
                <LoginButton >Entrar</LoginButton>
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