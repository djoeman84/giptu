function BaseController($scope, _, Bucket) {
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

BaseController.$inject = ['$scope', '_', 'Bucket'];


angular.module('controllers')
	.controller('BaseController', BaseController);

