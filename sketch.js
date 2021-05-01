var ground,groundImage;
var star,starImage;
var fairy,fairyImage

function Preload(){
	groundImage=loadAnimation("images/starNight.png" )
	fairyImage=loadImage("images/fairy.png")
}

function setup(){
	createCanvas(500,500)
	ground=createSprite(250,250)
	ground.addAnimation("ground",groundImage)

	fairy=createSprite(200,200)
	fairy.addImage("fairy",fairyImage)
}

function draw(){
	background(0)
	drawSprites()
}