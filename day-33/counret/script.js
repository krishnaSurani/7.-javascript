
let counter = 0
let a;

document.getElementById("start").addEventListener("click",()=>{
   a =  setInterval(()=>{
        counter++
        document.querySelector("#value").innerText = counter
    },500)
    
})


document.getElementById("stop").addEventListener("click",()=>{
    clearInterval(a)
    alert("Counter Stopped!!!")
})