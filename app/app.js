"use strict";

var app = angular.module("Pinterest", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: "partials/home.html",
		controller: "controllers/initialCtrl.js"
	});
});