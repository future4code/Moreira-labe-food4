import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #0a0909;
  overflow-y: hidden;
  @media screen and (max-width: 760px) {
    overflow-x: hidden;
  }
`;
export const Feed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 22.5rem;
  height: 40rem;
  position: fixed;
  top: 5rem;
  border-radius: 30px;
  background-color: white;
  overflow-y: scroll; 
  cursor: default;
  ::-webkit-scrollbar {
    display: none;
  }
  input {
    width: 18rem;
    height: 1.5rem;
    padding: 1rem 0.503rem 1rem 1.063rem;
    border-radius: 2px;
    border: solid 1px lightgray;
  }
  @media screen and (max-width: 760px) {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    border: none;
  }
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 5.2rem;
  position: fixed;
  border-radius: 30px;
  @media screen and (max-width: 760px) {
    width: 100vw;
    border-radius: 0;
    top: 0;
  }
`;
export const FeedTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22.5rem;
  height: 4rem;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 2px 0 rgba(0, 0, 0, 0.25);
  background-color: white;
  border-radius: 30px 30px 0 0;
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.813rem;
    height: 4rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: black;
  }
  @media screen and (max-width: 760px) {
    width: 100vw;
    border-radius: 0;
  }
`;
export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22.5rem;
  padding-top: 0.5rem;
  background-color: white;
`;
export const FoodFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22.5rem;
  height: 3.5rem;
  margin: 0 0 1.3rem 0;
  padding: 1.2rem 0 0.75rem 1rem;
  overflow-y: hidden;
  overflow-x: scroll;
  background-color: white;
  cursor: pointer;
  ::-webkit-scrollbar {
    display: none;
  }
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5.438rem;
    height: 3rem;
    margin: 0 0.5rem;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: black;
  }
`;
export const Cards = styled.div`
  margin-top: 12.5rem;
`;
export const Restaurants = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20rem;
  margin: 0 0 1.5rem 0;
  border: 1px solid #b8b8b8;
  border-radius: 10px;
`;
export const Images = styled.img`
  height: 7.5rem;
  margin: 0 0 0.3rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: fill;
`;
export const Names = styled.h2`
  width: 18.5rem;
  height: 1.125rem;
  margin: 0.75rem 1rem 0.25rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #e8222e;
`;
export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Time = styled.p`
  width: 9.25rem;
  height: 1.125rem;
  margin: 1rem 0.5rem 1rem 1rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`;
export const Price = styled.p`
  width: 8.75rem;
  height: 1.125rem;
  margin: 1rem 1rem 1rem 0.5rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: right;
  color: #b8b8b8;
`;
export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22.5rem;
  height: 3.063rem;
  margin: 0.813rem 0 0;
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2),
    0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
  background-color: #fff;
  position: fixed;
  margin-bottom: 2rem;
  bottom: 0;
  border-radius: 0 0 30px 30px;
`;
export const Items = styled.div`
  width: 7.5rem;
  height: 3.062rem;
  padding: 0.688rem 2.875rem 0.688rem 2.938rem;
  img {
    width: 1.688rem;
    height: 1.688rem;
    object-fit: contain;
    cursor: pointer;
  }
`;
