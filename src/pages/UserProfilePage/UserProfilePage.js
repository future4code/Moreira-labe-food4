import React from "react";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { Container, Feed, Footer, Header, Items } from "./styled"
import redFeedIcon from '../../assets/img/redFeedIcon.png';
import cartIcon from '../../assets/img/cartIcon.png';
import avatarIcon from '../../assets/img/avatarIcon.png';
import { goToFeedPage, goToCartPage, goToUserProfilePage } from "../../routes/coordinators";
import UserProfileInfo from "../../components/UserProfileInfo/UserProfileInfo"
import UserAddressInfo from "../../components/UserAddressInfo/UserAddressInfo"
import GlobalContext from "../../Global/GlobalContext";

const UserProfilePage = () => {
    useUnprotectedPage();
    const {navigate} = React.useContext(GlobalContext);

    

    return (
        <Container>
            <Feed>
            <Header>
                <h1>Meu perfil</h1>            
            </Header>
            <UserProfileInfo/> 
            <UserAddressInfo/>           
            <Footer>
            <Items>
                <img src={redFeedIcon} onClick={() => goToFeedPage(navigate)} alt="Feed Icon" />
            </Items>
            <Items>
                <img src={cartIcon} onClick={() => goToCartPage(navigate)} alt="Cart Icon" />
            </Items>
            <Items>
                <img src={avatarIcon} onClick={() => goToUserProfilePage(navigate)} alt="User Icon" />
            </Items>
            </Footer>
            </Feed>
        </Container>
    );
};
export default UserProfilePage;