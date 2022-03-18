import React, { useEffect } from "react";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { Container, Profile, Footer, Header, Items, Line, OrderHistory, HistoryContainer } from "./styled"
import FeedIcon from '../../assets/img/feedIcon.png';
import CartIcon from '../../assets/img/cartIcon.png';
import RedAvatarIcon from '../../assets/img/redAvatarIcon.png';
import { goToFeedPage, goToCartPage, goToUserProfilePage } from "../../routes/coordinators";
import UserProfileInfo from "../../components/UserProfileInfo/UserProfileInfo"
import UserAddressInfo from "../../components/UserAddressInfo/UserAddressInfo"
import GlobalContext from "../../Global/GlobalContext";

const UserProfilePage = () => {
    useUnprotectedPage();
    const {navigate, getHistory, history} = React.useContext(GlobalContext);

    useEffect(() => {
        getHistory();
    }, [])

    const showHistory = history.length === 0 ? <p>Você não realizou nenhum pedido</p> : history.map((order) => {
        return(
            <>{order}</>
        );
    });

    return (
        <Container>
            <Profile>
            <Header>
                <h1>Meu perfil</h1>            
            </Header>
            <UserProfileInfo/>
            <UserAddressInfo/>
            <HistoryContainer>
                <OrderHistory>
                    Histórico de pedidos
                </OrderHistory>
                <Line/>
                    {showHistory}
            </HistoryContainer>
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
            </Profile>
        </Container>
    );
};
export default UserProfilePage;