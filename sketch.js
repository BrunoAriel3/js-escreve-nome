function setup() {
    createCanvas(400, 400);
      background("red");
  }
  
  function draw() {
  
    stroke("black");
    fill("yellow");
  
    //console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }