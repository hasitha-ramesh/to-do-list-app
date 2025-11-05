const inputText = document.getElementById("inputText");
const listContent = document.getElementById("listContent");

function addText() {
  if (inputText.value == "") {
    alert("You must write something!");
  } else {
    const li = document.createElement("li");
    li.innerHTML = inputText.value;
    listContent.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputText.value = "";
}

listContent.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false );