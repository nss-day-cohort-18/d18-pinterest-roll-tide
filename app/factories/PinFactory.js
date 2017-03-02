"use strict";

app.factory('PinFactory', (AuthFactory, $q, $http, FBCreds) => {
	
	var user = AuthFactory.getUser();

	var getNewPin = () => {
		var pins = [];
		return $q((resolve, reject) => ){	//put url from firebase
			$http.get(`{FBCreds.databaseURL}*url will go here*`)
			.then((pinObj) => {
				var 
			})
		};
	};
});