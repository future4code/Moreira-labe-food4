import React from 'react';
import { Container, HomeScreen, LogoIfuture } from './styled';
import Logo from '../../assets/img/logo.png'






const HomePage = () => {
    return (
        <Container>
            <HomeScreen>
                <LogoIfuture src={Logo} alt="Ifuture Logo" />
            </HomeScreen>
        </Container>
    )
}

export default HomePage;