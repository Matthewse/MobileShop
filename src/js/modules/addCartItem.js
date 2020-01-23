const addCartItem = product => {
   const cartProductsList = document.querySelector('.cart__products-list');

   cartProductsList.innerHTML += `
      <li class="cart__item">
         <img class="cart__image" src="assets/${product.img}" width="150" height="150" alt="product">
         <div class="cart__wrapper">
            <div class="cart__header">
               <h3 class="cart__header-title">${product.title}</h3>
               <span class="cart__remove-item" data-id=${product.id}>X</span>
            </div>
            <div class="cart__info">
               <div>
                  <h2 class="cart__label">Quantity</h2>
                  <div class="cart__amount">
                     <p class="cart__item-minus" data-id=${product.id}>-</p>
                     <p class="cart__item-amount">${product.amount}</p>
                     <p class="cart__item-plus" data-id=${product.id}>+</p>
                  </div>
               </div>
               <div class="cart__price-info">
                  <h2 class="cart__label">Price</h2>
                  <p class="cart__price">${product.price} $</p>
               </div>
            </div>
         </div>
      </li>
   `;
}

export default addCartItem;