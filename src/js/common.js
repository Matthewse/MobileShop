import getProducts from './modules/getProducts';
import displayProducts from './modules/displayProducts';

getProducts()
.then(products => {
   displayProducts(products);
});