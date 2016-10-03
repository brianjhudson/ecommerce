angular.module("mainApp").controller("productController", function($scope, $state, productService, userService){

  function init() {
    getProducts();
    getUser();
    getOrders();
  }

  function getOrders() {
    productService.getOrders().then(function(result) {
      $scope.orders = result.data;
    })
  }

  function getProducts() {
    productService.getProducts().then(function(result) {
      $scope.products = result.data;
    });
  }

  function getUser() {
    userService.getUser().then(function(result) {
      $scope.user = result;
  });
  }

  $scope.viewProduct = product => {
    $scope.selectedProduct = product;
    $state.go("product");
  }

  $scope.addToCart = () => {
    userService.addToCart($scope.user._id, $scope.selectedProduct._id, $scope.selectedProduct.size, $scope.selectedProduct.quantity).then(result => {
      getUser();
      $state.go("cart");

    });
  };

  $scope.updateCart = (item) => {
    userService.updateCart($scope.user._id, item.item._id, item.size, item.quantity).then(result => {
      userService.getUser().then(result => {
        $state.go("cart");

      })
    });
  };

  $scope.placeOrder = () => {
    userService.placeOrder($scope.user._id).then(result => {
      userService.getUser().then(result => {
        $state.go("orders")
      })
    })
  };

  $scope.updateProduct = (product, field, value) => {
    productService.updateProduct(product, field, value).then(function(result) {
      getProducts();
    });
  };

  $scope.deleteProduct = product => {
    productService.deleteProduct(product).then(function(result) {
      getProducts();
    });
  };

  $scope.postProduct = newProduct => {
    productService.postProduct(newProduct).then(function(result) {
      getProducts();
    })
  };

  init();

});
