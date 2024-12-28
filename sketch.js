let ax, ay, bx, by, cx, cy;
let x, y;

function setup() {
  
  createCanvas(500, 500);
  background(0,0);

  ax = width / 2;
  ay = 0;
  bx = 0;
  by = height;
  cx = width;
  cy = height;

  stroke(255);
  strokeWeight(2);

  point(ax, ay + 5);
  point(bx + 5, by - 5);
  point(cx - 5, cy - 5);

  x = random(width);
  y = random(height);

}

function draw() {
  
  for (let i = 0; i < 10; i++) {
    
    point(x, y);

    let r = floor(random(3));

    if (r == 0) {
      x = (x + ax) / 2;
      y = (y + ay) / 2;
    } else if (r == 1) {
      x = (x + bx) / 2;
      y = (y + by) / 2;
    } else if (r == 2) {
      x = (x + cx) / 2;
      y = (y + cy) / 2;
    }
  }
}
