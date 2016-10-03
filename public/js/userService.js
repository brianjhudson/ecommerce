angular.module("mainApp").service("userService", function($http) {
  const userUrl = "/api/users";

  this.getUser = () => {
    return $http.get(userUrl).then(result => {
      return result.data[0];
    })

  }
  this.addToCart = (userId, productId) => {
    return $http.post(userUrl + "/" + userId, {item: productId, quantity: 1}).then(result => {
      return result;
    });
  };

})
