// チェッカー

function setup() {
  createCanvas(200, 200);
  let size = width/8;
  noStroke();
  
  for(let i = 0; i < 8; i++){
    for(let j=0;j<8;j++){ 
    if((i+j)%2==0)
    {fill(196); }
      
 else{fill(112, 109, 109);
    rect(i*20,j*20,20,20);  
    if(j<4==0){
    fill(10,10,10);}
else if(6<j==0){fill(255, 0,0);}
else{fill(112, 109, 109);}
            ellipse(i*20+10,j*20+10,15);
      }
    }
