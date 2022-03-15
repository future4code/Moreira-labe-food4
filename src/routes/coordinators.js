export const goToHomePage = (navigate) => {
    navigate('/');
}
export const goToLoginPage = (navigate) => {
    navigate('/login');
}
export const goToSignUpPage = (navigate) => {
    navigate('/signup/usuario');
}
export const goToSignUpAdressPage = (navigate) => {
    navigate('/signup/endereco');
}
export const goToFeedPage = (navigate) => {
    navigate('/feed');
}
export const goToSearchPage = (navigate) => {
    navigate('/feed/buscar');
}
export const goToRestaurantPage = (navigate) => {
    navigate('/feed/:restaurante');
}
export const goToCartPage = (navigate) => {
    navigate('/carrinho');
}
export const goToUserProfilePage = (navigate) => {
    navigate('/perfil');
}
export const goToChangeUserInfoPage = (navigate) => {
    navigate('/perfil/info/usuario');
}
export const goToChangeAdressPage = (navigate) => {
    navigate('/perfil/info/endereco');
}
export const goBack = (navigate) => {
    navigate(-1);
}