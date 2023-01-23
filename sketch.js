var starImg,bgImg;
var star, starBody;
//criar variável para sprite de fada e imgFada
var fada;
var imgFada;
var vozFada;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starryNight.jpg");
    //carregar animação de fada 
    imgFada = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
    vozFada = loadSound("sound/JoyMusic.mp3")
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada
        vozFada.play();
    //criar sprite de fada e adicionar animação para fada
    fada = createSprite(400,300);
    fada.addAnimation("fadinha", imgFada);
    fada.scale = 0.1;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw(){
    background(bgImg);
    
    if(keyDown("left")){
        fada.x -= 5;
    }

    if(keyDown("right")){
        fada.x += 5;
    }

    if(star.y > 29 && starBody.position.y > 29){
        Matter.Body.setStatic(starBody, true);
    }

    drawSprites();
}
