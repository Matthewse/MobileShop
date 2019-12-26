import displayProducts from "./displayProducts";
import search from "./search";
import filter from "./filter";
import showCart from "./showCart";
import hideCart from "./hideCart";

const app = (products) => {
   const searchInput = document.querySelector('.search');
   const companies = document.querySelectorAll('.brand-filter__company');
   const cartButton = document.querySelector('.cart-button');
   const closeCartButton = document.querySelector('.cart__close');

   let term = '';
   let brand = 'All';

   displayProducts(products);

   searchInput.addEventListener('keyup', e => {
      term = e.target.value.trim();
      const searchProducts = search(filter(products, brand), term);
      displayProducts(searchProducts);
   });

   companies.forEach(company => {
      company.addEventListener('click', () => {
         brand = company.dataset.company;
         const filterProducts = filter(search(products, term), brand);
         displayProducts(filterProducts);
      });
   });

   cartButton.addEventListener('click', () => showCart());

   closeCartButton.addEventListener('click', () => hideCart());

}

export default app;