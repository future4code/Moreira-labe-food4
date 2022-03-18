import styled from "styled-components"

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
  
  }
`;
export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 22.5rem;
  height: 40rem;
  border-radius: 30px;
  background-color: white;
  position: fixed;
  top: 5.2rem;

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
  margin: 0 0 1rem;
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  h1{
    display: flex;
    align-items: center;    
    justify-content: center;
    width: 5.25rem;
    height: 1.188rem;
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
export const OrderHistory = styled.p`
  width: 20.5rem;
  height: 1.125rem;
  margin: 1rem 1rem 0.5rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: black;
`;
export const Line = styled.div`
  width: 20.5rem;
  height: 0.063rem;
  margin: 0.5rem 1rem 1rem;
  border: solid 1px black;
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
  img{
    width: 1.688rem;
    height: 1.688rem;
    object-fit: contain;
    cursor: pointer;
  }
  @media screen and (max-width: 760px) {
    border-radius: 0;
  }
`;
