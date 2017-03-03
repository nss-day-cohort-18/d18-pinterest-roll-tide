"use strict";

app.controller("NewPinCtrl", function($scope, PinFactory, $location, AuthFactory){

	let user = AuthFactory.getUser();

	$scope.btnText = "Create";
	$scope.btnText = "Cancel";
	$scope.newText = {};

	$scope.newPin = {
		uid: "",
		boardid: "",
		url: "",
		title: "",
		description: ""
	};

	$scope.addNewPin = function(){
		$scope.newPin.uid = user;
		console.log(user);
		PinFactory.saveNewPin($scope.newPin)	//ask Dean about his saveNewPin ***and what is newTask
		.then(function(response){
			$location.url("/create-pin");
		});

		$scope.newTask = {};
	};
});