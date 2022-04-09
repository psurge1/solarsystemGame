class planet {
    constructor(diameter, star, mass, x, y) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.star = star;
        this.mass = mass;
    }

    show() {
        push();
        noStroke();
        fill('#ff0000ff');
        revolve();
        translate(0,0);
        ellipse(this.x,this.y,scaleDistance(this.diameter));
        pop();
    }
}