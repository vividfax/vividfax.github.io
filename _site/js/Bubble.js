class Bubble {

    constructor() {

        this.x = random(width);
        this.y = random(height);

        this.radius = random(300, 400);
        this.maxRadius = this.radius;
        this.moveOffset = random(360);
        this.xSpeed = random(-1, 1);
        this.ySpeed = random(-1, 1);
    }

    update() {

        this.x += sin((frameCount+this.moveOffset)/100)/5 * this.xSpeed;
        this.y += cos((frameCount+this.moveOffset)/100)/5 * this.ySpeed;

        let mouseDistance = dist(this.x, this.y, mouseX, mouseY);
        if (mouseDistance < this.radius/2 && this.radius > 0) {
            this.radius -= 25;
        } else if (mouseDistance > this.radius/2+25 && this.radius < this.maxRadius) {
            this.radius += 0.5;
        }
    }

    display () {

        bubbleLayer.noStroke();
        bubbleLayer.fill(palette.white);
        bubbleLayer.ellipse(this.x, this.y, this.radius);
    }

    displayShadow() {

        bubbleLayer.noStroke();
        bubbleLayer.fill(palette.mid);
        bubbleLayer.ellipse(this.x, this.y, this.radius+10);
    }
}