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
		templateUrl: "partials/login.html",
		controller: "UserCtrl"
	}).
	when('/login', {
		templateUrl: "partials/login.html",
		controller: "UserCtrl"
	}).
	when('/home', {
		templateUrl: "partials/home.html",
		controller: "UserCtrl"
	}).
	when('/profile', {
		templateUrl: "partials/profile.html",
		controller: "UserCtrl"
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
