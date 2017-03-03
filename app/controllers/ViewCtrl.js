"use strict";

app.controller("ViewCtrl", function($scope, $routeParams, PinFactory, AuthFactory, $window){
	
	// let pinId = $routeParams.pinId;

	// $scope.pins = [];

	// let user = AuthFactory.getUser();
	// console.log("ViewCtrl user", user);

	// PinFactory.getPinList(user)
	// .then(function(pinCollection) {
	// 	$scope.pins = pinCollection;
	// 	console.log("ViewCtrl pinCollection", pinCollection);

	// 	$scope.selectedpin = $scope.pins.filter(function(pin){
	// 		return pin.id === $routeParams.pinId;
	// 		console.log("ViewCtrl pin.id", pin.id);
	// 	})[0];
	// });

	$scope.getPin = function(){
		$window.location.url = "#!/pinView";
	};
	
});