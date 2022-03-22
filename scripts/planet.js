class planet {
    constructor(diameter, star, mass, x, y) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.radius = diameter/2;
        this.star = star;
        this.mass = mass;

        push();
        noStroke();
        fill('#ff0000ff');
        revolve();
        translate(0,0);
        ellipse(this.x,this.y,scaleDistance(this.diameter));
        pop();
    }
}