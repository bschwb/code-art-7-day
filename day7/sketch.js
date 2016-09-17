// Inspiration: http://imgur.com/a/lEDmF

var sketch = function(p) {

    p.setup = function() {
        p.createCanvas(640, 480, p.WEBGL);
        p.ortho(-p.width/2, p.width/2, p.height/2, -p.height/2, 0.1, 100);
    };

    p.draw = function() {
        p.background(30);
        p.pointLight(240, 240, 240, -100, -100, 100);
        p.rotateX(-p.PI/12);
        p.rotateY(-p.PI/6);

        var width = 60;
        var gap = 2*width;

        p.ambientLight(100);
        p.ambientMaterial(0, 130, 130);
        p.rotateZ(p.PI/4);
        Cage(width, gap);

        var rad = gap + 4*width;

        p.ambientMaterial(0, 160, 130);
        var radPerSecond = p.PI;
        var radPerFame = radPerSecond / 60;
        console.log(radPerFame);

        var rotX = true;
        if (p.floor(p.frameCount / 60) % 2 == 0) { rotX = false; }
        if (rotX === true) {
            p.rotateX(p.frameCount * radPerFame);
        } else {
            p.rotateY(p.frameCount * radPerFame);
        }

        Cross(rad, width);
    };

    // Origin in center front();
    var Cross = function(rad, width) {
        p.push();
        p.box(width, rad, width);
        p.push();
        p.translate(-rad/4-width/4, 0, 0);
        p.box(rad/2-width/2, width, width);
        p.pop();
        p.push();
        p.translate(+rad/4+width/4, 0, 0);
        p.box(rad/2-width/2, width, width);
        p.pop();
        p.pop();
    };

    // Origin in center of all axis
    var Cage = function(h, gap) {
        var mv = 2*h + gap;

        p.push();
        p.translate(gap/2 + h, gap/2 + h, 0);

        Corner(h);
        p.push();
        p.translate(-mv, 0, 0);
        p.rotateZ(-p.PI/2);
        Corner(h);
        p.pop();

        p.push();
        p.translate(-mv, -mv, 0);
        p.rotateZ(p.PI);
        Corner(h);
        p.pop();

        p.push();
        p.translate(0, -mv, 0);
        p.rotateZ(p.PI/2);
        Corner(h);
        p.pop();

        p.pop();
    };

    // Origin in inner corner
    var Corner = function (dim) {
        p.push();
        p.translate(0, dim/2, 0);
        p.box(2*dim, dim, dim);
        p.pop();
        p.push();
        p.translate(dim/2, -dim/2, 0);
        p.box(dim, dim, dim);
        p.pop();
    };

};

var myp5 = new p5(sketch);
