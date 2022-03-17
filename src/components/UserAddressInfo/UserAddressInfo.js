import React, {useState, useEffect} from 'react'
import useRequest from '../../hooks/useRequest';
import{ baseUrl } from '../../constants/urls'


const UserAddressInfo = () =>{
    const header = {headers: {auth: localStorage.getItem('addressToken')}} 

    const [info, setInfo] = useState({})
    const [requestData, isLoading] = useRequest()

    const getAddressInfo = async () => {
        const {address} = await requestData(`${baseUrl}profile/address`, "get", header);
        setInfo(address);
        console.log(address)
      };
    
      useEffect(() => {
        getAddressInfo();
      }, []);

  return (
    <div>
        <div>
            <h4>Endereço Cadastrado</h4>
            <p>{info.street}, {info.number} - {info.neighbourhood} </p>
           
        </div>
    </div>

  )
}
export default UserAddressInfo;