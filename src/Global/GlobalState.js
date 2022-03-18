import GlobalContext from './GlobalContext';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRequest from '../hooks/useRequest';
import { goToFeedPage, goToSignUpAdressPage } from '../routes/coordinators';
import { baseUrl } from '../constants/urls'


const GlobalState = (props) =>{
    //headers
    const header = {headers: {auth: localStorage.getItem('token')}};
    const addressHeader = {headers: {auth: localStorage.getItem('addressToken')}}; 
    //hooks
    const [requestData, isLoading] = useRequest();
    const navigate = useNavigate();
    //states
    const [info, setInfo] = useState({});
    const [addressInfo, setAddressInfo] = useState({});
    
    const login = async (form) => {
        const {token} = await requestData(`${baseUrl}login`, 'post', form);

        localStorage.setItem('token', token);
        const addressToken = localStorage.getItem('addressToken');

        return addressToken !== null ? goToFeedPage(navigate) : goToSignUpAdressPage(navigate);
    } 


    const getProfileInfo = async () => {
        const {user} = await requestData(`${baseUrl}profile`, "get", header);
        setInfo(user);
    };

    const getAddressInfo = async () => {
        const {address} = await requestData(`${baseUrl}profile/address`, "get", addressHeader);
        setAddressInfo(address);
    };

    
    const value = {navigate, isLoading, login, info, getProfileInfo, addressInfo, getAddressInfo};

    return(
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    )

}
export default GlobalState;