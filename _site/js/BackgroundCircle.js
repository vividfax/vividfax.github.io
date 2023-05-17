class BackgroundCircle {

    constructor() {

        this.x = random(width);
        this.y = random(height);
        this.radius = 0;
        this.growing = true;

        for (let i = 0; i < 550; i++) {
            this.grow();
        }
    }

    update() {

    }

    grow() {

        if (!this.growing) return;

        for (let i = 0; i < backgroundCircles.length; i++) {

            if (backgroundCircles[i] == this  || backgroundCircles[i].radius == 0) continue;

            let distance = dist(this.x, this.y, backgroundCircles[i].x, backgroundCircles[i].y);
            if (distance < this.radius/2 + backgroundCircles[i].radius/2) {
                this.growing = false;
                return;
            }
        }

        this.radius++;
    }

    display() {

        if (this.radius < 20) return;

        backgroundCirclesLayer.strokeWeight(5);
        backgroundCirclesLayer.stroke(palette.mid);
        backgroundCirclesLayer.fill(palette.white);

        for (let i = this.radius; i > 10; i -= 40) {

            backgroundCirclesLayer.ellipse(this.x, this.y, i-10);
        }
    }
}