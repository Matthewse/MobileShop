const showCart = () => {
   const cartOverlay = document.querySelector('.cart__overlay');
   const productsCart = document.querySelector('.cart__products-cart');
   
   cartOverlay.classList.add('transparentBackground');
   productsCart.classList.add('showCart');
}

export default showCart;