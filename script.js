let object = document.getElementById("object")
let winMessage = document.getElementById("win")
let restart = document.getElementById("restart")

object.addEventListener("click", win)

function win(){
    object.setAttribute("class" , "hidden")
winMessage.setAttribute("class","")
    
}


