var dog, happyDog, dog1,dog2 ;
var database;
var foodS, foodStock;

function preload()
{
dog1 = loadImage("images/dogImg.png");
dog2 = loadImage("images/dogImg1.png");
}

function setup() 
{
  createCanvas(500, 500);
  
  dog = createsprite(200, 200, 40, 20);
  dog.addImage(dog1);

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

}

function draw() 
{  
background(46, 139, 87)

if(keyWentDown(UP_ARROW))
{
  writeStock(foodS);
  dog.addImage(dog2);
}

  drawSprites();

  text("Press Up Arrow Key to feed Draco", 150, 140);
  textSize(20);
  fill("aquamarine");
  stroke(5);

}

function readStock(data)
{
  foodS = data.val();
}

function writeStock(x)
{
  database.ref('/').update(
    {
       Food: x
    })
}