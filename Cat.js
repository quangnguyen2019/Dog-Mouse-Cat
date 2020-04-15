let Mouse = require('./Mouse');

function Cat() {
    this.color = "Blue";
    this.weight = 20;
    this.stomach = [];
}

Cat.prototype.eat = function(animal) {
    if (animal instanceof Mouse) {
        this.stomach.push(animal);
    }
    else {
        throw Error(' Cat can only eat mouse! ');
    }
};

module.exports = Cat;