angular.module('myApp', []);
angular.module('myApp')

angular.module('myApp').controller('mainController', ['$scope', function($scope){    
	$scope.paragraph = 'pink';
	$scope.excite = function(){
		return + '!'
	}

}])















// angular.module('myApp').controller('mainController', ['$scope', mainController])