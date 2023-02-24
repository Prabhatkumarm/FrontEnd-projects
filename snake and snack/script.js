const canvas= document.getElementById('canvas');
const pen = canvas.getContext('2d');
const go= document.getElementById('go');
const sc= document.getElementById('sc');
console.log(go,sc);
// pen.fillStyle= "Red";
// let initial_x=10;
// let initial_y=10;
const cs=25;
let food=null;
let gameOver=false;
let score=0;
const gameOverMessage=`GAME OVER`;
sc.innerText=`score:${score}`;

function getFood(){
    const xf= Math.round(Math.random()*(750-cs)/cs);
    const yf= Math.round(Math.random()*(500-cs)/cs);
    food={
        x: xf,
        y: yf
    };
    
    return food;
    

}

const snake={
    initialSize: 5,
    direction: 'right',
    cells:[],
    
   createSnake: function(){
       for(let i=0;i<this.initialSize;i++){
           this.cells.push({
               x:i,
               y:0
           });
           
       }
   },

   drawSnake: function(){
       for(let cell of this.cells){
           pen.fillRect(cell.x*cs,cell.y*cs, cs-1,cs-1);
           
       }
   },
    updateSnake: function(){
        const headX=this.cells[this.cells.length-1].x;
        const headY=this.cells[this.cells.length-1].y;

        if(headX==food.x && headY==food.y){
            food=getFood();
            score++;
            sc.innerText=`score:${score}`;
            console.log(score);
        }else{
            this.cells.shift();
        }

        if(this.direction=='left'){
            if(headX-1<=0){
                gameOver=true;
            }
            this.cells.push({x: headX-1,y:headY});
        }else if(this.direction=='right'){
            if(headX+1>28){
                gameOver=true;
            }
            this.cells.push({x: headX+1,y:headY});
        }else if(this.direction=='up'){
            if(headY-1<=0){
                gameOver=true;
            }
            this.cells.push({x: headX,y:headY-1});
        }else if(this.direction=='down'){
            if(headY+1>18){
                gameOver=true;
            }
            this.cells.push({x: headX,y:headY+1});
        }
        
        

    }

}
//this will initialize the game
function init(){
    snake.createSnake();
    food=getFood();
    
    document.addEventListener('keydown', keyPressed);

    function keyPressed(e){
        if(e.key=='ArrowLeft'){
            snake.direction='left';
        }else if(e.key=='ArrowRight'){
            snake.direction='right';
        }else if(e.key=='ArrowUp'){
            snake.direction='up';
        }else if(e.key=='ArrowDown'){
            snake.direction='down';
        }else{
            console.log('Invalid key');
        }
    }
    
}
init();

//update the game after each alteration
function update(){
    snake.updateSnake();
    if(gameOver==true){
        go.innerText=`GAME OVER`;
        clearInterval(id);
        
    }
}

//draws on canvas
function draw(){
    pen.clearRect(0,0,750,500);
    pen.fillStyle='blue';
    pen.fillRect(food.x*cs,food.y*cs,cs,cs);
    pen.fillStyle='yellow';
    snake.drawSnake();
}

// continuesly updates and draws on the canvas
function gameloop(){
    update();
    draw();
}

//gameloop should run continuesly or be called after every small interval

const id=setInterval(gameloop,150);
  
// setTimeout(clearInterval(id),5000);

