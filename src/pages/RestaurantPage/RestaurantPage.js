import React, {useContext, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import GlobalContext from "../../Global/GlobalContext";
import useFormHook from "../../hooks/useFormHook";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { goBack } from "../../routes/coordinators";
/* import ModalCard from "./modal";*/

const RestaurantPage = () => {
    useUnprotectedPage();
    const navigate = useNavigate()
    const {getDishes, resInfo, resInfoProducts} = useContext(GlobalContext);
    const {restauranteId} = useParams();

    useEffect(() => {
        getDishes(restauranteId);
    }, []);

    return (
        <>
            <h1>OI Falaaa Danilo Boa Estilização Caraaa</h1>
            <button onClick={() => goBack(navigate)}>Voltar</button>

            <img src={resInfo.logoUrl}/>
            <p>{resInfo.name}</p>
            <p>{resInfo.deliveryTime} min.</p>
            <p>{resInfo.address}</p>
            <p>R${resInfo.shipping},00</p>
            <p>{resInfo.description}</p>

            <h1>Principais</h1>
             {resInfoProducts.map((info) => {
                return <div key={info.id}>
                    <img src={info.photoUrl}></img>
                    <p>{info.name}</p>
                    <p>{info.description}</p>
                    <p>R${info.price},00</p>
                    <button>Adicionar ao carrinho</button>
{/*                  <ModalCard info={info.id}/>*/} 
                </div>
            })}
        </>
    )
};
export default RestaurantPage;