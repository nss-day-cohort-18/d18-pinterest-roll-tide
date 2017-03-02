"use strict";

app.factory('PinFactory', (AuthFactory, $q, $http, FBCreds) => {

    var user = AuthFactory.getUser();

    var getNewPin = () => {
        var pins = [];

        return $q((resolve, reject) => {    //put in url from firebase
            $http.get(`{FBCreds.databaseURL}*url will go here*`)
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
                JSON.stringify(newPin))
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
                JSON.stringify(newBoard))
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
    $http.get(`${FBCreds.databaseURL}/items.json?orderBy="uid"&equalTo="${user}"`)
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



    return {getNewPin, saveNewPin, saveNewBoard, getItemList, getBoardList};
});

 var getBoards = (userID) => {
        var pins = [];

        return $q((resolve, reject) => {    //put in url from firebase
            $http.get(`{FBCreds.databaseURL}`)
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
   return {getNewPin, saveNewPin, saveNewBoard, getPinList, getBoardList, getBoards};
});
});


