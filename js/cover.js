async function generateP5Cover() {
    function createp5sketch(p) {
        let wwidth;
        let hheight;
        let divX;
        let divY;
        let img;
        var cnv;
        var ratio;

        img = p.loadImage('img/cover-bg.jpg');

        p.setup = function () {
            ratio = p.windowWidth / p.windowHeight;
            cnv = p.createCanvas();
            setCanvasSize();
            cnv.parent('cover-main');
            centerCanvas();
            p.noCursor();
        }

        function centerCanvas() {
            var x = (p.windowWidth - p.width) / 2;
            var y = (p.windowHeight - p.height) / 2 + 35;
            cnv.position(x, y);
        }

        function setCanvasSize() {
            if (ratio < 1.4 && ratio > 0.6) { //if height almost equal to width
                // console.log("almost square",ratio);
                let smaller = p.windowWidth > p.windowHeight ? p.windowHeight - 50 : p.windowWidth - 50;
                wwidth = smaller;
                hheight = smaller;
                divX = 6;
                divY = 3;
            } else if (ratio > 1.2) { //if width more than height
                // console.log("landscape",ratio);
                wwidth = p.windowWidth - 50;
                hheight = wwidth / 2;
                divX = 12;
                divY = 3;
            } else { //if height more than width
                // console.log("portrait",ratio);
                hheight = p.windowHeight - 50;
                wwidth = hheight / 2;
                divX = 6;
                divY = 6;
            }
            p.resizeCanvas(wwidth, hheight);
        }

        p.draw = function () {
            spanX = wwidth / divX;
            spanY = hheight / divY;
            var bgcol = p.color('rgba(255,255,255,0)');
            p.image(img, 0, 0, wwidth, hheight);
            if (ratio > 1.2) {
                p.image(img, wwidth, 0, wwidth, hheight);
            } else if (ratio < 0.8) {
                p.image(img, 0, hheight, wwidth, hheight);
            }
            p.background(bgcol);


            if (!p.mouseIsPressed) {
                p.noStroke();
                p.fill(p.color('rgba(170,170,170,.4)'));
                p.ellipse(p.mouseX, p.mouseY, 100, 100);
                p.fill(p.color('rgba(190,190,190,.2)'));
                p.ellipse(p.mouseX, p.mouseY, 90, 90);
            }

            p.stroke('#fff');
            p.strokeWeight(5);

            for (let i = 0; i < divX; i++) {
                for (let j = 0; j < divY; j++) {
                    let col = 220;
                    col -= p.dist(p.mouseX, p.mouseY, i * spanX, j * spanY) / 3;
                    var colHere = p.color(col + 10, col + 15, col);
                    colHere.setAlpha(90);
                    p.fill(colHere);
                    p.rect(i * spanX, j * spanY, spanX, spanY);

                }
            }
            if (p.mouseIsPressed) {
                p.fill(p.color('rgba(255,235,56,0.3)'));
                p.rect(p.int(p.mouseX / spanX) * spanX, p.int(p.mouseY / spanY) * spanY, spanX, spanY);
                p.noStroke();
                p.rect(p.int(p.mouseX / spanX) * spanX - 5, p.int(p.mouseY / spanY) * spanY - 5, spanX + 10, spanY + 10);
            }
        }

        p.windowResized = function () {
            ratio = p.windowWidth / p.windowHeight;
            setCanvasSize();
            centerCanvas();
        }
    }


    let myp5 = await new p5(createp5sketch);
}