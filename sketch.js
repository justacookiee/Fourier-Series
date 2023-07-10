let time = 0;
let wave = [];
let slider;
function setup() {
    createCanvas(1500, 400);
    frameRate(60);
    slider = createSlider(1, 100, 1);
}
  
function draw() {
    background(0);
    translate(200,200);

    let x = 0;
    let y = 0;
    let cx = 0;
    let cy = 0;
    for(i = 0; i < slider.value(); i++) {
        let n = 2 * i + 1;
        let radius = 100 * 4 / PI / n;
        stroke(255, 100);
        noFill();
        cx = x;
        cy = y;
        ellipse(cx, cy, radius * 2); 
        x += radius * cos(n * time);
        y += radius * sin(n * time);
        fill(255);
        stroke(255);
        line(cx, cy, x, y);
        ellipse(x, y, 2);
    
        noFill();
        
    }
    wave.push(y);
    stroke(255,100);
    line(x, y, 300, y);
    stroke(255);
    translate(300, 0);
    beginShape();
    for(var i = 0; i < wave.length; i++) {
        vertex(i , wave[wave.length - 1 - i]);
    }
    endShape();
    
    translate(-300, 0);
    
    
    if(wave.length > 1000)
        wave.shift();
    time += 0.1;
}