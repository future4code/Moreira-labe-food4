import GlobalContext from '../../Global/GlobalContext.js'
import React from 'react';
import useFormHook from '../../hooks/useFormHook.js';
import { Container, Login, Img, TextLogin, LoginForm, SignUpText } from './styled'
import redLogo from '../../assets/img/redLogo.png'
import { TextField, Button, CircularProgress } from '@material-ui/core';
import useProtectedPage from '../../hooks/useProtectedPage.js';
import { goToSignUpPage } from '../../routes/coordinators';

const LoginPage = () => {
    useProtectedPage();
    const [form, onChangeInput] = useFormHook({email: '', password: ''});
    const {isLoading, login, navigate} = React.useContext(GlobalContext);

    const onSubmitForm = async (evt) => {
        evt.preventDefault(); 
        login(form);
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

