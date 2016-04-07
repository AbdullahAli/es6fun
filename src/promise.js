"use strict";

import Promise from "bluebird";

var iPromoseyou = ()=> {
    return new Promise((resolve, reject) => {
        console.log("I promise I will... ");
        resolve();
    });
};

var eatChicken = ()=> {
    return new Promise((resolve, reject) => {
        console.log("eat all then chicken ;) ");
        resolve();
    });
};

var willNotEatSpicyChicken = ()=> {
    return new Promise((resolve, reject) => {
        reject();
    });
};

var willNotDrinkPizza = ()=> {
    const up = "pizza, chips, rat, lemons";

    throw up;
};

iPromoseyou()
    .then(eatChicken)
    .then(willNotEatSpicyChicken)
    .then(willNotDrinkPizza)
    .catch(()=> { console.log("no spicy food");})
    .finally(() => {console.log("done done done");});
