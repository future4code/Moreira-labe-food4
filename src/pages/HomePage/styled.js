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
export const HomeScreen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 22.5rem;
    height: 40rem;
    padding: 0 0 1.625rem;
    border: none;
    border-radius: 30px;
    background-color: #e8222e;
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
`
