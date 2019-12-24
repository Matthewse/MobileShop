import search from "./search";
import filter from "./filter";

const displayProducts = (products) => {
   const productsList = document.querySelector('.products__list');
   const searchInput = document.querySelector('.search');
   const companies = document.querySelectorAll('.brend-filter__company');

   let term = '';
   let brand = 'All';

   const showProducts = (products) => {
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
   showProducts(products);

   searchInput.addEventListener('keyup', e => {
      term = e.target.value.trim();
      const searchProducts = filter(search(products, term), brand);
      showProducts(searchProducts);
   });

   companies.forEach(company => {
      company.addEventListener('click', () => {
         brand = company.dataset.company;
         const filterProducts = search(filter(products, brand), term);
         showProducts(filterProducts);
      });
   });
}

export default displayProducts;