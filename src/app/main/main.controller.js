'use strict';

class MainCtrl {
  constructor ($scope) {
    $scope.hello = "world";
  }
}

MainCtrl.$inject = ['$scope'];

export default MainCtrl;
