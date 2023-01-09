const quizData=[
    {
        question:"Inside which HTML element do we put the JavaScript?",
        a:"<scripting>",
        b:"<javascript>",
        c:"<script>",
        d:"none of the above",
        answer:"c"
    },
    {
        question:"Always sit on the",
        a:"Bench",
        b:"Chair",
        c:"Table",
        d:"none of the above",
        answer:"b"
    },
    {
        question:"Best time to do exercise is",
        a:"Morning",
        b:"Afternoon",
        c:"Evening",
        d:"none of the above",
        answer:"a"  
    },
    {
        question:"Best time to study is",
        a:"Morning",
        b:"Afternoon",
        c:"Evening",
        d:"none of the above",
        answer:"a"  
    },
    {
        question:"Best time to sleep is",
        a:"Morning",
        b:"Afternoon",
        c:"Evening",
        d:"none of the above",
        answer:"b"  
    }

]

let currentQuestion=0;
const ques=document.getElementById("q");
const op_a=document.getElementById("la");
const op_b=document.getElementById("lb");
const op_c=document.getElementById("lc");
const op_d=document.getElementById("ld");
const b_s=document.getElementById("btn")
let score=0;
function loadQuiz(){

    ques.innerText=quizData[currentQuestion].question;
    op_a.innerText=quizData[currentQuestion].a;
    op_b.innerText=quizData[currentQuestion].b;
    op_c.innerText=quizData[currentQuestion].c;
    op_d.innerText=quizData[currentQuestion].d;
}
loadQuiz();
// const a=document.querySelectorAll(".opt");
// a.forEach(print);
// function print(item){
//     console.log(item);
// }    

function evluate(){
    const a=document.querySelectorAll(".opt");
    var toReturn = undefined;
    a.forEach((item)=>{
        
        if(item.checked){
            toReturn=item.id;
            item.checked=false;
           
                        
        }
        
    });

    return toReturn;
}
b_s.addEventListener('click',()=>{
    let ans=evluate();
    console.log(ans);
    if(ans!=undefined){
        if(ans==quizData[currentQuestion].answer){
            score++;
        }
        currentQuestion++;
        if(currentQuestion<quizData.length){
            loadQuiz();
        }else{
            document.getElementById("ctnr").innerHTML="your score is "+score+"/5";
        }
    }else{
        alert("please select an answer");
    }
    
    
});

// count score
//check correct answer
//move to next only if a answer is selected







