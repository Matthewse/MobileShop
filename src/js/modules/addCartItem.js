const addCartItem = product => {
   const cartProductsList = document.querySelector('.cart__products__list');

   cartProductsList.innerHTML += `
      <li class="cart__item">
         <img class="cart__image" src="assets/${product.img}" width="100" height="100" alt="product">
         <h3 class="cart__title">${product.title}</h3>
         <div>
            <p class="cart__price">${product.price} $</p>
            <p class="cart__item-amount">0</p>
         </div>
         <span class="cart__remove-item">X</span>
      </li>
      `;
}

export default addCartItem;