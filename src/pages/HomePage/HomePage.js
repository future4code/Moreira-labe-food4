import React from 'react';
import { Container, HomeScreen, LogoIfuture } from './styled';
import Logo from '../../assets/img/logo.png'
import { useNavigate } from 'react-router-dom';
import { goToLoginPage } from "../../routes/coordinators"
import { CircularProgress } from '@material-ui/core';




const HomePage = () => {
    
    const navigate = useNavigate()

    setTimeout(() => {
        goToLoginPage(navigate)
    }, 1600)
    
    return (
        <Container>
            <HomeScreen>
                <LogoIfuture src={Logo} alt="Ifuture Logo"/>
                <CircularProgress style={{"color": "white"}} size={48}/>
            </HomeScreen>
        </Container>
    )
}

export default HomePage;