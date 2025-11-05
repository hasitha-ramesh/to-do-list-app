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
  saveData()
}

listContent.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false );

function saveData(){
  localStorage.setItem("data", listContent.innerHTML);
}
function showData(){
  listContent.innerHTML = localStorage.getItem("data");
}
showData();