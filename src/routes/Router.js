import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage.js'
import LoginPage from '../pages/LoginPage/LoginPage.js'
import SignUpPage from '../pages/SignUpPage/SignUpPage.js'
import SignUpAdressPage from '../pages/SignUpAdressPage/SignUpAdressPage.js'
import FeedPage from '../pages/FeedPage/FeedPage.js'
import SearchPage from '../pages/SearchPage/SearchPage.js'
import RestaurantPage from '../pages/RestaurantPage/RestaurantPage.js'
import CartPage from '../pages/CartPage/CartPage.js'
import UserProfilePage from '../pages/UserProfilePage/UserProfilePage.js'
import ChangeUserInfoPage from '../pages/ChangeUserInfoPage/ChangeUserInfoPage.js'
import ChangeAdressPage from '../pages/ChangeAdressPage/ChangeAdressPage.js'
import ErrorPage from '../pages/ErrorPage/ErrorPage.js'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/login" element={<LoginPage/>}></Route>
                <Route path="/signup/usuario" element={<SignUpPage/>}></Route>
                <Route path="/signup/endereco" element={<SignUpAdressPage/>}></Route>
                <Route path="/feed" element={<FeedPage/>}></Route>
                <Route path="/feed/buscar" element={<SearchPage/>}></Route>
                <Route path="/feed/:restaurante" element={<RestaurantPage/>}></Route>
                <Route path="/carrinho" element={<CartPage/>}></Route>
                <Route path="/perfil" element={<UserProfilePage/>}></Route>
                <Route path="/perfil/info/usuario" element={<ChangeUserInfoPage/>}></Route>
                <Route path="/perfil/info/endereco" element={<ChangeAdressPage/>}></Route>
                <Route path='*' element={<ErrorPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};
export default Router;