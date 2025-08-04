const inputBox = document.getElementById("input-box")
const listcon = document.getElementById("list-container")
// check if the input is empty or add the li x and append it to ul and empty it

function addTask(){
if(inputBox.value === '')alert("you must write somthing")
else {
    let li = document.createElement("li")
    li.innerHTML = inputBox.value
    listcon.appendChild(li);
let span = document.createElement("span")
span.innerHTML="\u00d7";
li.appendChild(span)
}
inputBox.value = "";
savedata();
}

// if li is clicked add check class or if span clicked remove li element
listcon.addEventListener("click",function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle("check");
savedata();

}else if(e.target.tagName === "SPAN"){
   setTimeout(() => {
    e.target.parentElement.remove();
savedata();

   }, 250); 
}
    },false
)
//local storage set with data and get it 
function savedata(){
    localStorage.setItem("data1",listcon.innerHTML); 
}
function showtask(){
    listcon.innerHTML = localStorage.getItem("data1")
}
showtask()