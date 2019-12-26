const filter = (products, company) => {
   if (company === 'All') {
      return products;
   }

   return products.filter(product => {
      return product.company === company;
   });
}

export default filter;