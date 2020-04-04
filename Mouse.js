function Mouse(eyeColor, furColor) {
    this.eyeColor = eyeColor;
    this.furColor = furColor;
    this.stomatch = [];
}

Mouse.prototype.typeMouse = "Mickey";

let mouse1 = new Mouse("Red", "Yellow");
let mouse2 = new Mouse("Black", "White");
