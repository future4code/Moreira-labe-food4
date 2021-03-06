import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import redLogo from '../../assets/img/redLogo.png'
import BackToLogin from '../../assets/img/backToLogin.png';
import { Container, SignUp, Bar, Arrow, Img, TextSignUp, SignUpForm } from './styled'
import { TextField, Button, CircularProgress } from '@material-ui/core';
import useRequest from '../../hooks/useRequest.js';
import useFormHook from '../../hooks/useFormHook.js';
import { baseUrl } from '../../constants/urls';
import { goBack, goToSignUpAdressPage } from '../../routes/coordinators';

const SignUpPage = () => {
    const [requestData, isLoading] = useRequest();
    const [form, onChangeInput] = useFormHook({name: '', email: '', cpf: '', password: '',});
    const [pass2, setPass2] = useState('');

    const navigate = useNavigate()

    const onChangePass2 = (evt) => {
        setPass2(evt.target.value);
    };

    const onSubmitForm = async (evt) => {
        evt.preventDefault();

        if (form.password === pass2) {
            const {token} = await requestData(`${baseUrl}signup` , 'post', form);
            /* console.log(token); */
            localStorage.setItem('token', token);
        }
        else {
            alert('Senhas não correspondem')
        }

        goToSignUpAdressPage(navigate);
    };
    
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
                        type={'text'}
                        placeholder={'000.000.000-00'}
                        variant={'outlined'}
                        name={'cpf'}
                        value={form.cpf.replace(/^(\d{3})\D*(\d{3})\D*(\d{3})\D*(\d{2})$/g,'$1.$2.$3-$4')}
                        onChange={onChangeInput}
                        title='Digite seu CPF com pontos e traço'
                        inputProps={{ maxLength: 14 }}
                        pattern="[0-9]"
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
                    <Button type='submit'>{isLoading?<CircularProgress style={{"color": "white"}} size={24}/>:<>Criar</>}</Button>
                </SignUpForm>
            </SignUp>
        </Container>
    )
};

export default SignUpPage;
 
