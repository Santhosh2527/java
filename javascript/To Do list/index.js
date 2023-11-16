"use strict"

var restore=null

let div1=document.querySelector("#input")
let button=document.querySelector("#btn")
let empty=document.querySelector(".innercontainer2")

button.addEventListener("click",submitbtn)
 
function submitbtn()
{
    if(restore==null){
    
    let value=document.createElement("div")
    let list=document.createElement("li")
    list.innerText=input.value

    let edit=document.createElement("button")
    edit.innerText="edit"
    edit.id="ed" 
    edit.addEventListener("click",function(){
        editfunction(this)
    })
    

    let dlt=document.createElement("button")
    dlt.innerText="delete"  
    dlt.id="del"

    dlt.addEventListener("click",deletebtn)
    
    function deletebtn()
    {
        dlt.parentElement.remove()
    }    
    value.append(list)
    // value.append(edit)
    value.append(edit,dlt)
    empty.append(value)
    input.value=" "
    }
    else{
        editrestore()
    }
    let clearbtn=document.getElementById("clear")
    clearbtn.addEventListener("click",clear)

    function clear()
    {
        clearbtn.parentElement.remove()
        empty.append(clearbtn)
    }
    function editfunction(x)
    {
        restore=x.parentElement.childNodes
        input.value=restore[0].innerText
    }
    function editrestore()
    {
        restore[0].innerText=input.value
        input.value=" "
        restore=null
    }
}

