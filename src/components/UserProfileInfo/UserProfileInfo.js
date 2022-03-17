import React, {useContext, useEffect} from 'react'
import GlobalContext from '../../Global/GlobalContext';

const UserProfileInfo = () => {
  const {info, getProfileInfo} = useContext(GlobalContext);  

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
