"use strict";

app.factory("AuthFactory", function($window){

	// currentUser, createUser, loginUser, logoutUser, isAuthenticated getUser

	var currentUser = null;

	var createUser = function(userObj){
		return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
		.catch( function(error){
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log("error:", errorCode, errorMessage);
		});
	};

	var loginUser = function(userObj) {
		return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
		.catch( function(error){
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log("error:", errorCode, errorMessage);
		});
	};

	var logoutUser = function(){
		console.log("logoutUser");
		return firebase.auth().signOut();
	};


	var isAuthenticated = function (){
		console.log("AuthFactory: isAuthenticated");
		return new Promise ( (resolve, reject) => {
			firebase.auth().onAuthStateChanged( (user) => {
				if (user){
					currentUser = user.uid;
					console.log("isAuthenticated currentUser",  currentUser);
					resolve(true);
				}else {
					resolve(false);
				}
			});
		});
	};

	var getUser = function(){
		return currentUser;
	};


	var provider = new firebase.auth.GoogleAuthProvider();

	var authWithProvider= function(){
    	return firebase.auth().signInWithPopup(provider);
  	};

	return {createUser, loginUser, logoutUser, isAuthenticated, getUser, authWithProvider};
});

