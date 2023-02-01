const buttons= document.querySelectorAll('button');
const screen= document.getElementById('text');

for(let button of buttons){
    button.addEventListener('click',(e)=>{
        const buttonText=e.target.innerText;
        if(buttonText==='C'){
            screen.value="";
        }else if(buttonText==='='){
           try{
            screen.value=eval(screen.value);
           } catch (e){
            screen.value='Invalid operation';
           }
        }else{
            screen.value+=buttonText;
        }
        
    });
}
