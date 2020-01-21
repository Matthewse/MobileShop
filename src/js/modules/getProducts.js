const getProducts = () => {
   return fetch('../assets/data/data.json')
      .then(response => response.json())
      .then(products => products)
      .catch((err) => {
         console.log('Error: ', err);
      })
};

export default getProducts;