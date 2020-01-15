const hideCart = () => {
   const cartOverlay = document.querySelector('.cart__overlay');
   const productsCart = document.querySelector('.cart__products-cart');

   cartOverlay.classList.remove('cart__transparentBackground');
   productsCart.classList.remove('cart__showCart');
}

export default hideCart;