const square=document.querySelectorAll(".square")
const mole=document.querySelectorAll(".mole")
const timeleft=document.querySelector("#time-left")
let score=document.querySelector("#score")
let result=0;

let currentTime=timeleft.textContent



function randomSquare(){
    console.log("working")
    square.forEach(className=>{
        console.log(1)
        className.classList.remove('mole')
    })
    let randomPosition=square[Math.floor(Math.random()*9)]
        randomPosition.classList.add("mole")

        //assign the id of the random position to hitposition for us to use later
     hitposition=randomPosition.id
}

square.forEach(id=>{
    id.addEventListener("mouseup",()=>{
        if (id.id==hitposition){
            result+=1
            score.textContent=result
        }
    })
})
function moveMole(){
    let timerId=null;
    timerId=setInterval(randomSquare,1000)
}
moveMole()

function countdown(){
    currentTime--
    timeleft.textContent=currentTime
    if(currentTime===0){
        clearInterval(timerId)
        alert("Game Over Your Score is"+result)
    }
}
                                                               let timerId=setInterval(countdown,1000)


