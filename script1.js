let stars = document.getElementById("stars")
let moon = document.getElementById("moon")
let mon1 = document.getElementById("mon1")
let mon2 = document.getElementById("mon2")
let river = document.getElementById("river")
let boat = document.getElementById("boat")
let mon3 = document.getElementById("mon3")
let Nouvil = document.querySelector(".Nouvil")
let main = document.querySelector(".main")

window.onscroll = function scroll(){
    addEventListener("scroll",function(){
       let val = scrollY;
      stars.style.left = val+'px'
      moon.style.top=val*3.3+'px'
      mon1.style.top=val*1.8+'px'
      mon2.style.top=val*1.5+'px'
      river.style.top=val+'px'
      boat.style.top=val*1.15+'px'
      boat.style.left=val*2+'px'
      Nouvil.style.fontSize=val/3+'px'
      Nouvil.style.position="fixed"
      if(val>200){Nouvil.style.fontSize=67+'px'
      if(scrollY>=412)Nouvil.style.display="none"
else{
      Nouvil.style.display="block"}
      if(val>=230)main.style.background="linear-gradient(#376281,#10001f)"
      else{main.style.background="linear-gradient(rgb(63, 0, 63),rgb(65, 0, 65))"
  }
      }
      

    }

)
}