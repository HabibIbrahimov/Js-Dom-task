let btnAdd=document.getElementById("btnAdd");
let input=document.getElementById("input");
let list=document.getElementById("list");

btnAdd.addEventListener("click",function(){
    let value=input.value.trim();
    if(value==""){
        alert("Do not leave empty");
        return;
    };
    let li=document.createElement("li") ;
    let li=document.createElement("i");
    
    li.classList.add("list-group-item");
    li.classList.add("test");
    li.innerText=value;
    list.appendChild(li);
    input.value="";    
})