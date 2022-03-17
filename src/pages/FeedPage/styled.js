import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
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
  border-radius: 30px;
  background-color: white;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  input{
    width: 18rem;
    height: 1.5rem;
    padding: 1rem 0.503rem 1rem 1.063rem;
    border-radius: 2px;
    border: solid 1px #b8b8b8;
  }
  @media screen and (max-width: 760px) {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    border: none;
  }
`;
export const Header = styled.div`
  display:flex;
  align-items: center;
  justify-content: center; 
  width: 22.5rem;
  height: 4rem;
  margin: 0 0 0.5rem;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #fff;
  h1{
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
    width: 100%;
  }
`;
export const FoodFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25.5rem;
  height: 2.625rem;
  margin: 1.3rem 0 1.3rem 1rem;
  padding: 0.75rem 0 0.75rem 1rem;
  overflow-y: hidden;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  p{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5.438rem;
    height: 3rem;
    margin: 0 0.5rem;
    font-family: 'Roboto', sans-serif;
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
  width: 100%;
  height: 3.063rem;
  margin: 0.813rem 0 0;
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2), 0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
  background-color: #fff;
`;
export const Items = styled.div`
  width: 7.5rem;
  height: 3.062rem;
  padding: 0.688rem 2.875rem 0.688rem 2.938rem;
  img{
    width: 1.688rem;
    height: 1.688rem;
    object-fit: contain;
  }
`;


