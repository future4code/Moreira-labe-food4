import styled from 'styled-components';

export const Address = styled.div`
  background-color: #eee;
  p{
    width: 20.5rem;
    height: 1.125rem;
    margin: 0 1rem 1rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: black; 
  }
`;
export const AddressData = styled.div`
    display:flex;
    align-items: center;
    justify-content:space-between;
    width: 22.5rem;
    h4{
    width: 20.5rem;
    height: 1.125rem;
    margin: 1rem 1rem 0.5rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
  }
    img{
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 1rem;
        object-fit: contain;
        cursor: pointer;
    } 
`;