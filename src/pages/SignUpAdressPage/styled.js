import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    background-color: #0a0909;
    overflow-x: hidden;
`
export const Adress = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 22.5rem;
    height: 40rem;
    padding: 0 0 1.625rem;
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
`
export const Bar = styled.div`
    width: 22.5rem;
    height: 16rem;
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #fff;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
        @media screen and (max-width: 760px) {
              border-radius: 0;
              height: 4rem;
              width: 100%;
    }
`

export const Arrow = styled.img`
    width: 1.44rem;
    height: 1.2rem;
    margin: 1.5rem 20.06rem 0 2rem;
    object-fit: contain;
`

export const TextAdress = styled.div`
    font-family: "Roboto", sans-serif;
    width: 22.5rem;
    height: 2.625rem;
    margin: 1rem 0 0;
    padding: 0.75rem 2rem;
    margin-bottom: 5%;
        p{
            width: 18.5rem;
            height: 1.125rem;
            font-family: Roboto;
            font-size: 1rem;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.39px;
            text-align: center;
            
    }
`

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
`


export const SignUpText = styled.p`
  margin-left: 50%;
  transform: translate(-50%);
  margin-top: 5%;
  width: 18.5rem;
  height: 1.125rem;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
    button{
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      font-weight: 500;
      background-color: transparent;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    button:hover{
      color: #24bafa;
      text-decoration: underline;
    }
`