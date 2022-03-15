import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: #0a0909;
`
export const Login = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 22.5rem;
    height: 40rem;
    padding: 0 0 11.5rem;
    border: 1px solid #bcb5b9;
    border-radius: 30px;
    background-color: white;
        @media screen and (max-width: 760px) {
              width: 100vw;
              height: 100vh;
              border-radius: 0;
          }
` 

export const Img = styled.img`
    width: 6.5rem;
    height: 3.625rem;
    margin: 4.25rem 8rem 1rem;
    object-fit: contain;
`
export const TextLogin = styled.p`
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
    color: var(--black);
`

export const LoginForm = styled.form`
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
      text-transform: capitalize;
      transition: all 0.2s ease;
    }
    button:hover{
      color: #24bafa;
      text-decoration: underline;
      background-color: transparent;
    }
`