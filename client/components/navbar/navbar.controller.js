
'use strict';

angular.module('portfolioApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });

/*

/*********************NEW CONTROLLER FROM HERE****************************************//*

'use strict';

angular.module('portfolioApp')
  .controller('NavbarCtrl', function ($scope, $routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'components/navbar/navbar.html',
        hideMenus: true
      })

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });

*/
