document.getElementbyID("reversedStringForm").addEventListener("submit", function(event){
    event.preventDefault();

    var inputText = document.getElementByID("input").value;
    var result = ""
    
    for( var i = inputText.length-1; i>=0; i --) {
        reversed += inputText[i];
    }
    document.getElementByID("reversedString").textContent = reversed;
});