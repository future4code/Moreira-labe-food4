import React from 'react';
import BackToLogin from '../../assets/img/backToLogin.png';
import { Container, Adress, Bar, Arrow, TextAdress, AdressForm } from './styled';
import { TextField, Button, CircularProgress } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { goBack } from '../../routes/coordinators';
import useRequest from '../../hooks/useRequest';
import useProtectedPage from '../../hooks/useProtectedPage';




const SignUpAdressPage = () => {
    useProtectedPage();
    
    const [requestData, isLoading] = useRequest();
    
    const navigate = useNavigate()

    return (
        <Container>
            <Adress>
                <Bar>
                    <Arrow src={BackToLogin} onClick={() => goBack(navigate)} alt="Back to login icon"/>
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
                     <Button>{isLoading?<CircularProgress style={{"color": "white"}} size={24}/>:<>Salvar</>}</Button>
                </AdressForm>
            </Adress>
        </Container>
    )
}

export default SignUpAdressPage;