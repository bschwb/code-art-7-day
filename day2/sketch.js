var factor;
var maxn;
var minn;
var n;
function setup() {
    createCanvas(640, 480, WEBGL);
    ortho(-width/2, width/2, height/2, -height/2, 0.1, 100);

    maxn = 9;
    minn = 1;
    n = minn;
    factor = 1;
}

function draw() {
    background(30);

    ambientLight(150);
    pointLight(200, 200, 200, 0, 0, 0);

    if (frameCount % 20 == 0) {
        n = n + factor;
        console.log(n);
    }

    worm(n);

    if (n <= minn) {
        factor = 1;
    } else if (n >= maxn - 1) {
        factor = -1;
    }
}

function worm(n) {
    var from = color(0, 80, 80);
    var to = color(0, 120, 0);

    var incline = -0.3;

    var minh = 20;
    var h = minh;
    var y = h + 0.5 * minh;

    for (var i = 1; i <= n; ++i) {
        var grad = 1 / maxn;
        var c = lerpColor(from, to, (i-1) * grad);

        push();
        translate(0, -200 + y, 0);
        rotateX(incline);
        rotateY(frameCount * 0.01);
        ambientMaterial(c);
        box(150, h, 150);
        pop();
        y += h + 0.5 * minh;
    }
}
