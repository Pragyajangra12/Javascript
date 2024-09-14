const input2= document.getElementById("input1");
const listContainer= document.getElementById("list-container");
function clear(){
    input2.value="";
   
}
function display(){
    if(input2.value==""){
        alert("Enter something");
    }else{
    let li= document.createElement("li");
    li.innerHTML=input2.value;
    li.onclick = function() {
        this.remove();
    };
    listContainer.appendChild(li);
    }
    input2.value="";
}
