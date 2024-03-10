
var output= document.getElementById("result")
let clearpressed = 0;
function display(arg)
{
    if(clearpressed) {
        output.value = arg; 
        clearpressed = 0;
    } else {
        output.value += arg;
    }
}

function calculate()
{
    try {
       output.value = eval(output.value) 
        
    } catch (error) {
        console.log("Error found during calculation");
    }
}

function Clear()
{
    output.value= 0;
    clearpressed =1;
}

function del()
{
    output.value = output.value.slice(0,-1);
}