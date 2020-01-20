import displayProducts from './displayProducts';
import search from './search';
import filter from './filter';
import showCart from './showCart';
import hideCart from './hideCart';
import addCartItem from './addCartItem';
import setCartValues from './setCartValues';
import clearCart from './clearCart';
import removeProduct from './removeProduct';

const app = products => {
   const searchInput = document.querySelector('.search');
   const companies = document.querySelectorAll('.brand-filter__company');
   const cartButton = document.querySelector('.cart-button');
   const closeCartElements = document.querySelectorAll('.cart__close, .cart__overlay');
   const clearCartButton = document.querySelector('.button__btn--clear-cart');
   const productsList = document.querySelector('.products__list');
   const cartProductsList = document.querySelector('.cart__products__list');

   let term = '';
   let brand = 'All';
   let cart = [];
   let buttonsDOM = [];

   const getBuyButtons = () => {
      const buttons = [...document.querySelectorAll('.button__btn--products-buy')];
      buttonsDOM = buttons;
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
      if (searchProducts.length === 0) {
         const products = [...productsList.children];
         products.forEach(product => {
            product.style.display = 'none';
         });
      }
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
      cart = clearCart(cart, buttonsDOM);
   });

   cartProductsList.addEventListener('click', event => {
      if (event.target.classList.contains('cart__remove-item')) {
         const removeItem = event.target;
         const id = removeItem.dataset.id;
         if (removeItem.parentNode.parentNode) {
            removeItem.parentNode.parentNode.removeChild(removeItem.parentNode);
         }
         cart = removeProduct(id, cart, buttonsDOM);
      } else if (event.target.classList.contains('cart__item-plus')) {
         const addAmount = event.target;
         const id = addAmount.dataset.id;
         const tempItem = cart.find(item => item.id === id);
         tempItem.amount = tempItem.amount + 1;
         setCartValues(cart);
         addAmount.previousElementSibling.innerText = tempItem.amount;
      } else if (event.target.classList.contains('cart__item-minus')) {
         const lowerAmount = event.target;
         const id = lowerAmount.dataset.id;
         const tempItem = cart.find(item => item.id === id);
         tempItem.amount = tempItem.amount - 1;
         setCartValues(cart);
         lowerAmount.nextElementSibling.innerText = tempItem.amount;
         if (tempItem.amount > 0) {
            setCartValues(cart);
         } else {
            cartProductsList.removeChild(lowerAmount.parentNode.parentNode.parentNode);
            removeProduct(id, cart, buttonsDOM);
         }
      }
   })

   getBuyButtons();
}

export default app;