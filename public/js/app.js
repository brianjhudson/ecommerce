angular.module("mainApp", ["ui.router", "ui.materialize"])
.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise("shop");
  $stateProvider
    // .state("home", {
    //   url: "/home",
    //   templateUrl: "../views/home.html"
    // })

    .state("shop", {
      url: "/shop",
      templateUrl: "../views/shop.html"
    })

    .state("admin", { 
      url: "/admin",
      templateUrl: "../views/admin.html"
    })

    .state("cart", {
      url: "/cart",
      templateUrl: "../views/cart.html"
    })

})
