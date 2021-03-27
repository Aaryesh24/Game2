var gunImg;
var gun;
var bullet;
var crosshair;
var crosshairImg;
var bot;
var botHead;
var newBot;
var botImg;
var invisbox;
var kills = 0;
var rebots = 30;
var score = 0;
var recoilImg;
var delay = 0;
var summon = true;

function preload() {
    gunImg = loadImage("1.png")
    crosshairImg = loadImage("crosshairimage.png")
    botImg = loadImage("bot.png")
    recoilImg = loadImage("2.png")
}

function setup(){
    createCanvas(windowWidth-30, windowHeight-30)
    gun = createSprite(windowWidth-520, windowHeight - 320, 50, 50)
    gun.addImage(gunImg)
    gun.scale=2

    crosshair = createSprite(windowWidth/2, windowHeight/2, 50, 50)
    crosshair.addImage(crosshairImg)
    crosshair.scale = 0.3

    bot = createSprite (random(95, 1050), random(180,675) - 100, 40, 50)
    bot.addImage(botImg)
    bot.setCollider("rectangle", -6, 30, 51, 170)
    bot.scale = 0.7

    botHead = createSprite (bot.x, bot.y, 50, 10)
    botHead.visible=false;
    botHead.setCollider("rectangle", -6, -26, 15, 15)

    //invisbox = createSprite(windowWidth-300, windowHeight-260, 100, 100)
    
}

function draw(){
    background("yellow")
    //bot.debug = true
    textSize(30)
    text("Score: " + score, windowWidth/2-80, 40)
    text("Remaining: " + rebots, windowWidth/2 + 160, 40)
    text("Kills: "+ kills, windowWidth/2 - 360, 40)
    if(mousePressedOver(bot) && bot.visible == true && summon == true){
        bot.visible = false;
        bot.destroy()
        botHead.destroy()
        kills+=1
        rebots-=1
        score+=50
        if(mousePressedOver(botHead)){
            score+=50
        }
        if(rebots == 0){
            summon = false;
        }
        summonBot()
    }
    
    //bot.debug=true
    
    crosshair.x = mouseX
    crosshair.y = mouseY
    /* if(crosshair.x > windowWidth-520 && crosshair.y > displayHeight - 460){
        crosshair.x = windowWidth-520
    }
    if(crosshair.y < displayHeight-460){
        crosshair.y = displayHeight - 460
    } */
    if(mouseDown("leftButton")){
        recoil()
    }
    botHead.debug=true
    drawSprites()

}
function summonBot(){   
    bot = createSprite (random(95, 1050), random(180,675) - 100, 40, 50)
    bot.addImage(botImg)
    bot.setCollider("rectangle", -6, 30, 51, 170)
    bot.scale = 0.7

    botHead = createSprite (bot.x, bot.y, 50, 10)
    botHead.visible=false;
    botHead.setCollider("rectangle", -6, -26, 15, 15)
}
function recoil(){
    gun.addImage(recoilImg)
    setTimeout(() => {
        gun.addImage(gunImg)
    }, 100) 
    
}
