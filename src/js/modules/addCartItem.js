const addCartItem = product => {
   const cartProductsList = document.querySelector('.cart__products__list');

   cartProductsList.innerHTML += `
      <li class="cart__item">
         <img class="cart__image" src="assets/${product.img}" width="100" height="100" alt="product">
         <h3 class="cart__title">${product.title}</h3>
         <div>
            <p class="cart__price">${product.price} $</p>
            <ul class="cart__amount">
               <li><p class="cart__item-minus">-</p></li>
               <li><p class="cart__item-amount">0</p></li>
               <li><p class="cart__item-plus">+</p></li>
            </ul>
         </div>
         <span class="cart__remove-item" data-id=${product.id}>X</span>
      </li>
      `;
}

export default addCartItem;