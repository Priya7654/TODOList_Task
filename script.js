const Item = document.querySelector("#item")
const ToDoBox = document.querySelector("#todo-box")

Item.addEventListener(
    "keyup",
    function (enent) {
        if (event.key == "Enter") {
          addToDo(this.value)
            this.value = ""
        }
    }
)
const addToDo = (Item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${Item} 
   <i class="fas fa-times"></i>`;

   listItem.addEventListener(
    "click",
    function(){
        this.classList.toggle("done")
    }
   )

   listItem.querySelector("i").addEventListener(
    "click", function(){
        listItem.remove()
    }
   )
    ToDoBox.appendChild(listItem)
}