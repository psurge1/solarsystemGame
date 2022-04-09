function getUniversalGravitationalConstant() {
    return 6.67408*10**-11;
}

function getEarthMass() {
    return 5.97219*10**24;
}

/**
 * 
 * @param {number} mass in kilograms
 * @param {number} radius in meters
 * @return {number} orbital velocity in meters/second
 */
function getOrbitalVelocity(mass, radius) {
    return Math.sqrt(getUniversalGravitationalConstant()*mass/radius);
}

/**
 * 
 * @param {number} mass 
 * @param {number} radius 
 * @returns {number} orbital period in seconds
 */
function getOrbitalPeriod(mass, radius) {
    return Math.sqrt((4*Math.PI**2*radius**3)/(getUniversalGravitationalConstant()*mass));
}

function traceOrbit(object1, object2, rgba) {
    push();
    translate(object1.x,object1.y);
    strokeWeight(1);
    stroke(rgba);
    strokeWeight(2);
    fill(0,0,0,0);
    ellipse(0,0,Math.sqrt((object2.x*2)**2+(object2.y*2)**2));
    pop();
}

function getRatioScale() {
    return 1/(1*10**9);
}

function scaleDistance(distance) {
    return Math.round(distance*1/(1*10**9));
}

function correctAngle(angle) {
    let correctedAngle = angle%360;
    if (correctedAngle<0) {
        correctedAngle+=360;
    }
    return correctedAngle;
}

function findVector(a) {
    let xMove = Math.sin(radians(a));
    let yMove = Math.cos(radians(a));
    return [xMove, yMove];
}

function positive(n) {
    if (n < 0)
        return 0;
    else
        return n;
}

function revolve() {

}

function axisRotate(circumference) {
    
}

console.log(getOrbitalVelocity(5.97219*10**24,378000000));
console.log(getOrbitalPeriod(5.97219*10**24,378000000));