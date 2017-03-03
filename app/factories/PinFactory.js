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



    var getBoards = (userID) => {
        var boards = [];
        console.log("PF userID",  userID);

        return $q((resolve, reject) => {    //put in url from firebase
            $http.get(`${FBCreds.databaseURL}/boards.json?orderBy="uid"&equalTo="${userID}"`)
            .then((boardObj) => {
                var allBoards = boardObj.data;
                Object.keys(allBoards).forEach((key) =>{
                    // Grab the key for boardID
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

   return {getNewPin, saveNewPin, saveNewBoard, getBoards};
});