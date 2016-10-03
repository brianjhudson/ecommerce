angular.module("mainApp").directive("itemDisplayDirective", function() {
  return {
    restrict: "AE"
    , replace: true
    , scope: {
        product: "="
    }
    , templateUrl: "js/directives/itemDisplay.html"
  }
})
