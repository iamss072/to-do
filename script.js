let plbt=document.querySelector(".material-icons");
let taksitem=document.querySelector(".task-container");
let taskadding=false;
let input=document.querySelector(".task-input");
let hr=document.querySelector(".headwrapper");
plbt.addEventListener("click",function(e){
    // console.log(e);
    if(!taskadding){
        plbt.classList.add("clicked");
        taksitem.classList.remove("togclass");
        taskadding=true;
        input.focus();
    }
    else{
        plbt.classList.remove("clicked");
        taksitem.classList.add("togclass");
        taskadding=false;
    }
    
})
let sub=document.querySelector(".submit");
sub.addEventListener("click",function(e){
    
    console.log(input.value);
    let item=`<div class="task-item">
                <div class="task">${input.value}</div>
                <div class="material-icons completion">done_all</div>
            </div>`;
    document.querySelector(".tasklist").innerHTML+=item;
    input.value="";
    input.focus();
})
let todel=document.querySelectorAll(".task-item");
console.log(todel);
for(let i=0;i<todel.length;i++){
    todel[i].addEventListener("click",function(e){
        console.log(e.target);
    })
}
