document.getElementById("reversedStringForm").addEventListener("submit", function(event){
    event.preventDefault();

    var inputText = document.getElementById("reversedStringInput").value;
    var reversed = ""
    
    for( var i = inputText.length-1; i>=0; i --) {
        reversed += inputText[i];
    }
    document.getElementById("reversedString").textContent = reversed;
    console.log("Reversed String:", reversed);
});

document.getElementById("palindromeCheckerForm").addEventListener("submit", function(event){
    event.preventDefault();

    var inputNum = document.getElementById("palindromeCheckInput").value;
    var userInputNum = ""
    
    for( var i = inputNum.length-1; i>=0; i --) {
        var ni = inputNum[i];
        if (ni >= "0" && ni <="9"){
            userInputNum += ni;
        }
    }

    var palindromeCheck = true;
    for(var y = 0; y < userInputNum.length /2; y++){
        if(userInputNum[y] !== userInputNum[userInputNum.length-1-y]){
            palindromeCheck = false;
            break;
        }
    }

    var palindromeCheckMessage ="";
    if(userInputNum.length === 0){
        palindromeCheckMessage ="Please enter a number before checking";
    }
    else if (palindromeCheck){
        palindromeCheckMessage = inputNum + " is a palindrome"
    }
    else {
         palindromeCheckMessage = inputNum + " is not a palindrome"
    }
    
    document.getElementById("palindromeCheckerResult").textContent = palindromeCheckMessage;
    console.log("Palindrome Check:", palindromeCheckMessage);
});

document.getElementById("tipCalculatorForm").addEventListener("submit", function(event){
    event.preventDefault();

    var subTotal = parseFloat(document.getElementById("billSubtotal").value);
    var percetageTip = 20 //def
    var tipBox = document.getElementById("tipPercentage");
    

    if(isNaN(subTotal) || subTotal <= 0){
        alert("enter a valid bil total");
        return;
    
    }

   
    if (tipBox && tipBox.value ! ==""){
        var typed = parseFloat(tipBox.value);
        if(!NaN(typed)&& typed >= 0){
            percetageTip = typed;
        }
    }

    tip = subTotal *(percetageTip/100);
    overallTotal = subTotal + tip;

    document.getElementById("finalSubtotal").textContent =" $"+ subTotal;
    document.getElementById("finalTip").textContent =" $"+ tip;
    document.getElementById("finalTotal").textContent =" $"+ overallTotal;
    document.getElementById("completed").textContent = "your total with "+ percetageTip + " tip is " + overallTotal;

}




