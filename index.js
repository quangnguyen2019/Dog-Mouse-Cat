let Dog = require("./Dog");
let Cat = require("./Cat");
let Mouse = require("./Mouse");

let dog = new Dog('Bugger');
let Tom = new Cat();
let mouse = new Mouse("red", "yellow");

dog.sayHi();
dog.eat(Tom);

try {
    Tom.eat(mouse);
} catch {
    console.log("Error while cat eating a dog");
}
console.log(Tom);