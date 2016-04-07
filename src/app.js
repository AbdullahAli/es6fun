"use strict"

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
const son = new ChickenSon("nandos", 12)

console.log("chicken -> name: ${chicken.name}");
console.log("son-> name: ${chicken.name}, age: ${son.age}");
