var chalk = require('chalk');

function Dog(name) {
    this.name = name
}

Dog.prototype.sayHi = function() {
    console.log("Hi! I am a dog. My name is " + chalk.green(this.name));
}

module.exports = Dog;