import React, { useContext, useEffect } from "react";
import GlobalContext from "../../Global/GlobalContext";
import { CPF, Email, Name, UserInfo } from "./styled";
import Edit from "../../assets/img/edit.png";
import { goToChangeUserInfoPage } from '../../routes/coordinators'

const UserProfileInfo = () => {
  const { info, getProfileInfo, navigate } = useContext(GlobalContext);

  useEffect(() => {
    getProfileInfo();
  }, []);

  return (
    <div>
      <UserInfo>
        <Name>{info.name}</Name>
        <img src={Edit} onClick={() => goToChangeUserInfoPage(navigate)}alt="Edit name icon" />
      </UserInfo>
      <Email>{info.email}</Email>
      <CPF>{info.cpf}</CPF>
    </div>
  );
};
export default UserProfileInfo;
