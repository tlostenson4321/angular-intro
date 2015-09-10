angular.module('myApp', [])

var mainController = function($scope){
	$scope.button = function(event){
		
		return console.log('pushed')
	}
}

