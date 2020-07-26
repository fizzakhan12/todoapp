
var b = document.getElementById("list")


function to_do(){
var ab = document.getElementById("todo")
var c = document.createElement('li')
var text= document.createTextNode(ab.value)
c.appendChild(text)
b.appendChild(c)
ab.value = ""
var btn = document.createElement("button")
var name = document.createTextNode("Delete")
btn.appendChild(name)
c.appendChild(btn)
btn.setAttribute("class","btn12")

btn.setAttribute("onclick","del(this)")
var edit = document.createElement("button")
var name1 = document.createTextNode("Edit")
edit.setAttribute("class","btn1")
edit.appendChild(name1)
c.appendChild(edit)
edit.setAttribute("onclick","editbtn(this)")
}

function del(e)
{
  e.parentNode.remove()

}

function deleteall(){
    list.innerHTML = ""

}

function editbtn(e){
   console.log(e.parentNode.firstChild.nodeName) 
var a= prompt("enter a name", e.parentNode.firstChild.nodeValue)
e.parentNode.firstChild.nodeValue = a


}