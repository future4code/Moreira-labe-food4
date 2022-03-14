import React from 'react';
import styled from 'styled-components'
import imgFood from '../../assets/img/imgFood.png'
import { Img, LoginForm, Container } from './styled';
import { Typography } from '@material-ui/core';
import { TextField, Button } from '@material-ui/core';

const LoginPage = () => {
    return (
        <Container>
            <Img src={imgFood}/>
            <Typography variant="h3">Login</Typography> 
            <LoginForm>
                <TextField
                    label={'Email'}
                    type={'email'}
                    requerid
                />
                <TextField
                label={'Senha'}
                type={'password'}
                requerid
                />
               <Button variant={'contained'} color={'primary'} type={'submit'}>Entrar</Button>
               <Button variant={'text'} color={'secundary'} type={'submit'}>Não Possui cadastro? Clique aqui</Button>
            
            </LoginForm>
        </Container>
    )
}

export default LoginPage;