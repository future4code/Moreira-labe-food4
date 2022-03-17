import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Login, Img, TextLogin, LoginForm, SignUpText } from './styled'
import redLogo from '../../assets/img/redLogo.png'
import { TextField, Button, CircularProgress } from '@material-ui/core';
import { goToChangeAdressPage, goToFeedPage, goToSignUpAdressPage, goToSignUpPage } from '../../routes/coordinators';
import useRequest from '../../hooks/useRequest.js';
import useFormHook from '../../hooks/useFormHook.js';
import { baseUrl } from '../../constants/urls.js';

const LoginPage = () => {
    const [requestData, isLoading] = useRequest();
    const [form, onChangeInput] = useFormHook({email: '', password: ''});
    const adressToken = localStorage.getItem('addressToken')

    const navigate = useNavigate()

    const onSubmitForm = async (evt) => {
        evt.preventDefault(); 

        const {token} = await requestData(`${baseUrl}login`, 'post', form);

        localStorage.setItem('token', token);
        localStorage.getItem('addressToken');

        return adressToken !== null ? goToFeedPage(navigate) : goToSignUpAdressPage(navigate);
    }

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
                <Button type={'submit'}>{isLoading?<CircularProgress style={{"color": "white"}} size={24}/>:<>Enviar</>}</Button>
                </LoginForm>
                <SignUpText>
                    Não possui cadastro? 
                    <Button variant={'text'} type={'button'} onClick={() => goToSignUpPage(navigate)} >Clique aqui.</Button>
                </SignUpText>
            </Login>
        </Container>
    )

}

export default LoginPage;

