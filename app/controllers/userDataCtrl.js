

// "use strict";
// /*********************************
// -Get userlistCtrl
// *********************************/

// app.controller("UserDataCtrl", function($scope, ItemStorage, SearchTermData, AuthFactory){
//     console.log("UserDataCtrl");


//     let user = AuthFactory.getUser();

//     PinFactory.getBoardList(user)
//   	 .then(function(boardCollection){
//   		$scope.item = boardCollection;

//     PinFactory.getBoardList(user)
//       .then(function(pinCollection){
//         $scope.item = pinCollection;

"use strict";
/*********************************
-Get userlistCtrl
*********************************/

app.controller("UserDataCtrl", function($scope, ItemStorage, SearchTermData, AuthFactory, PinFactory){
    console.log("UserDataCtrl");

    $scope.searchText = SearchTermData;
    let user = AuthFactory.getUser();

    PinFactory.getBoardList(user)
       .then(function(boardCollection){
          $scope.item = boardCollection;
      });

    PinFactory.getBoardList(user)
      .then(function(pinCollection){
        $scope.item = pinCollection;
    });

});

