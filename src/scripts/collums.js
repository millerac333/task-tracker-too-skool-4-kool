const fragment = document.createDocumentFragment()
const art = document.querySelector(".columns")

const ColumnDiv1 = document.createElement("div")
ColumnDiv1.className = "column1"
ColumnDiv1.textContent= "Create Task Here"
fragment.appendChild(ColumnDiv1)

console.log(ColumnDiv1)
document.querySelector("#columns").appendChild(fragment)

//column2




const ColumnDiv2 = document.createElement("div")
ColumnDiv2.className = "column2"
ColumnDiv2.textContent= "Create Task Here"
fragment.appendChild(ColumnDiv2)

console.log(ColumnDiv2)
document.querySelector("#columns").appendChild(fragment)

//column3




const ColumnDiv3 = document.createElement("div")
ColumnDiv3.className = "column3"
ColumnDiv3.textContent= "Create Task Here"
fragment.appendChild(ColumnDiv3)

console.log(ColumnDiv3)
document.querySelector("#columns").appendChild(fragment)