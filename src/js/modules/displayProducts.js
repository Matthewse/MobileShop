const displayProducts = (products) => {
   const productsList = document.querySelector('.products__list');

   let result = '';
   products.forEach(product => {
      result += `
         <li class="products__item">
            <img class="products__image" src="assets/${product.img}" width="240" height="240" alt="product">
            <div class="products__description">
               <h3 class="products__title">${product.title}</h3>
               <p class="products__price">${product.price} $</p>
            </div>
         </li>
         `
      productsList.innerHTML = result;
   });
}

export default displayProducts;