
var trex, trex_correndo;
var bordas;
function preload(){
//carregar imagens e animações do jogo
trex_correndo = loadAnimation("trex1.png","trex3.png","trex4.png");
}
function setup(){
createCanvas(600,200)
//crie um sprite de trex
trex = createSprite(50,160,20,50);
trex.addAnimation("correndo", trex_correndo);
trex.scale = 0.5;
//carregar as bordas
bordas = createEdgeSprites();
}
function draw(){
background("white");
//usando o console
console.log(trex.y);
//o trex pula quando aperta o espaço
if(keyDown("space")){
trex.velocityY = -10;
}
//a gravidade do trex
trex.velocityY = trex.velocityY + 0.5;
//trex collide com o chão
trex.collide(bordas[3]);
drawSprites();
}