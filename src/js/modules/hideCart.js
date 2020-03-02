const hideCart = () => {
   const cartBackdrop = document.querySelector('.cart__backdrop');
   const productsCart = document.querySelector('.cart__products-cart');

   cartBackdrop.classList.remove('cart__transparentBackground');
   productsCart.classList.remove('cart__showCart');
   document.body.style.overflowY = 'auto';
}

export default hideCart;