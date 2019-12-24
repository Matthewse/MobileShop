const filter = (products, company = false) => {
   if (company === 'All') {
      return products;
   }

   return products.filter(product => {
      return product.company === company;
   });
}

export default filter;