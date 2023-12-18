let preResult = 0;
let operations = ['decimal', 'divide', 'multiply', 'substract', 'add']
let workingOperations = ''

function updateDisplay(input){

   let display = document.getElementById("display");

   if(display.innerHTML === "0" && operations.indexOf(input) === -1){
    display.innerHTML = input;
    }else if(operations.indexOf(input) >= 0){
        workingOperations = input
        preResult = display.innerHTML;
        display.innerHTML  = 0;
    }else if(input === "equals"){
        display.innerHTML = calculate(parseFloat(preResult), parseFloat(display.innerHTML), workingOperations);
        result = display.innerHTML;
    }else{
        display.innerHTML += input;
    }
   }
   
function calculate(firsnum, secnum, operation){
    let res = "";
    switch (operation) {
        case "add":
            res = firsnum + secnum
            break;
    
        default:
            break;
    }
    return res
}


function clearDisplay(){
    let display = document.getElementById("display");
    display.innerHTML = 0;
}