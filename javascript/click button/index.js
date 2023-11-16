let clickbtn1=document.getElementById("btn1")
let clickbtn2=document.getElementById("btn2")
let clickbtn3=document.getElementById("btn3")

clickbtn1.addEventListener("click",button1)
function button1()
{
    if (clickbtn1.innerText==="click me")
    {
        clickbtn1.innerText="clicked"
        clickbtn1.style.color="white"
        clickbtn1.style.backgroundColor="green"
    }
    else if (clickbtn1.innerText==="clicked")
    {
        clickbtn1.innerText="click me"
        clickbtn1.style.color="white"
        clickbtn1.style.backgroundColor="red"
    }
}
clickbtn2.addEventListener("click",button2)
function button2()
{
    if (clickbtn2.innerText==="click me")
    {
        clickbtn2.innerText="clicked"
        clickbtn2.style.color="white"
        clickbtn2.style.backgroundColor="green"
    }
    else if (clickbtn2.innerText==="clicked")
    {
        clickbtn2.innerText="click me"
        clickbtn2.style.color="white"
        clickbtn2.style.backgroundColor="red"
    }
}
clickbtn3.addEventListener("click",button3)
function button3()
{
    if (clickbtn3.innerText==="click me")
    {
        clickbtn3.innerText="clicked"
        clickbtn3.style.color="white"
        clickbtn3.style.backgroundColor="green"
    }
    else if (clickbtn3.innerText==="clicked")
    {
        clickbtn3.innerText="click me"
        clickbtn3.style.color="white"
        clickbtn3.style.backgroundColor="red"
    }
}
