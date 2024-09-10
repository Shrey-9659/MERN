let heading = document.getElementById("heading")
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let textChange;
start.addEventListener("click", function(){
    textChange = setTimeout(function(){
        heading.innerHTML = "I have been changed using JS"
    },2500)
})

stop.addEventListener("click", function(){
    clearTimeout(textChange)
})
