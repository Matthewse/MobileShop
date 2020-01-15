import setCartValues from "./setCartValues";

const clearCart = cart => {
   const cartProductList = document.querySelector('.cart__products__list');
   const buttons = [...document.querySelectorAll('.button__btn--products-buy')];

   let cartItems = cart.map(item => item.id);

   cartItems.forEach(id => {
      cart = cart.filter(item => item.id !== id);
      setCartValues(cart);
      const button = buttons.find(button => button.dataset.id === id);
      button.disabled = false;
      button.innerText = 'Buy';
   });

   while (cartProductList.children.length > 0) {
      cartProductList.removeChild(cartProductList.children[0]);
   }

   return cart;
}

export default clearCart;