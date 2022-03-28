import React from "react";
import useUnprotectedPage from '../../hooks/useUnprotectedPage.js'
import { Container, Feed, Footer, Header, Items } from "./styled"
import FeedIcon from '../../assets/img/feedIcon.png';
import RedCartIcon from '../../assets/img/redCartIcon.png';
import AvatarIcon from '../../assets/img/avatarIcon.png';
import { useNavigate } from "react-router-dom";
import { goToFeedPage, goToCartPage, goToUserProfilePage } from "../../routes/coordinators";

const CartPage = () => {
    useUnprotectedPage();
    const navigate= useNavigate()


    return (
        <Container>
            <Feed>
            <Header>
                <h1>Carrinho</h1>            
            </Header>
            <Footer>
            <Items>
                <img src={FeedIcon} onClick={() => goToFeedPage(navigate)} alt="Feed Icon" />
            </Items>
            <Items>
                <img src={RedCartIcon} onClick={() => goToCartPage(navigate)} alt="Cart Icon" />
            </Items>
            <Items>
                <img src={AvatarIcon} onClick={() => goToUserProfilePage(navigate)} alt="User Icon" />
            </Items>
            </Footer>
            </Feed>
        </Container>
    );
   };
export default CartPage;