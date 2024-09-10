let heading = document.getElementById('heading');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let isMyTimerActive = false;
let timer;
let count = 0;

start.addEventListener("click", ()=>{
    if(isMyTimerActive) return;

    timer = setInterval(()=>{
        heading.innerHTML = `Timer : ${count}`;
        count++
    }, 1000)
    isMyTimerActive = true;
})

stop.addEventListener("click", ()=>{
    isMyTimerActive = false;
    clearInterval(timer)
})

reset.addEventListener("click", ()=>{
    isMyTimerActive = false;
    clearInterval(timer)
    count = 0;
    heading.innerHTML = `Timer`;
})