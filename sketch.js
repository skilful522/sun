let mover;

function setup() {
    createCanvas(400, 400);
    mover = new Mover(100, 200, 2);

}

function draw() {
    background(0);

    if (mouseIsPressed) {
        const wind = createVector(0.1, 0);

        mover.applyForce(wind);

    }

    const gravity = createVector(0, 0.2);
    const weight = p5.Vector.mult(gravity, mover.mass);
    mover.applyForce(weight);
    mover.friction();
    mover.update();
    mover.edges();
    mover.show();
}