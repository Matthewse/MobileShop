import setCartValues from './setCartValues';

const clearCart = cart => {
   const cartProductList = document.querySelector('.cart__products__list');
   const filterItemsButtons = [...document.querySelectorAll('.button__btn--products-buy')];

   const cartItems = cart.map(item => item.id);

   cartItems.forEach(id => {
      cart = cart.filter(item => item.id !== id);
      setCartValues(cart);
   });

   while (cartProductList.children.length > 0) {
      cartProductList.removeChild(cartProductList.children[0]);
   }

   filterItemsButtons.forEach(button => {
      button.disabled = false;
      button.innerText = 'Buy';
   })

   return cart;
}

export default clearCart;