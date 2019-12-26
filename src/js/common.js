import getProducts from './modules/getProducts';
import app from './modules/app';

getProducts()
.then(products => {
   app(products);
});