"use strict"

let div1=document.createElement('div')
div1.className='container'
console.log(div1)
let div2=document.createElement('div')
div2.className='box'
console.log(div2)
let btn1=document.createElement('button')
btn1.innerText='next'
btn1.id='innerbtn1'
console.log(btn1)
let btn2=document.createElement('button')
btn2.innerText='previous'
btn2.id='innerbtn2'
let image=document.createElement('img')
image.src='marvel.png'
console.log(btn2)
let pic=document.createElement('div')
pic.setAttribute("class","imagefile")

div1.append(pic)
div1.append(div2)
div2.append(btn1,btn2)

pic.append(image)
document.body.append(div1)
var a=0
let images=['marvel.png','ironman.jpeg','captain.jpeg','thor.jpg','hulk.jpeg','vision.jpeg','wanda.jpeg'
,'thanos.jpeg','rocket.jpeg','hawkeye.jpeg','marvel.team.jpeg']

btn1.addEventListener('click',change)
function change()
{
    if(a==10)
    {
        a=0;
    }
    else{
        document.body.style.backgroundColor=images[a]
        a=a>images.length-1 ? 0 : a + 1 
        image.src=images[a]
    }
  
}

btn2.addEventListener('click',previous)
function previous()
{
    if(a==0)
    {
        a=10
    }
    else{
        document.body.style.backgroundColor=images[a]
        a=a>images.length-1 ? 0 : a - 1 
        image.src=images[a]
    }
}
