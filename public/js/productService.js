angular.module("mainApp").service("productService", function($http) {
  const baseUrl = "/api/products";
  this.getProducts = () => {
    return $http.get(baseUrl).then(function(products) {
      return products;
    })
  };

  this.postProduct = product => {
    return $http.post(baseUrl, product).then(result => {
      return result;
    })
  };

  this.updateProduct = (product, update) => {
    return $http.put(baseUrl + "/" + product.id, update).then(result => {
      return products;
    })
  };

  this.deleteProduct = product => {
    return $http.delete(baseUrl + "/" + product._id).then(result => {
      return result;
    })
  };

})
