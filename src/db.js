"use strict";
//
// import mongoose from "mongoose";
// import Promise from "bluebird";
// import Person from "./schema/person";

var Promise = require("bluebird");


var mongoose = require("mongoose");

Promise.promisifyAll(mongoose);


var FullContactProfile;

var MONGO_URL = "mongodb://localhost:27017/es6"

// var _setupModel = ()=> {
//     return mongoose.model("Person", {
//         name  : String,
//         title : String,
//     }
// };
// mongoose.set('debug', true);

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

var insertPerson = function() {
    var arvind = new FullContactProfile({
        "email" : 'abdu@a.com',
        "lastImported" : (new Date()).toISOString()
    });

    arvind.save(function (err, data) {
        if (err) console.log(err);
        else console.log('Saved : ', data );
    });
};

var getPersons = function() {
    return new Promise(function(resolve, reject) {
        console.log("exec");
        FullContactProfile.findAsync(function (err, profiles) {
                if(err) {
                    console.log("err");

                    reject(err);
                } else {
                    resolve(profiles);
                }
            }
        );
    });
};

_connect()
    .then(function() {
      console.log("connected");
    })
    // .then(insertPerson)
    .then(getPersons)
    .then(function(profile) {
        console.log(JSON.stringify(profile));
    })

    // .then(mongoose.connection.closeAsync());

    // If the Node process ends, close the Mongoose connection
    process.on('SIGINT', function() {
      mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
      });
    });
