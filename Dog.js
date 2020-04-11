var chalk = require('chalk');

function Dog(name) {
    this.name = name;
    this.stomach = [];
}

Dog.prototype.sayHi = function() {
    console.log("Hi! I am a dog. My name is " + chalk.green(this.name));
}

Dog.prototype.eat = function(Cat) {
    this.stomach.push(Cat);
}

module.exports = Dog;