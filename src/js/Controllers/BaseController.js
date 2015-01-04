function BaseController($scope, _, bucket) {
	$scope.ui = {
    inputFocused: false,
    bucketLookup: ''
  };

  $scope.checkNameValidity = _.debounce(function(newValue, oldValue) {
    console.log(newValue);
  }, 500); /* half second */

  $scope.$watch(
    'ui.bucketLookup',
    $scope.checkNameValidity
  );
}

BaseController.$inject = ['$scope', '_', 'bucket'];


angular.module('controllers')
	.controller('BaseController', BaseController);

