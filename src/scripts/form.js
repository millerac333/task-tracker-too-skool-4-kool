let cardHolder = document.querySelector("#card")

const createTaskForm = () => {

 let cardDiv = document.createElement("div")
 cardDiv.id = "card"
 cardDiv.setAttribute("draggable", true)
//  cardDiv.addEventListener("click", alert("Hi"))

 let inputName = document.createElement("input")
 inputName.type = "text"
 inputName.className = "nameInput"
 cardDiv.appendChild(inputName)

 let inputDescription = document.createElement("input")
 inputDescription.type = "text"
 inputDescription.className = "descriptionInput"
 cardDiv.appendChild(inputDescription)

 let inputDueDate = document.createElement("input")
 inputDueDate.type = "date"
 inputDueDate.className = "dueDateInput"
 cardDiv.appendChild(inputDueDate)

 let saveButton = document.createElement("button")
 saveButton.type = ""


cardHolder.appendChild(cardDiv)
}

createTaskForm()