var lvsw = angular.module("lvsw", [
  'mm.foundation',
  'ngRoute',
  'angular-storage',
]);

lvsw.controller("lvswCtrl", lvswCtrl);

// $scope: used to allow index.html to access scope vars and functions
// $rootScope: used to retrieve info to display on the topbar
lvswCtrl.$inject = ['$scope', '$rootScope'];
function lvswCtrl($scope, $rootScope) {

}
