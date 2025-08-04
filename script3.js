let quists = [
// {
//     quistion:"What is the largest animal in the world ?",
//     answers:[
//         {text:"shark",correct:false},
//         {text:"Whale",correct:true},
//         {text:"Elephant",correct:false},
//         {text:"Giraffe",correct:false }
//     ]
// },
// {
//     quistion:"What is the largest desert in the world ?",
//     answers:[
//         {text:"Gobi",correct:false},
//         {text:"Kalahari",correct:false},
//         {text:"Sahara",correct:false},
//         {text:"Antartica",correct:true}
//     ]
// },
// {
//     quistion:"What is the Smallest country in the world ?",
//     answers:[
//         {text:"Vatican city",correct:true},
//         {text:"Bhutan",correct:false},
//         {text:"Nepal",correct:false},
//         {text:"El Bahrain",correct:false }
//     ]
// },
// {
//     quistion:"What is the Smallest Continent in the world ?",
//     answers:[
//         {text:"Asia",correct:false},
//         {text:"Australia",correct:true},
//         {text:"North America",correct:false},
//         {text:"Africa",correct:false }
//     ]

// },
//   {     quistion:"Next Yousef's Phase",
    // answers:[
        // {text:"Go to next phase",correct:true},
        // 
    // ]},
    {
    quistion:"What is my mothers name?",
    answers:[
        {text:"mom",correct:false},
        {text:"mother",correct:false},
        {text:"امي",correct:false},
        {text:"mama",correct:true },
        {text:"Nadia",correct:true }
    ]
 

},
    {
    quistion:"What is my fathers name?",
    answers:[
         {text:"baba",correct:true },
        {text:"Dad",correct:false},
        {text:"ابويا",correct:true},
        {text:"Ahmed",correct:false },
         {text:"father",correct:false},
    ]
 

},
    {
    quistion:"who works the most?",
    answers:[
 
        {text:"Mama",correct:true},
        {text:"sama",correct:true},
        {text:"yousef",correct:false },
         {text:"serag",correct:false},
    ]
  
},   {
    quistion:"What is my favourite game",
    answers:[
         {text:"Rocket league",correct:true },
        {text:"Genshin impact",correct:false},
        {text:"roblox",correct:false},
        {text:"pubg",correct:false },
    
    ]


},
  {
    quistion:"who i like the most?",
    answers:[
         {text:"mama",correct:true },
        {text:"baba",correct:true},
        {text:"serag",correct:false},
        {text:"sama",correct:false },
    
    ]
 

},
 {
    quistion:"Who I hate the most",
    answers:[
         {text:"mama",correct:false },
        {text:"baba",correct:false},
        {text:"serag",correct:true},
        {text:"sama",correct:true },
    
    ]
 

},
 {
    quistion:"What is serags favourite game",
    answers:[
         {text:"volly ball",correct:false },
        {text:"grow a garden",correct:false},
        {text:"مزرعتي السعيده",correct:true},
        {text:"cookierun kingdom",correct:false },
    
    ]
 

},
];
const quistionele = document.getElementById("quistion")
const answerbtns = document.getElementById("answer")
const next = document.getElementById("next")
let currentquisindex = 0;
let score =0;
function startquiz(){
    currentquisindex = 0;
    score=0;
    next.innerHTML="Next"
    showquis()
}

function showquis(){
    resetstate();
let currentquis = quists[currentquisindex];
let quisno = currentquisindex+1;
quistionele.innerHTML = quisno +" . "+currentquis.quistion;

currentquis.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerbtns.appendChild(button);
    if(answer.correct){
    button.dataset.correct= answer.correct
    }
    button.addEventListener("click",selectanswer)
});
}
function resetstate(){
    next.style.display="none"
    while(answerbtns.firstChild){
        answerbtns.removeChild(answerbtns.firstChild)
    }
}
function selectanswer(e){
let selecedtbtn = e.target;
let isCorrect = selecedtbtn.dataset.correct ==="true";
if(isCorrect){
    selecedtbtn.classList.add("correct")
    score++;
    }    else {
        selecedtbtn.classList.add("incorrect")
}
Array.from(answerbtns.children).forEach(btn =>{
   if(btn.dataset.correct ==="true"){
btn.classList.add("correct")
   } 
   btn.disabled=true;
})
next.style.display="block"
disabled =true;
};

next.addEventListener("click",()=>{
    if(currentquisindex<quists.length){
    nextbutton() 
    }
    else{startquiz()}
})
function showscore(){
    resetstate();
     if(score <= quists.length/2) quistionele.innerHTML=`Your score is ${score} / ${quists.length}! , try learning from your mistakes`
 else  quistionele.innerHTML=`Your score is ${score} / ${quists.length}, Great job ! `
  
 next.innerHTML = "play again"
 next.style.display = "block"
}
function nextbutton(){
currentquisindex++;
if(currentquisindex < quists.length){
    showquis();

}else{
    showscore()
}
}
startquiz();