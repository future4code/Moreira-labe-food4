import React from "react";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { Container, Profile, Footer, Header, Items, Line, OrderHistory } from "./styled"
import FeedIcon from '../../assets/img/feedIcon.png';
import CartIcon from '../../assets/img/cartIcon.png';
import RedAvatarIcon from '../../assets/img/redAvatarIcon.png';
import { goToFeedPage, goToCartPage, goToUserProfilePage } from "../../routes/coordinators";
import UserProfileInfo from "../../components/UserProfileInfo/UserProfileInfo"
import UserAddressInfo from "../../components/UserAddressInfo/UserAddressInfo"
import GlobalContext from "../../Global/GlobalContext";

const UserProfilePage = () => {
    useUnprotectedPage();
    const {navigate} = React.useContext(GlobalContext);

    

    return (
        <Container>
            <Profile>
            <Header>
                <h1>Meu perfil</h1>            
            </Header>
            <UserProfileInfo/>
            <UserAddressInfo/>
            <div>
                <OrderHistory>Histórico de pedidos</OrderHistory>
                <Line/>
                <Footer>
            <Items>
                <img src={FeedIcon} onClick={() => goToFeedPage(navigate)} alt="Feed Icon" />
            </Items>
            <Items>
                <img src={CartIcon} onClick={() => goToCartPage(navigate)} alt="Cart Icon" />
            </Items>
            <Items>
                <img src={RedAvatarIcon} onClick={() => goToUserProfilePage(navigate)} alt="User Icon" />
            </Items>
            </Footer>
            </div>
            </Profile>
        </Container>
    );
};
export default UserProfilePage;