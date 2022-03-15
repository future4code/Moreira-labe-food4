import React from "react";
import useUnprotectedPage from '../../hooks/useUnprotectedPage.js'

const CartPage = () => {
    useUnprotectedPage();

    return (
        <>
        <h1>Sou o carrinho</h1>
        </>
    );
};
export default CartPage;