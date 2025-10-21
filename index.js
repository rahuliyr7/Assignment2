//Rahul Iyer Assignment 2
//form submission
document.getElementById("reversedStringForm").addEventListener("submit", function(event){
    event.preventDefault();

    //intake input
    var inputText = document.getElementById("reversedStringInput").value;
    var reversed = ""
    
    //traverse through text backwards and add letter
    for( var i = inputText.length-1; i>=0; i --) {
        reversed += inputText[i];
    }
    //provide reversed string
    document.getElementById("reversedString").textContent = reversed;
    console.log("Reversed String:", reversed);
});


//Palindrome Checker
//form submission
document.getElementById("palindromeCheckerForm").addEventListener("submit", function(event){
    event.preventDefault();
    //intake input num
    var inputNum = document.getElementById("palindromeCheckInput").value;
    var userInputNum = ""
    
    // only digits exclude spaces or extra char
    for( var i = inputNum.length-1; i>=0; i --) {
        var ni = inputNum[i];
        if (ni >= "0" && ni <="9"){
            userInputNum += ni;
        }
    }
//see if num reads same both ways
    var palindromeCheck = true;
    for(var y = 0; y < userInputNum.length /2; y++){
        if(userInputNum[y] !== userInputNum[userInputNum.length-1-y]){
            palindromeCheck = false;
            break;
        }
    }
//provide message based on result
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

// Tip Calculator
//form submission
document.getElementById("tipCalculatorForm").addEventListener("submit", function(event){
    event.preventDefault();
  //intake subtotal
    var subTotal = parseFloat(document.getElementById("billSubtotal").value);
    // check  validity
    if (isNaN(subTotal) || subTotal <= 0) {
      alert("enter a valid bil total");
      return;
    }
  
    // check if manual tip entered 
    var percentageTip = 20; // def
    var tipBox = document.getElementById("tipPercentage");
   
    if (tipBox && tipBox.value !== "") {
      var typed = parseFloat(tipBox.value);
      if (!isNaN(typed) && typed >= 0) {
        percentageTip = typed;
      }
    }
  
    // calculate
    var tip = subTotal * (percentageTip / 100);
    var total = subTotal + tip;

    //round
    subTotal = parseFloat(subTotal.toFixed(2));
    tip = parseFloat(tip.toFixed(2));
    total = parseFloat(total.toFixed(2));

  
    // update and provide results
    document.getElementById("finalSubtotal").textContent = " $" + subTotal.toFixed(2);
    document.getElementById("finalTip").textContent = " $" + tip.toFixed(2);
    document.getElementById("finalTotal").textContent = " $" + total.toFixed(2);
    document.getElementById("completed").textContent = "total with " + percentageTip + "% tip is $" + total.toFixed(2);
  
    console.log("Tip %:", percentageTip);
  });
  