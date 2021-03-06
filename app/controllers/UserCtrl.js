"use strict";

// login, logout, register, loginGoogle, clever conditonal, authfactory
app.controller("UserCtrl", function($scope, $window, $location, AuthFactory){

	$scope.account = {
		email: "",
		password: ""
	};

	var currentUser;

	$scope.logout = () => {
			console.log("logout clicked");
			AuthFactory.logoutUser()
			.then(function(data){
				$scope.isLoggedIn = false;
				console.log("logged out?", data);
				$window.location.href = "#!/login";
				console.log("You should be on the login page!");
			}, function(error){
				console.log("error occured on logout");
			});
	};

	// Creat user function 



	// when first loaded, make sure no one is logged in
	// if(AuthFactory.isAuthenticated()){
	// 	logout();
	// }

	//setup functions to be available to the app for register, login email/password, and google
	$scope.register = () => {
    	console.log("you clicked register");
	    AuthFactory.createUser({
	      email: $scope.account.email,
	      password: $scope.account.password
	    })
	    .then( (userData) => {
	      console.log("UserCtrl newUser:", userData );
	      $scope.login();
	    }, (error) => {
	        console.log("Error creating user:", error);
	    });
  	};

  	$scope.login = () => {
    	console.log("you clicked login");
    	AuthFactory
	    .loginUser($scope.account)
	    .then( () => {

	    	// This determines what page will load based on
	    	// if correct email & password are entered
	    	if ($scope.isLoggedIn === true){
	    		console.log("UserCtrl: user is loggedIn", $scope.isLoggedIn );
	    		$scope.$apply();
	    		$window.location.href = "#!/home";
	    	}else{
	    		$window.location.href = "#!/login";
	    	}	
	    
	    });
	};

	$scope.loginGoogle = () => {
		console.log("you clicked login with Google");
		AuthFactory.authWithProvider()
		.then(function(result) {
			$scope.isLoggedIn = true;
	  //       console.log("UserCtrl: user is loggedIn", $scope.isLoggedIn );
	  //       $scope.$apply();
	    	currentUser = result.user.uid;
	    	console.log("logged in user:", currentUser);
	    	//Once logged in, go to another view
	    	// $location.path("/home");
	    	$window.location.href = "#!/home";
	    	// $scope.$apply();
	    	$window.location.reload(false);
	  	}).catch(function(error) {
	    	// Handle the Errors.
	    	console.log("error with google login", error);
	    	var errorCode = error.code;
	    	var errorMessage = error.message;
	    	// The email of the user's account used.
	    	var email = error.email;
	    	// The firebase.auth.AuthCredential type that was used.
	    	var credential = error.credential;
	    	// ...
	  	});
	};

});
