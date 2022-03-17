import React, { useEffect, useState } from "react";
import { mainHeader } from "../../constants/headers";
import { baseUrl } from "../../constants/urls";
import useRequest from "../../hooks/useRequest";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import {
  Container,
  Feed,
  Header,
  Restaurants,
  Images,
  Names,
  TextWrap,
  Time,
  Price,
  Footer,
  Items,
  FoodFilter,
  DivCategory,
  FilterParag,
} from "./styled";
import { TextField, CircularProgress } from "@material-ui/core";
import feedIcon from '../../assets/img/feedIcon.png';
import cartIcon from '../../assets/img/cartIcon.png';
import avatarIcon from '../../assets/img/avatarIcon.png';

const FeedPage = () => {
  useUnprotectedPage();
  const [requestData, isLoading] = useRequest();
  const [viewFeed, setViewFeed] = useState([]);
  const [search, setSearch] = useState('');
  const [searchCategory, setSearchCategory] = useState('');

  const onSearch = (e) => {
    setSearch(e.target.value);
  };
  const onSearchCategory = (e) => {
    setSearchCategory(e.target.value)
  }

  const getFeed = async () => {
    const feed = await requestData(`${baseUrl}restaurants`, "get", mainHeader);
    setViewFeed(feed.restaurants);
  };

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
        return info.category.toLowerCase().includes(searchCategory.toLowerCase())
      })
      .map((info) => {
        return (
          <div key={info.id}>
            <Restaurants>
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
      return (
          <div key={info.id}>
              <p onDoubleClick={() => setSearchCategory('')} onClick={() => setSearchCategory(info.category)}>{info.category}</p>
          </div>
      )
  })

  return (
    <Container>
      <Feed>
      {isLoading?<CircularProgress style={{"color": "red" }} size={50}/>:<>
        <Header>
          <h1>Ifuture</h1>
        </Header>
        <TextField
          placeholder="🔍&nbsp;&nbsp;&nbsp;&nbsp;Restaurante"
          value={search}
          onChange={onSearch}
          variant={"outlined"}
        />

        <FoodFilter>
            {foodCategory}
        </FoodFilter>

        {printCard}
        <Footer>
            <Items>
                <img src={feedIcon} alt="Feed Icon" />
            </Items>
            <Items>
                <img src={cartIcon} alt="Cart Icon" />
            </Items>
            <Items>
                <img src={avatarIcon} alt="Feed Icon" />
            </Items>
        </Footer>
        </>}
      </Feed>
    </Container>
  );
};
export default FeedPage;
