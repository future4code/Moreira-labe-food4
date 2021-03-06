import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../constants/urls";
import useRequest from "../../hooks/useRequest";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import {
  Container,
  Feed,
  Header,
  FeedTitle,
  SearchInput,
  Cards,
  Restaurants,
  Images,
  Names,
  TextWrap,
  Time,
  Price,
  Footer,
  Items,
  FoodFilter,
} from "./styled";
import { TextField, CircularProgress } from "@material-ui/core";
import redFeedIcon from "../../assets/img/redFeedIcon.png";
import cartIcon from "../../assets/img/cartIcon.png";
import avatarIcon from "../../assets/img/avatarIcon.png";
import {
  goToFeedPage,
  goToCartPage,
  goToUserProfilePage,
} from "../../routes/coordinators";
import GlobalContext from "../../Global/GlobalContext";

const FeedPage = () => {
  useUnprotectedPage();
  const {
    viewFeed,
    getFeed,
    navigate,
    search,
    onSearch,
    searchCategory,
    setSearchCategory,
    buttonClicked,
    setButtonClicked,
    onClickResCard,
    isLoading
  } = useContext(GlobalContext);

  useEffect(() => {
    getFeed();
  }, []);

  const printCard = viewFeed ? (
    viewFeed
      .filter((info) => {
        return (
          info.name.toLowerCase().includes(search.toLowerCase()) ||
          info.category.toLowerCase().includes(search.toLowerCase())
        );
      })
      .filter((info) => {
        return info.category
          .toLowerCase()
          .includes(searchCategory.toLowerCase());
      })
      .map((info) => {
        return (
          <div key={info.id}>
            <Restaurants onClick={() => {onClickResCard(info.id)}}>
              <Images src={info.logoUrl} alt="Restaurants" />
              <Names>{info.name}</Names>
              <TextWrap>
                <Time>{info.deliveryTime} min</Time>
                <Price>
                  Frete <span>R$</span>
                  {info.shipping},00
                </Price>
              </TextWrap>
            </Restaurants>
          </div>
        );
      })
  ) : (
    <p>Carregando</p>
  );

  const foodCategory = viewFeed.map((info) => {
    const onClickCategory = () => {
      if (buttonClicked === false) {
        setButtonClicked(true);
        setSearchCategory(info.category);
      } else if (buttonClicked === true) {
        setButtonClicked(false);
        setSearchCategory("");
      }
    };

    return (
      <div key={info.id}>
        <p onClick={() => onClickCategory()}>{info.category}</p>
      </div>
    );
  });

  return (
    <Container>
      <Feed>
        {isLoading ? (
          <CircularProgress style={{ color: "red" }} size={50} />
        ) : (
          <>
            <Header>
              <FeedTitle>
                <h1>Ifuture</h1>
              </FeedTitle>
              <SearchInput>
                <TextField
                  placeholder="????&nbsp;&nbsp;&nbsp;&nbsp;Restaurante"
                  value={search}
                  onChange={onSearch}
                  variant={"outlined"}
                />
              </SearchInput>
              <FoodFilter>{foodCategory}</FoodFilter>
            </Header>
            <Cards>{printCard}</Cards>
            <Footer>
              <Items>
                <img
                  src={redFeedIcon}
                  onClick={() => goToFeedPage(navigate)}
                  alt="Feed Icon"
                />
              </Items>
              <Items>
                <img
                  src={cartIcon}
                  onClick={() => goToCartPage(navigate)}
                  alt="Cart Icon"
                />
              </Items>
              <Items>
                <img
                  src={avatarIcon}
                  onClick={() => goToUserProfilePage(navigate)}
                  alt="User Icon"
                />
              </Items>
            </Footer>
          </>
        )}
      </Feed>
    </Container>
  );
};
export default FeedPage;
