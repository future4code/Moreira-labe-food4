import React from 'react';
import BackToLogin from '../../assets/img/backToLogin.png';
import { Container, Adress, Bar, Arrow, TextAdress, AdressForm, AdressButton } from './styled';
import { TextField } from '@material-ui/core';






const SignUpAdressPage = () => {
    return (
        <Container>
            <Adress>
                <Bar>
                    <Arrow src={BackToLogin} alt="Back to login icon"/>
                </Bar>
                <TextAdress>
                    <p>Meu endereço</p>
                </TextAdress> 
                <AdressForm>
                    <TextField
                        label={'Logadouro'}
                        type={'text'}
                        placeholder={'Rua / Avenida'}
                        variant={'outlined'}
                        requerid
                    />
                    <TextField
                        label={'Número'}
                        type={'number'}
                        placeholder={'Número'}
                        variant={'outlined'}
                        requerid
                    />
                    <TextField
                        label={'Complemento'}
                        type={'text'}
                        placeholder={'Apto. / Bloco'}
                        variant={'outlined'}
                        requerid
                    />
                    <TextField
                        label={'Bairro'}
                        type={'text'}
                        placeholder={'Bairro'}
                        variant={'outlined'}
                        requerid
                    />
                    <TextField
                        label={'Cidade'}
                        type={'text'}
                        placeholder={'Cidade'}
                        variant={'outlined'}
                        requerid
                    />
                    <TextField
                        label={'Estado'}
                        type={'text'}
                        placeholder={'Estado'}
                        variant={'outlined'}
                        requerid
                    />
                    <AdressButton>Salvar</AdressButton>
                </AdressForm>
            </Adress>
        </Container>
    )
}

export default SignUpAdressPage;