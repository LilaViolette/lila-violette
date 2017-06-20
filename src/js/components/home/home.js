lvsw.controller("HomeCtrl", HomeCtrl);

// $scope: used to access scope vars and functions from the template, home.html
// $rootScope: used to save and retrieve sevents, sevent index, and tab info
HomeCtrl.$inject = ['$scope','$rootScope','Resume'];
function HomeCtrl($scope, $rootScope, Resume) {

  // scope vars
  $scope.tabs = [
    { title : "Resume",
      template : "components/home/tabs/resume.html",
      active : true },
    { title : "Works",
      template : "components/home/tabs/works.html",
      active : false }
  ];

  $scope.data = { introduction : {}, resume : {}, works : {} };

  $scope.data.works.categories = [
    { name : "Simple Programs" },
    { name : "Database Projects" },
    { name : "Web and Phone Applications" }
  ];

  $scope.data.resume = Resume.getResumeObject();
}
