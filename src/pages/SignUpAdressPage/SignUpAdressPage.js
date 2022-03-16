import React from 'react';
import BackToLogin from '../../assets/img/backToLogin.png';
import { Container, Adress, Bar, Arrow, TextAdress, AdressForm } from './styled';
import { TextField, Button, CircularProgress } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { goBack, goToLoginPage } from '../../routes/coordinators';
import useRequest from '../../hooks/useRequest';
import { baseUrl } from '../../constants/urls';
import useForm from '../../hooks/useForm';
import header, { mainHeader } from '../../constants/headers';
import ToastAnimated, { showToast } from '../../constants/ui-lib';
import useProtectedPage from '../../hooks/useProtectedPage';




const SignUpAdressPage = () => {   
    const navigate = useNavigate() 
    const [requestData, isLoading] = useRequest();
    const [form, onChangeInput] = useForm({street: '', number: '', neighbourhood: '', city: '', state: '', complement:''});

    const onSubmitAdress = async (evt) => {
        evt.preventDefault();

        console.log('faz alguma coisa')

        const {token} = await requestData(`${baseUrl}address`, 'put', form, header);
        console.log(token);
         localStorage.setItem('newToken', token);
        if(mainHeader !== null){
            goToLoginPage(navigate);
            console.log('oi');
        }
        else{
            showToast({ type: "error", message: "Infelizmente não foi possível fazer o cadastro" });
        } 

    };
    
    return (
        <Container>
            <ToastAnimated/>
            <Adress>
                <Bar>
                    <Arrow src={BackToLogin} onClick={() => goBack(navigate)} alt="Back to login icon"/>
                </Bar>
                <TextAdress>
                    <p>Meu endereço</p>
                </TextAdress> 
                <AdressForm onSubmit={onSubmitAdress}>
                    <TextField
                        label={'Logadouro'}
                        type={'text'}
                        placeholder={'Rua / Avenida'}
                        variant={'outlined'}
                        name={'street'}
                        value={form.street}
                        onChange={onChangeInput}
                        required
                    />
                    <TextField
                        label={'Número'}
                        type={'number'}
                        placeholder={'Número'}
                        variant={'outlined'}
                        name={'number'}
                        value={form.number}
                        onChange={onChangeInput}
                        required
                    />
                    <TextField
                        label={'Complemento'}
                        type={'text'}
                        placeholder={'Apto. / Bloco'}
                        variant={'outlined'}
                        name={'complement'}
                        value={form.complement}
                        onChange={onChangeInput}
                    />
                    <TextField
                        label={'Bairro'}
                        type={'text'}
                        placeholder={'Bairro'}
                        variant={'outlined'}
                        name={'neighbourhood'}
                        value={form.neighbourhood}
                        onChange={onChangeInput}
                        required
                    />
                    <TextField
                        label={'Cidade'}
                        type={'text'}
                        placeholder={'Cidade'}
                        variant={'outlined'}
                        name={'city'}
                        value={form.city}
                        onChange={onChangeInput}
                        required
                    />
                    <TextField
                        label={'Estado'}
                        type={'text'}
                        placeholder={'Estado'}
                        variant={'outlined'}
                        name={'state'}
                        value={form.state}
                        onChange={onChangeInput}
                        required
                    />
                     <Button type='submit'>{isLoading?<CircularProgress style={{"color": "white"}} size={24}/>:<>Salvar</>}</Button>
                </AdressForm>
            </Adress>
        </Container>
    )
}

export default SignUpAdressPage;