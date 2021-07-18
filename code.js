var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var wall1= createSprite(100,100,15,100); 
    wall1.shapeColor=("brown");
var wall2= createSprite(150,100,100,15);
    wall2.shapeColor=("brown");
var wall3= createSprite(160,30,15,60);
    wall3.shapeColor=("brown");
var wall4= createSprite(190,200,15,100);
    wall4.shapeColor=("brown");
var wall5= createSprite(140,200,100,15);
    wall5.shapeColor=("brown");
var wall6= createSprite(125,250,15,90);
    wall6.shapeColor=("brown");
var wall7= createSprite(30,200,15,100);
    wall7.shapeColor=("brown");
var wall8= createSprite(0,200,50,20);
    wall8.shapeColor=("brown");
var wall9= createSprite(300,99,15,100);
    wall9.shapeColor=("brown");
var wall10= createSprite(300,50,100,15);
    wall10.shapeColor=("brown");
var wall11= createSprite(75,350,15,100);
    wall11.shapeColor=("brown");
var wall12= createSprite(322,150,60,15);
    wall12.shapeColor=("brown");
var wall13= createSprite(250,150,15,100);
    wall13.shapeColor=("brown");
var wall14= createSprite(270,200,100,15);
    wall14.shapeColor=("brown");
var wall15= createSprite(130,350,100,15);
    wall15.shapeColor=("brown");
var wall16= createSprite(290,250,15,100);
    wall16.shapeColor=("brown");
var wall17= createSprite(348,250,103,15);
    wall17.shapeColor=("brown");
var wall18= createSprite(30,80,65,15);
   wall18.shapeColor=("brown");
var wall19= createSprite(209,385,15,100);
    wall19.shapeColor=("brown");
var wall20= createSprite(250,323,15,75);   
    wall20.shapeColor=("brown");
var wall21= createSprite(270,293,25,15);
    wall21.shapeColor=("brown");
var wall22= createSprite(290,365,15,75);
    wall22.shapeColor=("brown");
var sofia= createSprite(20,20,25,25);
    sofia.shapeColor=("red");
 var cup= createSprite(400,400,40,150);
    cup.shapeColor=("blue");

function draw() {
  background("yellow");
  drawSprites();

createEdgeSprites();
sofia.bounceOff(edges);
sofia.bounceOff(wall1);
sofia.bounceOff(wall2);
sofia.bounceOff(wall3);
sofia.bounceOff(wall4);
sofia.bounceOff(wall5);
sofia.bounceOff(wall6);
sofia.bounceOff(wall7);
sofia.bounceOff(wall8);
sofia.bounceOff(wall9);
sofia.bounceOff(wall10);
sofia.bounceOff(wall11);
sofia.bounceOff(wall12);
sofia.bounceOff(wall13);
sofia.bounceOff(wall14);
sofia.bounceOff(wall15);
sofia.bounceOff(wall16);
sofia.bounceOff(wall17);
sofia.bounceOff(wall18);
sofia.bounceOff(wall19);
sofia.bounceOff(wall20);
sofia.bounceOff(wall21);
sofia.bounceOff(wall22);
sofia.collide(cup);

if (keyDown(UP_ARROW)){
sofia.y=sofia.y -10;
}

if (keyDown(DOWN_ARROW)){
sofia.y=sofia.y +10;
}

if (keyDown(LEFT_ARROW)){
sofia.x=sofia.x -10;
}

if (keyDown(RIGHT_ARROW)){
sofia.x=sofia.x +10;
}


}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
