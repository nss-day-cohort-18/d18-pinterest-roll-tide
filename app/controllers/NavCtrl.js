"use strict";

app.controller("NavCtrl", function($scope, $window) {

	// This is to hide login/register
	// Will need later editing

	// Registers if user is logged in or not
	// $scope.isLoggedIn = false;

	firebase.auth().onAuthStateChanged(function(user){
		if (user) {
		    $scope.isLoggedIn = true;

		}else{
		    $scope.isLoggedIn = false;
		    $window.locationhref = "#!/login";
		}
	});
});