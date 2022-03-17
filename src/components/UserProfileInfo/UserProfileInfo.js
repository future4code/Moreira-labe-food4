import React, { useState, useEffect } from 'react'
import useRequest from '../../hooks/useRequest';
import{ baseUrl } from '../../constants/urls'


const UserProfileInfo = () => {
    const header = {headers: {auth: localStorage.getItem('token')}} 

    const [info, setInfo] = useState({})
    const [requestData, isLoading] = useRequest()

    const getProfileInfo = async () => {
        const {user} = await requestData(`${baseUrl}profile`, "get", header);
        setInfo(user);
        //console.log(user)
      };
    
      useEffect(() => {
        getProfileInfo();
      }, []); 

  return (
    <div>
        <div>
            <p>{info.name}</p>
            <p>{info.email}</p>
            <p>{info.cpf}</p>

        </div>
    </div>
  )
}
export default UserProfileInfo;
