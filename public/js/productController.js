angular.module("mainApp").controller("productController", function($scope, productService){

  function init() {
    getProducts();
  }

  function getProducts() {
    productService.getProducts().then(function(result) {
      $scope.products = result.data;
    });
  }

  $scope.updateProduct = product => {
    productService.updateProduct(product).then(function(result) {
      console.log(result);
      getProducts();
    });
  };

  $scope.deleteProduct = product => {
    productService.deleteProduct(product).then(function(result) {
      getProducts();
    });
  };

  $scope.postProduct = newProduct => {
    console.log(newProduct);
    productService.postProduct(newProduct).then(function(result) {
      console.log(result);
      getProducts();
    })
  };

  init();

});
