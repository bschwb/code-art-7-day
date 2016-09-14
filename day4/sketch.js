// Particle System adapted from
// https://p5js.org/examples/examples/Simulate_Particle_System.php
//
// Licence:
// Creative Commons
// Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)
// https://creativecommons.org/licenses/by-nc-sa/4.0/

var sketch = function(p) {

    var system1;
    var system2;

    var cbase;
    var cbase_light;
    var c1;
    var c2;

    p.setup = function() {
        cbase = p.color(56, 82, 94);
        cbase_light = p.color('#132F3A');
        c1 = p.color('#958356');
        c2 = p.color('#956256');
        p.createCanvas(640, 480);
        system1 = new ParticleSystem(p.createVector(p.width+20, p.height+20),
                                     -6.5, -6, -4, -4.2, c1);
        system2 = new ParticleSystem(p.createVector(p.width/3., -20),
                                     -0.1, 0.1, 0.4, 0.5, c2);
    };

    p.draw = function() {
        p.background(cbase);

        p.fill(cbase_light);
        p.stroke(255);
        p.triangle(p.width/2., p.height/3.,
                   2. * p.width/3., p.height/3.,
                   2 * p.width/3., p.height/2.);

        system1.addParticle();
        system2.addParticle();
        system1.run();
        system2.run();
    };


    // A simple Particle class
    var Particle = function(position, velocity, color) {
        this.acceleration = p.createVector(0, 0.05);
        this.velocity = velocity.copy();
        this.position = position.copy();
        this.lifespan = 255.0;
        this.color = color;
    };

    Particle.prototype.run = function() {
        this.update();
        this.display();
    };

    // Method to update position
    Particle.prototype.update = function(){
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.lifespan -= 2;
    };

    // Method to display
    Particle.prototype.display = function() {
        // p.stroke(255, this.lifespan);
        // p.strokeWeight(2);
        p.noStroke();
        var c = p.color(p.red(this.color), p.green(this.color), p.blue(this.color), this.lifespan);
        p.fill(c, this.lifespan);
        p.ellipse(this.position.x, this.position.y, 12, 12);
    };

    // Is the particle still useful?
    Particle.prototype.isDead = function(){
        if (this.lifespan < 0) {
            return true;
        } else {
            return false;
        }
    };

    var ParticleSystem = function(position, x1, x2, y1, y2, c) {
        this.origin = position.copy();
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
        this.particles = [];
        this.color = c;
    };

    ParticleSystem.prototype.addParticle = function() {
        this.particles.push(
            new Particle(
                this.origin,
                p.createVector(p.random(this.x1, this.x2), p.random(this.y1, this.y2)),
                this.color
            ));
    };

    ParticleSystem.prototype.run = function() {
        for (var i = this.particles.length-1; i >= 0; i--) {
            var p = this.particles[i];
            p.run();
            if (p.isDead()) {
                this.particles.splice(i, 1);
            }
        }
    };

};

var myp5 = new p5(sketch);
