var canvas;
var cs1,cs2,cs3,cs4;
var box, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    cs1 = createSprite(0,580,360,30);
    cs1.shapeColor = rgb(0,0,255);

    cs2 = createSprite(295,580,200,30);
    cs2.shapeColor = rgb(255,128,0);

    cs3 = createSprite(515,580,200,30);
    cs3.shapeColor = rgb(153,0,76);

    cs4 = createSprite(740,580,220,30);
    cs4.shapeColor = rgb(0,100,0);

    box = createSprite(random(20,750),100, 40,40);
    box.shapeColor = rgb(255,255,255);
    box.velocityX = 4;
    box.velocityY = 9;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    box.bounceOff(edges);

    if(cs1.isTouching(box) && box.bounceOff(cs1)){
        box.shapeColor = rgb(0,0,255);
        music.play();
    }

    if(cs2.isTouching(box)){
        box.shapeColor = rgb(255,128,0);
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if(cs3.isTouching(box) && box.bounceOff(cs3)){
        box.shapeColor = rgb(153,0,76);
    }

    if(cs4.isTouching(box) && box.bounceOff(cs4)){
        box.shapeColor = rgb(0,100,0);
    }

    drawSprites();
}

