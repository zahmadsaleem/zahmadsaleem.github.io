let wwidth;
let hheight;
let divX;
let divY;
let img;
var cnv;
var ratio;

function setup() {
    ratio = windowWidth / windowHeight;
    cnv = createCanvas();
    setCanvasSize();
    cnv.parent('cover-main');
    centerCanvas();
    noCursor();
    img = loadImage('img/cover-bg.jpg');
}

function centerCanvas() {
    var x = (windowWidth - width) / 2 ;
    var y = (windowHeight - height) / 2 + 35;
    cnv.position(x, y);
}

function setCanvasSize() {
    if (ratio < 1.4 && ratio > 0.6) { //if height almost equal to width
        // console.log("almost square",ratio);
        let smaller = windowWidth > windowHeight ? windowHeight - 50 : windowWidth -50;
        wwidth = smaller;
        hheight = smaller;
        divX = 6;
        divY = 3;
    } else if (ratio > 1.2) { //if width more than height
        // console.log("landscape",ratio);
        wwidth = windowWidth - 50 ;
        hheight = wwidth / 2;
        divX = 12;
        divY = 3;
    } else { //if height more than width
        // console.log("portrait",ratio);
        hheight = windowHeight - 50;
        wwidth = hheight / 2;
        divX = 6;
        divY = 6;
    }
    resizeCanvas(wwidth, hheight);
}

function draw() {
    spanX = wwidth / divX;
    spanY = hheight / divY;
    var bgcol = color('rgba(255,255,255,0)');
    image(img, 0, 0, wwidth, hheight);
    if (ratio > 1.2) {
        image(img, wwidth, 0, wwidth, hheight);
    } else if (ratio < 0.8) {
        image(img, 0, hheight, wwidth, hheight);
    }
    background(bgcol);


    if (!mouseIsPressed) {
        noStroke();
        fill(color('rgba(170,170,170,.4)'));
        ellipse(mouseX, mouseY, 100, 100);
        fill(color('rgba(190,190,190,.2)'));
        ellipse(mouseX, mouseY, 90, 90);
    }

    stroke('#fff');
    strokeWeight(5);

    for (let i = 0; i < divX; i++) {
        for (let j = 0; j < divY; j++) {
            let col = 220;
            col -= dist(mouseX, mouseY, i * spanX, j * spanY) / 3;
            var colHere = color(col + 10, col + 15, col);
            colHere.setAlpha(90);
            fill(colHere);
            rect(i * spanX, j * spanY, spanX, spanY);

        }
    }
    if (mouseIsPressed) {
        fill(color('rgba(255,235,56,0.3)'));
        rect(int(mouseX / spanX) * spanX, int(mouseY / spanY) * spanY, spanX, spanY);
        noStroke();
        rect(int(mouseX / spanX) * spanX - 5, int(mouseY / spanY) * spanY - 5, spanX + 10, spanY + 10);
    }
}

function windowResized() {
    ratio = windowWidth / windowHeight;
    setCanvasSize();
    centerCanvas();
}
