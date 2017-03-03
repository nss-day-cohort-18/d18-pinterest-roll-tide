"use strict";

var app = angular.module("Pinterest", ["ngRoute"]);

let isAuth = (AuthFactory) => new Promise ( (resolve, reject) => {
  // console.log("running isAuth");
    AuthFactory.isAuthenticated()
    .then ( (userExists) => {
    console.log("userExists", userExists);
        if (userExists){
      console.log("Authenticated, go ahead.");
            resolve();
        }else {
      console.log("Authentication rejected, go away.");
            reject();
        }
    });
});


app.config(function($routeProvider) {
	$routeProvider.
	// Make a splash page
	when('/', {
		templateUrl: "partials/splash.html",
		controller: "UserCtrl"
        
	}).
	when('/login', {
		templateUrl: "partials/login.html",
		controller: "UserCtrl"
        
	}).
	when('/home', {
		templateUrl: "partials/home.html",
		controller: "UserCtrl",
        resolve: {isAuth}
	}).
	when('/profile', {
		templateUrl: "partials/profile.html",
		controller: "UserCtrl",
        resolve: {isAuth}
	}).
    when('/boards', {
        templateUrl: "partials/boards.html",
        controller: "BoardCtrl",
        resolve: {isAuth}
    }).
    when('/boards/{{board.title}}', {
        templateUrl: "partials/",
        controller: "",
        resolve: {isAuth}
    }).
    when('/create-board', {
        templateUrl: "partials/createboard.html",
        controller: "NewBoardCtrl",
        resolve: {isAuth}
    }).
    when('/create-pin', {
        templateUrl: "partials/createPin.html",
        controller: "NewPinCtrl",
        resolve: {isAuth}
    });
    .when('/pins/:uid', {
      templateUrl: 'partials/pinView.html',
      controller: 'ViewCtrl',
      resolve: {isAuth}
    });
});


app.run(($location, FBCreds) =>{
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.apiKey,
        authDomain: creds.authDomain,
        databaseURL: creds.databaseURL
    };


    firebase.initializeApp(authConfig);
});
