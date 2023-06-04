let x, y, x1 = 300, y1 = 300; // 공1 위치
let xx1 = 350, yy1 = 350; // 공2 위치
let xxx1 = 350, yyy1 = 350; //공3 위치
let a = 5, b = -5, c = -5, e = -5, f = -5, g = 5; //이동방향
const r1 = 15, r2= 15; // 반지름
const rr2= 15; //공2 반지름
const rrr2 = 15; // 공3 반지름
let cx, cy, ax, ay, bx, by;
let d, d1, d2; //두 원 사이의 거리
let s1 = 0, s2 = 0; //현재 시간
let s = 0;
let sFlag = true;
 

function setup() {
  createCanvas(400, 400);
   
}

//화면에서 못 나가기
function limit() {
  
  //좌우
  if(x >= width-r1) {
    x = width-r1;
  } else if(x <= r1) {
    x = r1;
  }
  
  //상하
  if(y <= r1) {
    y = r1;
  } else if(y >= height-r1) {
   y = height -r1; 
  } 
}  

function startBt() {
  button = createButton('시작하기');
  button.size(150, 50);
  button.position(width/3, height/5*3);
  button.style('font-size', '24');
  button.mousePressed(changeFlag);
}

//게임 시작
function changeFlag() {
  removeElements();
  sFlag = false;
}

//두 물체 충돌
function clash(){
  //공 1
  cx = x1 - x;
  cy = y1 - y;
  d = sqrt(cx*cx+cy*cy);
  if(d <= r1+r2) {
    
    background(0);
    fill(255);
    textSize(40);
    text('Game Over', 100, 200);
  
    event.preventDefault();
  
  }
    
  //공 2
  bx = xxx1 - x;
  by = yyy1 - y;
  d2 = sqrt(bx*bx+by*by);
  
    if(d2 <= r1+rrr2) {
    
    background(0);
    fill(255);
    textSize(40);
    text('Game Over', 100, 200);
    
    event.preventDefault();

  }
  //공 3
  ax = xx1 - x;
  ay = yy1 - y;
  d1 = sqrt(ax*ax+ay*ay);
  
    if(d1 <= r1+rr2) {
    
    background(0);
    fill(255);
    textSize(40);
    text('Game Over', 100, 200);
    
    
    event.preventDefault();
  }
}

function moving() {
  //조종하는 원
  fill(255);
  ellipse(x, y, r1*2);
  x = mouseX;
  y = mouseY;
  
  //피해야 하는 원
  fill(255, 0, 0);
  ellipse(x1, y1, r2*2);
  x1 += a;
  y1 += b;
  
  if(y1+b < r2 || y1+b > height-r2) {
    b = -b+random(3,5);
  
  } 
  
  if(x1+a > width-r2 || x1+a < r2) {
    a = -a+random(-5,-3);
  } 
  
  s = s+1;
  let s1 = second();
  let s2 = s1-(s1-s);
  fill(255);
  textSize(30);
  text('Score: ' + s2, 50, 50);
  
  if(s2 >= 500) {
    fill(255, 0, 0);
    ellipse(xx1, yy1, rr2*2);
    xx1 += c;
    yy1 += e;
  
  if(yy1+e < rr2 || yy1+e > height-rr2) {
    e = -e+random(-3,-5);
  
  } 
  
  if(xx1+c > width-rr2 || xx1+c < rr2) {
    c = -c+random(5,3);
  } 
  
  if(s2 >= 800) {
    fill(255, 0, 0);
    ellipse(xxx1, yyy1, rrr2*2);
    xxx1 += f;
    yyy1 += g;
  
  if(yyy1+g < rrr2 || yyy1+g > height-rrr2) {
    g = -g+random(-3,-5);
  
  } 
  
  if(xxx1+f > width-rrr2 || xxx1+f < rrr2) {
    f = -f+random(5,3);
  } 
  }

  }
}

function draw() {
  background(0);
  
  
  if(sFlag) {
    startBt(); //시작 화면
  } 
  else {
    clash();
    limit();
    moving();
  }
} 