angular.module('myApp', []);
angular.module('myApp')
	.controller('mainController', ['$scope', function($scope){

	// console.log('hello')
	// $scope.mouseenter = function(){
	// 	$scope.hovering = true;
	// }
	// $scope.mouseleave = function(){
	// 	$scope.hovering = false;
	// 	console.log(event)
	// }

	$scope.punctuation = '!'

	$scope.confirm = function(event) {
		confirm ('Would you like to leave this page?') 
		if ($scope.confirm === false) {

				event.preventDefault();
			}
		else {

			}
		}
		
		
	







		}])

















// angular.module('myApp').controller('mainController', ['$scope', mainController])