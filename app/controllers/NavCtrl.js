"use strict";

app.controller("NavCtrl", function($scope, $window, SearchTermData) {

	// This is to hide login/register
	// Will need later editing

	// Registers if user is logged in or not
	$scope.isLoggedIn = false;
	$scope.searchText = SearchTermData;
	firebase.auth().onAuthStateChanged(function(user){
		if (user) {
		    $scope.isLoggedIn = true;
		}else{
		    $scope.isLoggedIn = false;
		    $window.locationhref = "#!/login";
		}
	});
});