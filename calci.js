
const inputBox = document.querySelector("#result");
const buttons = document.querySelectorAll("button");

let operators = ["%", "x", "/", "+", "-", "+/-"];
let output = "";

buttons.forEach(function(btn){
    btn.addEventListener("click", function(elem) {
        calculate(elem.target.dataset.value)
    })
})

function calculate(btnValue){

    if(btnValue === "="){
        try{
            output = eval(output.replace('x','*').replace('%', '/100'));
            inputBox.value = output;
        }
        catch(err){
            inputBox.value = 'Error';
        }
    }

    else if(btnValue === "AC"){
        output = "";
        inputBox.value = output;
    }

    else if(btnValue === "DEL"){
        output = output.slice(0, -1);
        inputBox.value = output;
    }

    else {
            if(operators.includes(btnValue)){
                
                if(operators.includes(output.slice(-1))){
                    output = output.slice(0, -1);
                    inputBox.value = output;
                }
                output += btnValue;
                inputBox.value = output;
            }
            else{
                output += btnValue;
                inputBox.value = output;
            }
        }
}
    



    