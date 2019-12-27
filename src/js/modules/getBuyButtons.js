import addCartItem from './addCartItem';

const getBagButtons = (cart, products) => {
   const buttons = [...document.querySelectorAll('.products__buy-button')];

   buttons.forEach(button => {
      const id = button.dataset.id;
      const inCart = cart.find(product => product.id == id);

      if (inCart) {
         button.innerText = 'In сart';
         button.disabled = true;
      }

      button.addEventListener('click', event => {
         event.target.innerText = 'In сart';
         event.target.disabled = true;
         const product = products.find(product => product.id == id);
         const cartProduct = { ...product, amount: 1 }
         cart = [...cart, cartProduct];
         console.log("TCL: getBagButtons -> cartProduct", cartProduct)
         addCartItem(cartProduct);
      })
   });
}

export default getBagButtons;