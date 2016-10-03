angular.module("mainApp").service("userService", function($http) {
  const userUrl = "/api/users";

  this.getUser = () => {
    return $http.get(userUrl).then(result => {
      return result.data[0];
    })

  }
  this.addToCart = (userId, productId, size, quantity) => {
    return $http.post(userUrl + "/" + userId, {item: productId, size: size, quantity: quantity}).then(result => {
      return result;
    });
  };

})
