angular.module("mainApp", ["ui.router", "ui.materialize"])
.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise("shop");
  $stateProvider

    .state("shop", {
      url: "/shop",
      templateUrl: "../views/shop.html"
    })

    .state("product", {
      url: "/product",
      templateUrl: "../views/product.html"
    })

    .state("admin", {
      url: "/admin",
      templateUrl: "../views/admin.html"
    })

    .state("cart", {
      url: "/cart",
      templateUrl: "../views/cart.html"
    })

    .state("orders", {
      url: "/orders",
      templateUrl: "../views/orders.html"
    })
})
