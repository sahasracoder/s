const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour=1

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
    var tim=0
    tim=hour%12
    console.log(tim)
    if(hour>=12){
        console.log("value")
        text("Time : "+ tim + " PM", 50,100);
    }else if(hour==0){
        text("Time : 12 AM",100,100);
    }else{
        text("Time : "+ tim + " AM", 50,100);
    }

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata")
    var responseJSON= await response.json()
    console.log(responseJSON.datetime)
  // slice the datetime to extract hour
  var daytime=responseJSON.datetime
     hour=daytime.slice(11,13)
  console.log(hour)

    
    if(hour>=0 && hour<18 ){
        bg = "sunrise.png";
    }
    else{
        bg="sunset.png"
    }
    
    backgroundImg = loadImage(bg);
}
