class Particle{
    constructor(x, y, r){
        var options = {
            restitution:0.4,
        }
        this.r = radius;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.amgle;
        Push();
        translate(pos.x, pos.y);
        rotate(angle);
        nonStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.r, this.r);
        pop();
    }
}