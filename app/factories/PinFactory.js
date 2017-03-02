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
            $http.post(`${FBCreds.databaseURL}*url will go here*`,
                JSON.stringify(newPin))
            .then((FBObject)=> {
                resolve(FBObject);
            })
            .catch((error) =>{
                reject(error);
            });
        });
    };

    return {getNewPin, saveNewPin};
});