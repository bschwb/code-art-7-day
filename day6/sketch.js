var sketch = function(p) {

    p.setup = function() {
        p.createCanvas(640, 480);
        p.background(30);

        p.blendMode(p.LIGHTEST);
        splash(200, 0, 130, 130);
        splash(100, 130, 130, 0);
        splash(100, 130, 20, 0);
    };

    var splash = function(n, r, g, b) {
        p.noStroke();
        var originx = p.width/2;
        var originy = p.height/2;
        var xoff = p.random(0, 100);
        var yoff = p.random(0, 100);
        var coff = p.random(0, 100);


        for (var i = 1; i <= n; ++i) {
            var noiseX = p.map(p.noise(xoff), 0, 1, -p.width, p.width);
            var noiseY = p.map(p.noise(yoff), 0, 1, -p.height, p.height);
            // var noiseX = p.random(-p.width/2, p.width/2);
            // var noiseY = p.random(-p.height/2, p.height/2);

            var noiseAlpha = p.map(p.noise(coff), 0, 1, 40, 255);
            var c1 = p.color(r, g, b, noiseAlpha);

            p.fill(c1);
            p.ellipse(originx+noiseX, originy+noiseY, 40);

            xoff += 2;
            yoff += 1;
            coff += 0.1;
        }
    };
};

var myp5 = new p5(sketch);
