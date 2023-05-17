let palette = {
    white: "#FFF8F8",
    light: "#FAF1FF",
    mid: "#EADBEC",
    dark: "#835E89",
    black: "#36003F",
    contrast: "#40b6af",
};

let bubbles = [];
let bubbleLayer;
let backgroundCircles = [];
let backgroundCirclesLayer = [];

function setup() {

    // createCanvas(document.documentElement.scrollWidth, document.documentElement.scrollHeight);
    createCanvas(windowWidth, windowHeight);

    createBubbles();
    // createBackground();
}

function draw() {

    bubbleLayer.clear();
    background(palette.white);

    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].update();
        bubbles[i].displayShadow();
    }

    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].display();
    }

    // image(backgroundCirclesLayer, 0, 0);
    image(bubbleLayer, 0, 0);
}

function createBubbles() {

    bubbleLayer = createGraphics(width, height);

    for (let i = 0; i < width*height*0.0001; i++) {
        bubbles.push(new Bubble());
    }
}

function createBackground() {

    backgroundCirclesLayer = createGraphics(width, height);

    for (let i = 0; i < width*height*0.0001; i++) {
        backgroundCircles.push(new BackgroundCircle());
        backgroundCircles[i].display();
    }
}