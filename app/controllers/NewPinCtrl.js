"use strict";

app.controller("NewPinCtrl", function($scope, PinFactory, $location, AuthFactory){

	let user = AuthFactory.getUser();

	$scope.btnText = "Create";
	$scope.btnText = "Cancel";
	$scope.newText = {};

	$scope.newTask = {
		uid: "",
		boardid: "",
		url: "",
		title: ""
	};

	$scope.addNewPin = function(){
		PinFactory.saveNewPin($scope.newTask)	//ask Dean about his saveNewPin ***and what is newTask
		.then(function(response){
			$location.url("");
		});

		$scope.newTask = {};
	};
});