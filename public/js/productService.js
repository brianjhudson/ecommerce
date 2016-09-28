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

  this.updateProduct = (product, field, value) => {
    console.log(field, value);
    const request = {};
    request[field] = value;
    console.log(request);
    return $http.put(baseUrl + "/" + product._id, request).then(result => {
      console.log(result);
      return result;
    })
  };

  this.deleteProduct = product => {
    return $http.delete(baseUrl + "/" + product._id).then(result => {
      return result;
    })
  };

})
