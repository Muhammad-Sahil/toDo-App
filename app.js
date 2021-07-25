var a = document.getElementById("full")
// var input = document.getElementById("inp")
function foo(){
    var newElement = document.createElement("P")
    var text = inp.value
    text = document.createTextNode(text)
    newElement.appendChild(text)
    a.appendChild(newElement)

    var editBtn = document.createElement("BUTTON")
    var editBtnText = document.createTextNode("edit")
editBtn.appendChild(editBtnText)
editBtn.setAttribute("onclick","editTodo(this)")
newElement.appendChild(editBtn)


var deleteBtn = document.createElement("BUTTON")
var deleteBtnText = document.createTextNode("delete")
deleteBtn.appendChild(deleteBtnText)
deleteBtn.setAttribute("onclick","deleteTodo(this)")
newElement.appendChild(deleteBtn)


}
function deleteTodo(e){
e.parentNode.remove()
}
function editTodo(e){
    e.parentNode.firstChild.nodeValue = prompt()
}