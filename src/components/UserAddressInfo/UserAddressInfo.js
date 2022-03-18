import React, { useContext, useEffect } from "react";
import GlobalContext from "../../Global/GlobalContext.js";
import { Address, AddressData } from "./styled.js";
import Edit from '../../assets/img/edit.png'
import { goToChangeAdressPage } from '../../routes/coordinators'

const UserAddressInfo = () => {
  const { addressInfo, getAddressInfo, navigate } = useContext(GlobalContext);

  useEffect(() => {
    getAddressInfo();
  }, []);

  return (
    <Address>
      <AddressData>
          <h4>Endereço Cadastrado</h4>
          <img src={Edit} onClick={() => goToChangeAdressPage(navigate)} alt="Edit address icon" />
        </AddressData>
          <p>{addressInfo.street}, {addressInfo.number} -{" "}
          {addressInfo.neighbourhood}{" "}</p>
    </Address>
  );
};
export default UserAddressInfo;
