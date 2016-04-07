//https://github.com/lukehoban/es6features

"use strict";

import ImportTest from "./anotherFile";
ImportTest();

class Chicken {
    constructor(name) {
        this.name = name;
    }
}

class ChickenSon extends Chicken {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}

const chicken = new Chicken("nandos");
let son = new ChickenSon("nandos", 12);

[chicken, son].forEach((chick) => {
    console.log(chick.name);
});

var poo = (x=1) => {
    console.log(x);
};

son = chicken;

poo();
poo(12);
console.log("chicken -> name: ${chicken.name}");
console.log("son-> name: ${chicken.name}, age: ${son.age}");
