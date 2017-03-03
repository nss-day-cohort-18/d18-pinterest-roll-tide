"use strict";

app.controller("NewPinCtrl", function($scope, PinFactory, $location, AuthFactory){

	let user = AuthFactory.getUser();

	$scope.btnText = "Create";
	$scope.btnText = "Cancel";
	$scope.newText = {};

	$scope.boards = [];

	$scope.newPin = {
		uid: "",
		boardid: "",
		url: "",
		title: "",
		description: ""
	};

	$scope.addBoardIDToPin = function(board) {
		$scope.newPin.boardid = board.id;
		console.log("NewPinCtrl addboard: ", $scope.newPin.boardid);
	};


	PinFactory.getBoards(user)
	.then( function(boardCollection){
		$scope.boards = boardCollection;
	});

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