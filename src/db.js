"use strict";

var Promise = require("bluebird");
var mongoose = require("mongoose");

var FullContactProfile;

var MONGO_URL = "mongodb://localhost:27017/es6"

var _connect = function() {
    var fullContactSchema = mongoose.Schema({
        "email"        : String,
        "lastImported" : String
  });

  FullContactProfile = mongoose.model('FullContactProfile', fullContactSchema);

    return new Promise(function(resolve, reject) {
        mongoose.connect(MONGO_URL);
        mongoose.connection.once("open", resolve);
        mongoose.connection.on("error", reject);
    });
};

var getPersons = function() {
    return new Promise(function(resolve, reject) {
        FullContactProfile.find(function (err, profiles) {
                if(err) {
                    reject(err);
                } else {
                    resolve(profiles);
                }
            }
        );
    });
};

_connect()
    .then(getPersons)
    .then(function(profiles) {
      console.log(">> " + profiles)
    })
    .catch(function(err) {console.log(err)})
    .finally(function() {
      mongoose.connection.close();
    });
