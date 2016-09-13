var h = 100;
var w;
var sign = -1;
var frontColor;
var backColor;
var currentColor;

function setup() {
    createCanvas(640, 480);
    strokeWeight(8.0);
    strokeJoin(ROUND);
    noFill();
    frontColor = color(0, 130, 130);
    backColor = color(0, 110, 110);
    currentColor = frontColor;
    w = widthOfHeight(h);
}

function draw() {
    background(30);
    push();
    translate(width/2, height/2);
    stroke(currentColor);
    w = w + sign;
    if (w <= 0) {
        sign = 1;
        if (currentColor == frontColor) {
            currentColor = backColor;
        }
        else if (currentColor == backColor) {
            currentColor = frontColor;
        }
    }
    if (w >= widthOfHeight(h)) {
        sign = -1;
    }
    isosceles(w, h);
    pop();
}

function isosceles(w, h) {
    triangle(0, -h, -w/2.0, 0, w/2.0, 0);
}

function widthOfHeight(h) {
    return floor(2 * h / tan(PI/3.0));
}
