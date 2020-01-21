const checkCart = cart => {
   const cartTitle = document.querySelector('.cart__title');
   const cartFooter = document.querySelector('.cart__footer');

   if (cart.length > 0) {
      cartTitle.innerText = 'My cart';
      cartFooter.style.display = '';
   } else {
      cartTitle.innerText = 'Cart is empty';
      cartFooter.style.display = 'none';
   }
}

export default checkCart;