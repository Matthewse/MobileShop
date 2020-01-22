const checkProductsList = () => {
   const productsList = document.querySelector('.products__list');
   const title = document.querySelector('.products__main-title h1');

   productsList.hasChildNodes() ? title.innerHTML = 'Products' : title.innerHTML = 'No results';
}

export default checkProductsList;