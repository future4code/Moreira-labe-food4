import React from 'react';
import { Container, ErrorImage, ErrorScreen, LogoIfuture } from './styled';
import Logo from '../../assets/img/redLogo.png'
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { goToHomePage } from '../../routes/coordinators'
import ErrorImg from "../../assets/img/error.png"


const ErrorPage = () => {
    
    const navigate = useNavigate()
    
    return (
        <Container>
            <ErrorScreen>
                <LogoIfuture src={Logo} alt="Ifuture Logo"/>
                <ErrorImage src={ErrorImg} alt="Ifuture Logo"/>
                <h1>Ops, essa página não existe!</h1>
                <p>Talvez o endereço não esteja mais disponível na web.</p>
                <Button onClick={() => goToHomePage(navigate)}>Voltar ao início</Button>
            </ErrorScreen>
        </Container>
    )
}

export default ErrorPage;