angular.module("mainApp", ["ui.router"])
.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise("home");
  $stateProvider
    .state("home", {
      url: "/home",
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

$(".button-collapse").sideNav();
$('.carousel.carousel-slider').carousel({full_width: true});
