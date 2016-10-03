angular.module("mainApp").controller("productController", function($scope, productService, userService){

  function init() {
    $scope.modalOpen = false;
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

  $scope.viewItem = product => {
    $scope.viewedItem = product;
    $scope.modalOpen = true;
  }

  $scope.closeModal = () => {
    $scope.viewedItem = {};
    $scope.modalOpen = false;
  }

  $scope.addToCart = productId => {
    userService.addToCart($scope.user._id, productId).then(result => {

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
