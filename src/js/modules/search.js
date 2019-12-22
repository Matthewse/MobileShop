const search = (products, term) => {
   return products.filter(product => {
      return product.title
         .toLowerCase()
         .indexOf(term.toLowerCase()) > -1;
   });
}

export default search;