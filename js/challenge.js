
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
    console.log("minus")
    counterInt -= 1
    counter.innerText = counterInt
} )

plus.addEventListener("click", function() {
    counterInt += 1
    counter.innerText = counterInt
} )

heart.addEventListener("click", function() {
    const ul = document.querySelector(".likes")
    const likes = ul.children

    if (likes.length > 0) {
        const splitLikes = likes[0].innerText.split(" ")
        const num1 = parseInt(splitLikes[0])
        let num2 = parseInt(splitLikes[4])

        if (num1 === counterInt) {

        } else {
            const li = document.createElement("li")
            
            li.innerText = `${counterInt} has been liked ${num2 += 1} times`
            ul.append(li)
        }
    } else {
        const li = document.createElement("li")
            
        li.innerText = `${counterInt} has been liked 1 times`
        ul.append(li)
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



