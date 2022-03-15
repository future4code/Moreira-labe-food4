import React from 'react';
import BackToLogin from '../../assets/img/backToLogin.png';
import { Container, Adress, Bar, Arrow, TextAdress, AdressForm } from './styled';
import { TextField, Button, CircularProgress } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { goBack } from '../../routes/coordinators';
import useRequest from '../../hooks/useRequest';
import useProtectedPage from '../../hooks/useProtectedPage';
import { useForm } from 'react-hook-form';


const SignUpAdressPage = () => {
   useProtectedPage();
    
    const [requestData, isLoading] = useRequest();
    
    const navigate = useNavigate()

  const {register, setValue, setFocus} = useForm();
  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
      console.log(data);
      // register({ name: 'address', value: data.logradouro });
      setValue('address', data.logradouro);
      setValue('neighborhood', data.bairro);
      setValue('complement', data.complemento)
      setValue('city', data.localidade);
      setValue('uf', data.uf);
      setFocus('addressNumber');
    });
  }

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
                        type={'text'} {...register("cep")} onBlur={checkCEP}
                        //placeholder={'Rua / Avenida'}
                        variant={'outlined'}
                        required                    />
                    <TextField
                        label={'Número'}
                        type={'number'} {...register("addressNumber" )}
                        //placeholder={'Número'}
                        variant={'outlined'}
                        required                    />
                    <TextField
                        label={'Complemento'}
                        type={'text'} {...register("complement" )}
                       // placeholder={'Apto. / Bloco'}
                        variant={'outlined'}
                        required
                    />
                    <TextField
                        label={'Bairro'}
                        type={'text'} {...register("neighborhood" )}
                       // placeholder={'Bairro'}
                        variant={'outlined'}
                        required
                    />
                    <TextField
                        label={'Cidade'} 
                        type={'text'} {...register("city" )}
                        //placeholder={'Cidade'}
                        variant={'outlined'}
                        required                    />
                    <TextField
                        label={'Estado'}
                        type={'text'} {...register("uf" )}
                        //placeholder={'Estado'}
                        variant={'outlined'}
                        required                    />
                     <Button>{isLoading?<CircularProgress style={{"color": "white"}} size={24}/>:<>Salvar</>}</Button>
                </AdressForm>
            </Adress>
        </Container>
    )
}

export default SignUpAdressPage;