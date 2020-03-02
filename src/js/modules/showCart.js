const showCart = () => {
   const cartBackdrop = document.querySelector('.cart__backdrop');
   const productsCart = document.querySelector('.cart__products-cart');
   
   cartBackdrop.classList.add('cart__transparentBackground');
   productsCart.classList.add('cart__showCart');
   document.body.style.overflow = 'hidden';
}

export default showCart;