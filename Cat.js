function Cat() {
    this.color = "Blue";
    this.weight = 20;
    this.stomach = [];
}

Cat.prototype.eat = (mouse) => {
    this.stomach.push(mouse);
};

module.exports = Cat;