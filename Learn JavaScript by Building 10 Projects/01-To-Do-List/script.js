const ListContainer=document.getElementById("list-container");
const inputBox=document.getElementById("input-box");


const addTask=()=>{

    if(inputBox.value===''){
        alert("Enter Some Data");
    }
    else{
        let li=document.createElement("Li");
        li.innerHTML=inputBox.value;
        ListContainer.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }

    inputBox.value="";
    saveTask();
}

ListContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
});

function saveTask(){
    localStorage.setItem("data",ListContainer.innerHTML);
}

function showTask(){
    ListContainer.innerHTML=localStorage.getItem("data");
}

showTask();