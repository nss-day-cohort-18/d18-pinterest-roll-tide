"use strict";

app.controller("BoardCtrl", function ($scope,AuthFactory, PinFactory) {
	
	var user = AuthFactory.getUser();

	PinFactory.getBoards(user)
	.then(function(boardCollection){
		$scope.boards = boardCollection;
	});

});