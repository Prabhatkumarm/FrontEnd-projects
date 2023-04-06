const containers = document.querySelectorAll('.container');
const draggables = document.querySelectorAll('.draggable');
const button= document.getElementById('button');
let sourceContainer=null;
let sourceContent=null;
let destinationContainer=null;
let destinationContent=null;
const sourcePosition={
    x:0,
    y:0
}
const destinationPosition={
    x:0,
    y:0
}

draggables.forEach(draggable=>{
    draggable.addEventListener('dragstart',()=>{
        sourceContainer=draggable.parentElement;
        sourceContent=draggable;
        sourcePosition.x=sourceContent.offsetLeft;
        sourcePosition.y=sourceContent.offsetTop;
        draggable.style.opacity=0.1;
    })
    draggable.addEventListener('dragend',()=>{
        // sourceContent.style.transform=`translate(${destinationPosition.y-30}px,${destinationPosition.x-30}px)`;
        // // sourceContent.style.transform+=`translateX()`;
        // sourceContent.style.transition='transform 2s';
        // destinationContent.style.transform=`translateY(${sourcePosition.y}px)`;
        // destinationContent.style.transform+=`translateX(${sourcePosition.x}px)`;
        // destinationContent.style.transition='transform 2s';
        destinationContainer.appendChild(sourceContent);
        sourceContainer.appendChild(destinationContent);
        sourceContent.style.opacity=1;

    })
})

containers.forEach(container=>{
    container.addEventListener('dragover',(e)=>{
        e.preventDefault();
        destinationContainer=container;
        destinationContent=container.firstChild;
        destinationPosition.x=destinationContent.offsetLeft;
        destinationPosition.y=destinationContent.offsetTop;
        
    })
    
})

button.addEventListener('click',()=>{
    destinationContainer.appendChild(destinationContent);
    sourceContainer.appendChild(sourceContent);
})