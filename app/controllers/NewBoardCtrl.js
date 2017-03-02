"use strict";

app.controller("NewBoardCtrl", function($scope, PinFactory, $location, AuthFactory){

	let user = AuthFactory.getUser();

	$scope.btnText = "Create";
	$scope.btnText = "Cancel";
	$scope.newText = {};

	$scope.newTask = {
		uid: "",
		title: ""
	};

	$scope.addNewBoard = function(){
		PinFactory.saveNewBoard($scope.newTask)	//ask Dean about his saveNewPin ***and what is newTask
		.then(function(response){
			$location.url("");
		});

		$scope.newTask = {};
	};
});