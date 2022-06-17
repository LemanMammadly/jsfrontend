//task1
let button=document.getElementById("btn")

button.onclick=function(){
    let input=document.getElementById("input")
    let inputvalue=input.value;
    var div=document.createElement("div")
    div.setAttribute("class","div1")
    document.body.appendChild(div)
    var h1=document.createElement("h1")
    h1.setAttribute("class","h1")
    div.appendChild(h1)
    var span=document.createElement("span")
    span.setAttribute("class","span")
    div.appendChild(span)
    span.innerHTML="DELETE"
    h1.innerHTML=inputvalue;
    span.onclick=function(){
    span.parentElement.remove();
    }
}


//task2
window.addEventListener('contextmenu',function(e){
    e.preventDefault()
  })