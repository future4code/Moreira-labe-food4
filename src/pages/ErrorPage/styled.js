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
export const ErrorScreen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 22.5rem;
    height: 40rem;
    padding: 5rem 5rem 3rem;
    border: none;
    border-radius: 30px;
    background-color: white;
        h1{
            text-align: center;
            font-family: "Roboto", sans-serif;
            font-size: 1rem;
            font-weight: 900;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.39px;
            margin-bottom: 2%;
            color: #2f2828;
        }
        p{
            text-align: center;
            font-family: "Roboto", sans-serif;
            font-size: 0.9rem;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.39px;
            margin-bottom: 2%;
            color: #2f2828;
        }
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
            border-radius: 10px;
            text-transform: lowercase;
            color: white;
            }
        button:hover{
            background-color: #e8222e;
            }
        @media screen and (max-width: 760px) {
            width: 100vw;
            height: 100vh;
            border-radius: 0;
        }
`

export const LogoIfuture = styled.img`
    width: 7.875rem;
    height: 4.063rem;
    object-fit: contain;
    margin-bottom: 7%;
`

export const ErrorImage = styled.img`
    height: 15rem;
    object-fit: contain;
    margin-bottom: 7%;
`