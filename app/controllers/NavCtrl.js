"use strict";

app.controller("NavCtrl", function($scope, $window, SearchTermData, AuthFactory) {

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



	$scope.filterUser = function() {
		AuthFactory.isAuthenticated().
		then( (userExists) => {
			console.log("NavCtrl user",  userExists);
				if (userExists) {
					console.log("LoggedIn");
				    $scope.isLoggedIn = true;
				    $window.location.href = "#!/home";

				}else{
					console.log("notLoggedIn");
				    $scope.isLoggedIn = false;
				    $window.location.href = "#!/";
				}
		});
	};

});
