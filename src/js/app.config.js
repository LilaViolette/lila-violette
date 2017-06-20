lvsw.config(config);

// $routeProvider: used to control routing
config.$inject = ['$routeProvider'];
function config($routeProvider) {
$routeProvider
  .when('/',       { redirectTo:'/home' })
  .when('/home',   {
    templateUrl: 'components/home/home.html',
    controller:  'HomeCtrl',
    controllerAs:'ctrl'
  })
  .otherwise({redirectTo:'/'});
}
