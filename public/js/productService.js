angular.module("mainApp").service("productService", function($http) {
  const productUrl = "/api/products";
  const orderUrl = "/api/orders"


  this.getProducts = () => {
    return $http.get(productUrl).then(function(products) {
      return products;
    })
  };

  this.getOrders = () => {
    return $http.get(orderUrl).then(function(orders) {
      return orders;
    })
  };

  this.postProduct = product => {
    return $http.post(productUrl, product).then(result => {
      return result;
    })
  };

  this.updateProduct = (product, field, value) => {
    const request = {};
    request[field] = value;
    return $http.put(productUrl + "/" + product._id, request).then(result => {
        return result;
    })
  };

  this.deleteProduct = product => {
    return $http.delete(productUrl + "/" + product._id).then(result => {
      return result;
    })
  };

  this.addToCart = product => {
    return $http.post(userUrl + "/" + user._id, product);
  }

})
