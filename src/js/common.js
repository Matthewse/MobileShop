import getProducts from './modules/getProducts';
import displayProducts from './modules/displayProducts';
import app from './modules/app';

getProducts()
   .then(products => {
      displayProducts(products);
      app(products);
   });