angular.module('myApp', [])
angular.module('myApp')

var mainController = function($scope){
	
	$scope.button = function(){
		$scope.hide = function(){

		}
	}
	$scope.button2 = function() {
		$scope.show = function() {

		}
	
	}
}

angular.module('myApp').controller('mainController', ['$scope', mainController])