angular.module("mainApp", ["ui.router"])
.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise("shop");
  $stateProvider
    .state("shop", {
      url: "/shop",
      templateUrl: "../views/shop.html"
    })

    .state("admin", {
      url: "/admin",
      templateUrl: "../views/admin.html"
    })

})

$(".button-collapse").sideNav();
