
document.addEventListener("DOMContentLoaded", function() {
    executeTimer()
})

function executeTimer() {
    const interval = window.setInterval(timer, 1000)
}

const counter = document.getElementById("counter")
let counterInt = parseInt(counter.innerText)
const pause = document.getElementById("pause")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const heart = document.getElementById("heart")
const form = document.getElementById("comment-form")

minus.addEventListener("click", function() {
    counterInt -= 1
    counter.innerText = counterInt
} )

plus.addEventListener("click", function() {
    counterInt += 1
    counter.innerText = counterInt
} )

heart.addEventListener("click", function (){
    const likeList = document.querySelector(".likes")
    let curCount = counter.innerText; 
    let listItem = document.querySelector(`li[data-num='${curCount}']`);
    if (listItem) {
        let spanChild = listItem.children[0];
        let numOfLikes = parseInt(spanChild.innerText, 10);
        listItem.innerHTML = `${curCount} has been liked <span>${numOfLikes + 1}</span> times`;
    } else {
        listItem = document.createElement("li");
        listItem.setAttribute("data-num", curCount);
        listItem.innerHTML = `${curCount} has been liked <span>1</span> time`;
        likeList.appendChild(listItem);
    }
})

form.addEventListener("submit", function(e){
    e.preventDefault()
    addComment(e.target.children[0].value)

})

function addComment(input) {
    const p = document.createElement("p")
    const div = document.getElementById("list")
    p.innerText = input
    div.append(p)
}




//timer increment every second once the page has loaded.
function timer() { 
    
    if (pause.innerText === "resume") {
        minus.disabled = true
        plus.disabled = true
        heart.disabled = true
        pause.addEventListener("click", function(){
        pause.innerText = "pause"
        })
    } else if (pause.innerText === "pause") {
        minus.disabled = false
        plus.disabled = false
        heart.disabled = false

        pause.addEventListener("click", function(){
            pause.innerText = "resume"
        }) 
        counterInt += 1
        counter.innerText = counterInt
    }
}



