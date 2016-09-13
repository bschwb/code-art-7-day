function setup() {
    createCanvas(640, 480, WEBGL);
}

function draw() {
    background(30);

    ambientLight(150);
    pointLight(120, 120, 120, -300, 300, 300);


    translate(0, 0, -150);
    rotateY(PI/4);
    push();
    var n = 12;
    var offset = PI/n;
    ambientMaterial(0, 130, 130);
    rotateY(frameCount * 0.01);
    // rotateZ(offset);
    rotateZ(offset + frameCount * 0.01);
    // rotateZ(frameCount * 0.01);
    ring(n, 250);
    pop();

    push();
    rotateY(PI/2 + frameCount * 0.01);
    rotateZ(PI/2);
    rotateZ(frameCount * 0.01);
    ring(n, 250);
    pop();
}


function ring(n, radius) {
    for (var i = 0; i < n; ++i) {
        push();
        var step = [0, 0.33, 0.66, 1, 0.66, 0.33, 0, 0.33, 0.66, 1, 0.66, 0.33];
        var angle = TWO_PI / n;
        translate(radius * cos(i * angle), radius * sin(angle * i), 0);
        var from = color(0, 130, 130);
        var to = color(130, 50, 0);
        var c = lerpColor(from, to, step[i]);
        ambientMaterial(c);
        sphere(20);
        pop();
    }
}
