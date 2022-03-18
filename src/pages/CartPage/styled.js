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
    overflow-x: hidden;
  }
`;
export const Feed = styled.div`
  display: flex;
  position: fixed;
  top: 5.2rem;
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
    top: 0;
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
  bottom: 3rem;
  border-radius: 0 0 30px 30px;

  @media screen and (max-width: 760px) {
    bottom: 0; 
  }  
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
`;