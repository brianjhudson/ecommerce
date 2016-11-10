angular.module("mainApp").service("userService", function($http) {
  const userUrl = "/api/users";
  const orderUrl = "/api/orders"

  this.getUser = () => {
    return $http.get("/user").then(result => {
      return result;
    })

  }
  this.addToCart = (userId, productId, size, quantity) => {
    return $http.post(userUrl + "/" + userId, {item: productId, size: size, quantity: quantity}).then(result => {
      return result;
    });
  };

  this.updateCart = (userId, productId, size, quantity) => {
    return $http.put(userUrl + "/" + userId + "?" + "qty=" + quantity + "&itemId=" + productId + "&size=" + size).then(result => {
      return result;
    })
  };

  this.placeOrder = (userId) => {
    return $http.post(orderUrl + "/" + userId).then(result => {
      return result;
    })
  }

})
