// let count =0;

// document.getElementById("decrement-btn").onclick=function(){
//  count--
//  document.getElementById("counter").innerHTML= count

// if (count<0)
// {
//    document.getElementById("counter").style.color="red"
// }
// else if (count==0)
// {
//    document.getElementById("counter").style.color="black"
// }
// }
// document.getElementById("reset-btn").onclick=function(){
//  count=0
// document.getElementById("counter").innerHTML=count
// document.getElementById("counter").style.color="black"
// }

// document.getElementById("increment-btn").onclick=function(){
// count++
// document.getElementById("counter").innerHTML=count

// if (count>0)
// {
//    document.getElementById("counter").style.color="green"
// }
// else if (count==0)
// {
//    document.getElementById("counter").style.color="black"
// }
//    }

let count =0;

function decrement(){
 count--
 document.getElementById("counter").innerHTML= count

if (count<0)
{
   document.getElementById("counter").style.color="red"
}
else if (count==0)
{
   document.getElementById("counter").style.color="black"
}
}
function reset(){
   count=0
document.getElementById("counter").innerHTML=count
document.getElementById("counter").style.color="black"
}
function increment(){
   count++
document.getElementById("counter").innerHTML=count

if (count>0)
{
   document.getElementById("counter").style.color="green"
}
else if (count==0)
{
   document.getElementById("counter").style.color="black"
}
}

