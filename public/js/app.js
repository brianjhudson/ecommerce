angular.module("mainApp", ["ui.router"])
.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "../views/home.html"
    })

    .state("shop", {
      url: "/shop",
      templateUrl: "../views/shop.html" 
    })

    .state("admin", {
      url: "/admin",
      templateUrl: "../views/admin.html"
    })

})
