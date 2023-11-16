"use stirct"

let circle1=document.getElementById("circle-1")
let circle2=document.getElementById("circle-2")
let circle3=document.getElementById("circle-3")
let time=document.getElementById("timer")

let signal=0
let redcount=10
let yellowcount=5
let greencount=10

function input()
{
    if (signal<11)
    {
        circle1.classList.add("r")
        circle3.classList.remove("g")
        // circle1.style.backgroundColor="red"
        // circle2.style.backgroundColor=""
        // circle3.style.backgroundColor=""
        time.innerText=redcount
        redcount--
    }
    else if(signal>11 && signal<=17)
    {
        circle2.classList.add("y")
        circle1.classList.remove("r")
        // circle1.style.backgroundColor=""
        // circle2.style.backgroundColor="yellow"
        // circle3.style.backgroundColor=""
        time.innerText=yellowcount
        yellowcount--
    }
    else if (signal>17 && signal<=28)
    {
        circle3.classList.add("g")
        circle2.classList.remove("y")
        // circle1.style.backgroundColor=""
        // circle2.style.backgroundColor=""
        // circle3.style.backgroundColor="green"
        time.innerText=greencount
        greencount--
    }
    if (signal==28)
    {
         signal=0
         redcount=10
         yellowcount=5
        greencount=10

    }
    signal++
}
setInterval(input,1000)

// ------------------------------------------------------

// let circle1=document.getElementById("circle-1")
// let circle2=document.getElementById("circle-2")
// let circle3=document.getElementById("circle-3")
// let time=document.getElementById("timer")

// circle1.addEventListener("mouseover",round1)
// function round1()
// {
//     circle1.style.backgroundColor="red"
//     circle2.style.backgroundColor="gray"
//     circle3.style.backgroundColor="gray"
// }

// circle2.addEventListener("mouseover",round2)
// function round2()
// {
//     circle1.style.backgroundColor="gray"
//     circle2.style.backgroundColor="yellow"
//     circle3.style.backgroundColor="gray"
// }

// circle3.addEventListener("mouseover",round3)
// function round3()
// {
//     circle1.style.backgroundColor="gray"
//     circle2.style.backgroundColor="gray"
//     circle3.style.backgroundColor="green"
// }


