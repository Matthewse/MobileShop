import displayProducts from "./displayProducts";
import search from "./search";
import filter from "./filter";
import showCart from "./showCart";
import hideCart from "./hideCart";
import addCartItem from './addCartItem';
import setCartValues from './setCartValues';
import clearCart from './clearCart';

const app = products => {
   const searchInput = document.querySelector('.search');
   const companies = document.querySelectorAll('.brand-filter__company');
   const cartButton = document.querySelector('.cart-button');
   const closeCartElements = document.querySelectorAll('.cart__close, .cart__overlay');
   const clearCartButton = document.querySelector('.button__btn--clear-cart');

   let term = '';
   let brand = 'All';
   let cart = [];

   const getBuyButtons = () => {
      const buttons = [...document.querySelectorAll('.button__btn--products-buy')];

      buttons.forEach(button => {
         const id = button.dataset.id;
         const inCart = cart.find(product => product.id === id);

         if (inCart) {
            button.innerText = 'In сart';
            button.disabled = true;
         }

         button.addEventListener('click', event => {
            event.target.innerText = 'In сart';
            event.target.disabled = true;
            const id = button.dataset.id;
            const product = products.find(product => product.id === id);
            const cartProduct = { ...product, amount: 1 };
            cart = [...cart, cartProduct];
            addCartItem(cartProduct);
            setCartValues(cart);
         });
      });
   }

   searchInput.addEventListener('keyup', event => {
      term = event.target.value.trim();
      const searchProducts = search(filter(products, brand), term);
      displayProducts(searchProducts);
      getBuyButtons();
   });

   companies.forEach(company => {
      company.addEventListener('click', () => {
         brand = company.dataset.company;
         const filterProducts = filter(search(products, term), brand);
         displayProducts(filterProducts);
         getBuyButtons();
      });
   });

   cartButton.addEventListener('click', () => showCart());

   closeCartElements.forEach(closeCart => {
      closeCart.addEventListener('click', () => {
         hideCart();
      });
   });

   clearCartButton.addEventListener('click', () => {
      cart = clearCart(cart);
   });

   getBuyButtons();
}

export default app;