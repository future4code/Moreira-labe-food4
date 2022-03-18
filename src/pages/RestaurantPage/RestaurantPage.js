import React, {useContext, useEffect} from "react";
import { useParams } from "react-router-dom";
import GlobalContext from "../../Global/GlobalContext";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const RestaurantPage = () => {
    useUnprotectedPage();
    const {getDishes} = useContext(GlobalContext);

    const {restauranteId} = useParams();

    useEffect(() => {
        getDishes(restauranteId);
    }, []);

    return (
        <>
                   
        </>
    )
};
export default RestaurantPage;