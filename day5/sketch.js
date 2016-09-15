var sketch = function(p) {

    var h;

    p.setup = function() {
        h = 40;
        p.createCanvas(640, 480, p.WEBGL);
        p.ortho(-p.width/2, p.width/2, p.height/3, -p.height/2, -0.1, 100);
    };

    p.draw = function() {
        p.background(30);
        p.rotateX(-p.PI/6);
        p.rotateY(-p.PI/4);

        p.translate(0, 400, 0);
        Diamond(5);
    };

    var Diamond = function(n) {
        p.push();
        for (var i = 0; i < n; ++i) {
            Steps(n);
            p.translate(0, -h, h);
        }
        p.pop();
    };

    var Steps = function(n) {
        p.push();
        for (var i = 0; i < n; ++i) {
            Cube(h);
            p.translate(h, -h, 0);
        }
        p.pop();
    };

    var Cube = function(dim) {
        p.box(dim, dim, dim);
    };
};

var myp5 = new p5(sketch);
