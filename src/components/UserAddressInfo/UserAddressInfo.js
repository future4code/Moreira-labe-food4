import React, {useContext, useEffect} from 'react';
import useRequest from '../../hooks/useRequest';
import{ baseUrl } from '../../constants/urls';
import GlobalContext from '../../Global/GlobalContext.js';


const UserAddressInfo = () =>{
  const {addressInfo, getAddressInfo} = useContext(GlobalContext)
    
  useEffect(() => {
    getAddressInfo();
  }, []);

  return (
    <div>
        <div>
            <h4>Endereço Cadastrado</h4>
            <p>{addressInfo.street}, {addressInfo.number} - {addressInfo.neighbourhood} </p>
           
        </div>
    </div>

  )
}
export default UserAddressInfo;