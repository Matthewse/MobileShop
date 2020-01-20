import setCartValues from './setCartValues';

const removeProduct = (id, cart, buttons) => {
   cart = cart.filter(item => item.id !== id);
   setCartValues(cart);

   const button = buttons.find(button => button.dataset.id === id);

   if (button) {
      button.disabled = false;
      button.innerText = 'Buy';
   }

   return cart;
}

export default removeProduct;