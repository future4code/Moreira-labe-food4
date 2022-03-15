import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Login, Img, TextLogin, LoginForm, SignUpText } from './styled'
import redLogo from '../../assets/img/redLogo.png'
import { TextField, Button, CircularProgress } from '@material-ui/core';
import { goToSignUpPage } from '../../routes/coordinators';
import useRequest from '../../hooks/useRequest.js';
import useForm from '../../hooks/useForm.js';
import { baseUrl } from '../../constants/urls.js';


const LoginPage = () => {
    const [requestData, isLoading] = useRequest();
    const [form, onChangeInput] = useForm({email: '', password: ''});

    const navigate = useNavigate()

    const onSubmitForm = async (evt) => {
        evt.preventDefault(); 

        const response = await requestData(`${baseUrl}login`, 'post', form);

        console.log(response);
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
                <Button>{isLoading?<CircularProgress style={{"color": "white"}} size={24}/>:<>Enviar</>}</Button>
                </LoginForm>
                <SignUpText>
                    Não possui cadastro? 
                    <Button variant={'text'} type={'submit'} onClick={() => goToSignUpPage(navigate)} >Clique aqui.</Button>
                </SignUpText>
            </Login>
        </Container>
    )

}

export default LoginPage;

