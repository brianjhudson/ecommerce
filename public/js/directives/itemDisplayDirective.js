angular.module("mainApp").directive("itemDisplayDirective", function() {
  return {
    restrict: "AE"
    , scope: {
        product: "="
    }
    , link: function(scope, element, attributes) {

    }
    , templateUrl: "js/directives/itemDisplay.html"
  }
})
