angular.module("mainApp").controller("productController", function($scope, productService){

  function init() {
    getProducts();
  }

  function getProducts() {
    productService.getProducts().then(function(result) {
      $scope.products = result.data;
    });
  }

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
