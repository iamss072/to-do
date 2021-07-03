let plbt = document.querySelector(".material-icons");
let taksitem = document.querySelector(".task-container");
let taskadding = false;
let input = document.querySelector(".task-input");
let hr = document.querySelector(".headwrapper");
let list=document.querySelector(".tasklist");
plbt.addEventListener("click", function (e) {
    if (!taskadding) {
        plbt.classList.add("clicked");
        taksitem.classList.remove("togclass");
        taskadding = true;
        input.focus();
    }
    else {
        plbt.classList.remove("clicked");
        taksitem.classList.add("togclass");
        taskadding = false;
    }

})
let sub = document.querySelector(".submit");
input.addEventListener("keypress",function(e){
    if(e.key=="Enter"){
        addtask();
    }
})
sub.addEventListener("click", function (e) {
    addtask();
})
function addtask(){
    let now=JSON.stringify(new Date());
    // console.log(now);
    let ele=now.split("T");
    console.log(ele);
    if (input.value != "") {
        createtask(input.value,ele[0]);
        input.value = "";
        
        input.focus();
    }
    else{
        let alertdiv=document.createElement("div");
        alertdiv.innerText="Empty task can't be added";
        alertdiv.classList.add("empty-alert");
        hr.appendChild(alertdiv);
        setTimeout(() => {
            alertdiv.remove();
        }, 1000);
        input.focus();
    }
}

function createtask(inval,date){
    // let item = `<div class="task-item">
    //             <div class="task">${input.value}</div>
    //             <div class="material-icons completion">done_all</div>
    //         </div>`;
    let tasklistitem=document.createElement('div');
    tasklistitem.classList.add('task-item');
    let newtask=document.createElement('div');
    newtask.classList.add('task');
    newtask.innerHTML=inval;
    let datecard=document.createElement('div');
    datecard.innerHTML=date;
    let delbut=document.createElement('div');
    delbut.classList.add('material-icons');
    delbut.classList.add('completion');
    delbut.innerHTML="done_all";
    // console.log(tasklistitem);
    tasklistitem.appendChild(datecard);
    tasklistitem.appendChild(newtask);
    tasklistitem.appendChild(delbut);
    
    list.appendChild(tasklistitem);
    delbut.addEventListener("click",function(e){
        this.parentNode.remove();
    })
}
