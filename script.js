const inputText = document.getElementById("inputText");
const listContent = document.getElementById("listContent");

function addText(){
    if (inputText.value == ""){
        alert("You must write something!");
    }else{
        const li = document.createElement("li");
        li.innerHTML = inputText.value;
        listContent.appendChild(li);
    }
}