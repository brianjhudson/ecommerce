angular.module("mainApp").controller("productController", function($scope, productService){
  $scope.test = "Test";
  $scope.serviceTest = productService.test;

})
