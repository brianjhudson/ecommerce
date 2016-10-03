angular.module("mainApp").controller("productController", function($scope, $state, productService, userService){

  function init() {
    getProducts();
    getUser();
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
    });
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
