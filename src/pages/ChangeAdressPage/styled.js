import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    background-color: #0a0909;
    overflow-x: hidden;
`;
export const ChangeAdress = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 22.5rem;
    height: 40rem;
    padding: 0 0 5rem;
    border: 1px solid #bcb5b9;
    border-radius: 30px;
    background-color: white;
    position: fixed;
    @media screen and (max-width: 760px) {
      width: 100vw;
      height: 100vh;
      border-radius: 0;
      border: none;
      overflow-x: hidden;
    }
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 22.5rem;
  height: 4rem;
  margin: 0 0 1rem;
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 760px) {
    border-radius: 0;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.25);
  }
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  width: 10.938rem;
  height: 2.75rem;
  h1 {
    margin: 0 5.75rem 0 3.373rem;
    padding: 0 2rem 0;
    width: 2.5rem;
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
  img{
    width: 1.44rem;
    height: 1.2rem;
    margin: 0.625rem 3.373rem 0.625rem 1rem;
    object-fit: contain;
    cursor: pointer;
  }
`;
export const AdressForm = styled.form`
  display: grid;
  gap: 16px;
  button{
    width: 20.5rem;
    height: 2.625rem;
    padding: 0.75rem 1rem;
    border-radius: 2px;
    border: none;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    cursor: pointer;
    background-color: #e8222e;
    text-transform: capitalize;
  }
  button:hover{
    background-color: #e8222e; 
  }
`;
