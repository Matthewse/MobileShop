const setCartValues = (cart) => {
   const cartTotal = document.querySelector('.cart__total');
   const cartItems = document.querySelector('.cart-button__items');

   let tempTotal = 0;
   let itemsTotal = 0;

   cart.map(item => {
      tempTotal += item.price * item.amount;
      itemsTotal += item.amount;
   })

   cartTotal.innerText = tempTotal;
   cartItems.innerText = itemsTotal;
}

export default setCartValues;