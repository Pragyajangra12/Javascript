function display(value){
    document.getElementById('text1').value+=value;
}
function cleardisplay(){
    var result=document.getElementById('text1').value;
    document.getElementById('text1').value=result.slice(0,-1);
}
function clearscreen(){
    document.getElementById('text1').value='';
}

function calculate(){
    try{
        var x= eval(document.getElementById('text1').value);
        document.getElementById('text1').value=x;
}catch(error){
    document.getElementById('text1').value='Error';
}
}