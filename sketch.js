var peachflower = [];
var purpleflower = [];
var redflower = [];


var masterbutton = 0;



var img;
var img2;
var img3;





function preload() {

    img = loadImage("assets/peachflower.png");
    img2 = loadImage("assets/purpleflower.png");
    img3 = loadImage("assets/redflower.png");
    img4 = loadImage("assets/thinkface.png");
}




function setup() {
    createCanvas(1900, 1000);
    background(255);
    //  mouseClicked(selectflower);

}




function mouseClicked() {
    if (mouseX > 70 && mouseX < 130 && mouseY > 190 && mouseY < 270) {

        peachflower = [];
        masterbutton = 5;

    }

    if (mouseX > 70 && mouseX < 130 && mouseY > 340 && mouseY < 460) {

        purpleflower = [];
        masterbutton = 6;

    }

    if (mouseX > 70 && mouseX < 130 && mouseY > 490 && mouseY < 540) {

        redflower = [];
        masterbutton = 7;

    }

    if (mouseX > 70 && mouseX < 130 && mouseY > 820 && mouseY < 900) {
        saveCanvas('myCanvas', 'jpg');
        masterbutton = 8;

    }


}


function draw() {
    if (masterbutton == 5) {



        for (i = 0; i < peachflower.length; i = i + 2) {

            image(img, peachflower[i], peachflower[i + 1], 160, 160);

        }

        if (mouseIsPressed) {

            append(peachflower, mouseX - 80);
            append(peachflower, mouseY - 80);
        }
    }

    if (masterbutton == 6) {



        for (j = 0; j < purpleflower.length; j = j + 2) {

            image(img2, purpleflower[j], purpleflower[j + 1], 160, 160);

        }

        if (mouseIsPressed) {

            append(purpleflower, mouseX - 80);
            append(purpleflower, mouseY - 80);
        }


    }

    if (masterbutton == 7) {



        for (k = 0; k < redflower.length; k = k + 2) {

            image(img3, redflower[k], redflower[k + 1], 160, 160);

        }

        if (mouseIsPressed) {

            append(redflower, mouseX - 80);
            append(redflower, mouseY - 80);
        }


    }

    if (masterbutton == 8) {

        background(255);
        peachflower = [];
        purpleflower = [];
        redflower = [];


    }





    //peachflower button
    image(img, 60, 200, 70, 70);

    //purpleflower button
    image(img2, 60, 350, 70, 70);

    //redflower button
    image(img3, 60, 500, 70, 70);

    //erase button
    image(img4, 65, 830, 50, 50);



}