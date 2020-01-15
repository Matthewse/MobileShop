const showCart = () => {
   const cartOverlay = document.querySelector('.cart__overlay');
   const productsCart = document.querySelector('.cart__products-cart');
   
   cartOverlay.classList.add('cart__transparentBackground');
   productsCart.classList.add('cart__showCart');
}

export default showCart;