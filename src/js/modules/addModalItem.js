const addModalItem = product => {
   const modalProduct = document.querySelector('.modal__product-modal');

   modalProduct.innerHTML += `
      <span class="modal__close">X</span>
      <img class="modal__image" src="assets/${product.img}" width="300" height="300" alt="product" data-id=${product.id}>
      <div class="modal__wrapper">
         <h2 class="modal__title">${product.title}</h2>
         <div class="modal__info modal__brand-info">
            <h2 class="modal__brand-label">Brand</h2>
            <p class="modal__brand">${product.company}</p>
         </div>
         <div class="modal__info modal__price-info">
            <h2 class="modal__price-label">Price</h2>
            <p class="modal__price">${product.price} $</p>
         </div>
         <div class="modal__info modal__description-info">
            <h2 class="modal__description-label">Description</h2>
            <p class="modal__description-text">${product.info}</p>
         </div>
      </div>
   `;
}

export default addModalItem;