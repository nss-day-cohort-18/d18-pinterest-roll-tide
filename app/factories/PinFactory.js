"use strict";

app.factory('PinFactory', (AuthFactory, $q, $http, FBCreds) => {

    var user = AuthFactory.getUser();

    var getNewPin = () => {
        var pins = [];

        return $q((resolve, reject) => {    //put in url from firebase
            $http.get(`{FBCreds.databaseURL}/pins.json`)
            .then((pinObj) => {
                var allPins = pinObj.data;
                Object.keys(allPins).forEach((key) =>{
                    allPins[key].id = key;
                    pins.push(allPins[key]);
                });
                resolve(pins);
            })
            .catch((error)=>{
                reject(error);
            });
        });
    };

    var saveNewPin = (newPin) => {
        return $q((reject, resolve) => {
            $http.post(`${FBCreds.databaseURL}/pins.json`,
                angular.toJson(newPin))
            .then((FBObject)=> {
                resolve(FBObject);
            })
            .catch((error) =>{
                reject(error);
            });
        });
    };

    var saveNewBoard = (newBoard) => {
        return $q((reject, resolve) => {
            $http.post(`${FBCreds.databaseURL}/boards.json`,
                angular.toJson(newBoard))
            .then((FBObject)=> {
                console.log(FBCreds.databaseURL);
                resolve(FBObject);
            })
            .catch((error) =>{
                reject(error);
            });
        });
    };
/*********************************
-Get USER BOARD LIST
*********************************/

    let getBoardList = (user) => {
  let boards = [];
  return $q((resolve, reject) => {
    $http.get(`${FBCreds.databaseURL}/items.json?orderBy="uid"&equalTo="${user}"`)
    .then((itemObject) => {
      let boardCollection = itemObject.data;
      Object.keys(boardCollection).forEach((key) => {
        boardCollection[key].id = key;
        items.push(boardCollection[key]);
      });
      resolve(boards);
      console.log("items", boards);
    })
    .catch((error) => {
      reject(error);
    });
  });
};

/*********************************
-Get USER BOARD LIST
*********************************/
    let getPinList = (user) => {
  let pins = [];
  return $q((resolve, reject) => {
    $http.get(`${FBCreds.databaseURL}/pins.json?orderBy="uid"&equalTo="${user}"`)
    .then((itemObject) => {
      let pinCollection = itemObject.data;
      Object.keys(pinCollection).forEach((key) => {
        pinCollection[key].id = key;
        items.push(pinCollection[key]);
      });
      resolve(pins);
      console.log("items", pins);
    })
    .catch((error) => {
      reject(error);
    });
  });
};



    var getBoards = (userID) => {
        var boards = [];
        console.log("PF userID",  userID);

        return $q((resolve, reject) => {    //put in url from firebase
            $http.get(`${FBCreds.databaseURL}/boards.json?orderBy="uid"&equalTo="${userID}"`)
            .then((pinObj) => {
                var allBoards = pinObj.data;
                Object.keys(allBoards).forEach((key) =>{
                    allBoards[key].id = key;
                    boards.push(allBoards[key]);
                });
                resolve(boards);
            })
            .catch((error)=>{
                reject(error);
            });
        });
    };
   return {getNewPin, saveNewPin, saveNewBoard, getPinList, getBoardList, getBoards};
});
