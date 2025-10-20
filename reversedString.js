document.getElementById("reversedStringForm").addEventListener("submit", function(event){
    event.preventDefault();

    var inputText = document.getElementById("input").value;
    var reversed = ""
    
    for( var i = inputText.length-1; i>=0; i --) {
        reversed += inputText[i];
    }
    document.getElementById("reversedString").textContent = reversed;
});