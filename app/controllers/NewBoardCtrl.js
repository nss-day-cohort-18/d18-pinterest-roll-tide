"use strict";

app.controller("NewBoardCtrl", function($scope, PinFactory, $location, AuthFactory){

	let user = AuthFactory.getUser();

	$scope.btnText = "Create";
	$scope.btnText2 = "Cancel";
	$scope.newText = {};

	$scope.newBoard = {
		uid: "",
		title: "",
		description: ""
	};

	$scope.addNewBoard = function(){
		$scope.newBoard.uid = user;
		console.log("user: ",  $scope.newBoard);
		PinFactory.saveNewBoard($scope.newBoard)	//ask Dean about his saveNewPin ***and what is newTask
		.then(function(response){
			$location.url("/home");
		});

		$scope.newTask = {};
	};

});