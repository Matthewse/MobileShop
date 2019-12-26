const hideCart = () => {
   const cartOverlay = document.querySelector('.cart__overlay');
   const productsCart = document.querySelector('.cart__products-cart');

   cartOverlay.classList.remove('transparentBackground');
   productsCart.classList.remove('showCart');
}

export default hideCart;