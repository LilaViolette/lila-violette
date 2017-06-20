// This service is the app's only way to access localstorage
// all database access travels through here
lvsw.factory('DBManagement', DBManagement);

// $rootScope: used to store data in active memory for faster recovery
// store: used to save and retrieve information from the database
DBManagement.$inject = ['$rootScope', 'store'];
function DBManagement($rootScope, store) {
  var service = {};
  return service;
}
