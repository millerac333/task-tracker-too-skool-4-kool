(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// //column1
// const fragment = document.createDocumentFragment()
// const art = document.querySelector(".columns")

// const ColumnDiv1 = document.createElement("div")
// ColumnDiv1.className = "column1"
// ColumnDiv1.textContent= "Create Task Here"
// fragment.appendChild(ColumnDiv1)

// console.log(ColumnDiv1)
// document.querySelector("#columns").appendChild(fragment)


// //column2
// const ColumnDiv2 = document.createElement("div")
// ColumnDiv2.className = "column2"
// ColumnDiv2.textContent= "Create Task Here"
// fragment.appendChild(ColumnDiv2)

// console.log(ColumnDiv2)
// document.querySelector("#columns").appendChild(fragment)


// //column3
// const ColumnDiv3 = document.createElement("div")
// ColumnDiv3.className = "column3"
// ColumnDiv3.textContent= "Create Task Here"
// fragment.appendChild(ColumnDiv3)

// console.log(ColumnDiv3)
// document.querySelector("#columns").appendChild(fragment)
},{}],2:[function(require,module,exports){
const localStorageFunctions = require("./localStorage");
console.log(localStorageFunctions);


const taskData = [];

let taskPrototype = Object.create(null, {
    Task_Name: {
        value: "",
        enumerable: true,
        writable: true
    },
    Description: {
        value: "",
        enumerable: true,
        writable: true
    },
    Due_Date: {
        value: {},
        enumerable: true,
        writable: true
    },
    Date_Created: {
        value: {},
        enumerable: true,
        writable: true,
    },
    Task_Location: {
        value: "TO DO",
        enumerable: true,
        writable: true
    }
})

const createTask = (tName, tDescription, tDate, ctDate, tlocation) => {
    const newTask = Object.create(taskPrototype)

    newTask.Task_Name = tName
    newTask.Description = tDescription
    newTask.Due_Date = tDate
    newTask.Date_Created = ctDate
    newTask.Task_Location = tlocation
    taskData.push(newTask)
    localStorageFunctions.saveDatabase(taskData, "Task Array")
}


createTask("asdfde", "dfasefes", "sdfasdf")
createTask("feed the dog", "two cups from the yellow bag", "6/21/2018", "6/19/2018", "To Do")

console.log(taskData);

module.exports = createTask;


},{"./localStorage":4}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
let localStorageFunctions = Object.create({}, {
    saveDatabase: {
        value: function (databaseObject, localStorageKey) {
            const stringData = JSON.stringify(databaseObject)
            localStorage.setItem(localStorageKey, stringData)
        }
    },
    loadDatabase: {
        value: function (localStorageKey) {
            const dataString = localStorage.getItem(localStorageKey)
            return JSON.parse(dataString)
        }
    }
}
)

console.log(localStorageFunctions);

module.exports = localStorageFunctions

},{}],5:[function(require,module,exports){

},{}]},{},[1,2,3,4,5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY3JpcHRzL2NvbHVtbnMuanMiLCJzY3JpcHRzL2NyZWF0ZVRhc2suanMiLCJzY3JpcHRzL2Zvcm0uanMiLCJzY3JpcHRzL2xvY2FsU3RvcmFnZS5qcyIsInNjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyAvL2NvbHVtbjFcbi8vIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG4vLyBjb25zdCBhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbHVtbnNcIilcblxuLy8gY29uc3QgQ29sdW1uRGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbi8vIENvbHVtbkRpdjEuY2xhc3NOYW1lID0gXCJjb2x1bW4xXCJcbi8vIENvbHVtbkRpdjEudGV4dENvbnRlbnQ9IFwiQ3JlYXRlIFRhc2sgSGVyZVwiXG4vLyBmcmFnbWVudC5hcHBlbmRDaGlsZChDb2x1bW5EaXYxKVxuXG4vLyBjb25zb2xlLmxvZyhDb2x1bW5EaXYxKVxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb2x1bW5zXCIpLmFwcGVuZENoaWxkKGZyYWdtZW50KVxuXG5cbi8vIC8vY29sdW1uMlxuLy8gY29uc3QgQ29sdW1uRGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbi8vIENvbHVtbkRpdjIuY2xhc3NOYW1lID0gXCJjb2x1bW4yXCJcbi8vIENvbHVtbkRpdjIudGV4dENvbnRlbnQ9IFwiQ3JlYXRlIFRhc2sgSGVyZVwiXG4vLyBmcmFnbWVudC5hcHBlbmRDaGlsZChDb2x1bW5EaXYyKVxuXG4vLyBjb25zb2xlLmxvZyhDb2x1bW5EaXYyKVxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb2x1bW5zXCIpLmFwcGVuZENoaWxkKGZyYWdtZW50KVxuXG5cbi8vIC8vY29sdW1uM1xuLy8gY29uc3QgQ29sdW1uRGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbi8vIENvbHVtbkRpdjMuY2xhc3NOYW1lID0gXCJjb2x1bW4zXCJcbi8vIENvbHVtbkRpdjMudGV4dENvbnRlbnQ9IFwiQ3JlYXRlIFRhc2sgSGVyZVwiXG4vLyBmcmFnbWVudC5hcHBlbmRDaGlsZChDb2x1bW5EaXYzKVxuXG4vLyBjb25zb2xlLmxvZyhDb2x1bW5EaXYzKVxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb2x1bW5zXCIpLmFwcGVuZENoaWxkKGZyYWdtZW50KSIsImNvbnN0IGxvY2FsU3RvcmFnZUZ1bmN0aW9ucyA9IHJlcXVpcmUoXCIuL2xvY2FsU3RvcmFnZVwiKTtcbmNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZUZ1bmN0aW9ucyk7XG5cblxuY29uc3QgdGFza0RhdGEgPSBbXTtcblxubGV0IHRhc2tQcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBUYXNrX05hbWU6IHtcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBEZXNjcmlwdGlvbjoge1xuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuICAgIER1ZV9EYXRlOiB7XG4gICAgICAgIHZhbHVlOiB7fSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuICAgIERhdGVfQ3JlYXRlZDoge1xuICAgICAgICB2YWx1ZToge30sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIH0sXG4gICAgVGFza19Mb2NhdGlvbjoge1xuICAgICAgICB2YWx1ZTogXCJUTyBET1wiLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH1cbn0pXG5cbmNvbnN0IGNyZWF0ZVRhc2sgPSAodE5hbWUsIHREZXNjcmlwdGlvbiwgdERhdGUsIGN0RGF0ZSwgdGxvY2F0aW9uKSA9PiB7XG4gICAgY29uc3QgbmV3VGFzayA9IE9iamVjdC5jcmVhdGUodGFza1Byb3RvdHlwZSlcblxuICAgIG5ld1Rhc2suVGFza19OYW1lID0gdE5hbWVcbiAgICBuZXdUYXNrLkRlc2NyaXB0aW9uID0gdERlc2NyaXB0aW9uXG4gICAgbmV3VGFzay5EdWVfRGF0ZSA9IHREYXRlXG4gICAgbmV3VGFzay5EYXRlX0NyZWF0ZWQgPSBjdERhdGVcbiAgICBuZXdUYXNrLlRhc2tfTG9jYXRpb24gPSB0bG9jYXRpb25cbiAgICB0YXNrRGF0YS5wdXNoKG5ld1Rhc2spXG4gICAgbG9jYWxTdG9yYWdlRnVuY3Rpb25zLnNhdmVEYXRhYmFzZSh0YXNrRGF0YSwgXCJUYXNrIEFycmF5XCIpXG59XG5cblxuY3JlYXRlVGFzayhcImFzZGZkZVwiLCBcImRmYXNlZmVzXCIsIFwic2RmYXNkZlwiKVxuY3JlYXRlVGFzayhcImZlZWQgdGhlIGRvZ1wiLCBcInR3byBjdXBzIGZyb20gdGhlIHllbGxvdyBiYWdcIiwgXCI2LzIxLzIwMThcIiwgXCI2LzE5LzIwMThcIiwgXCJUbyBEb1wiKVxuXG5jb25zb2xlLmxvZyh0YXNrRGF0YSk7XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlVGFzaztcblxuIiwibGV0IGNhcmRIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhcmRcIilcblxuY29uc3QgY3JlYXRlVGFza0Zvcm0gPSAoKSA9PiB7XG5cbiBsZXQgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiBjYXJkRGl2LmlkID0gXCJjYXJkXCJcbiBjYXJkRGl2LnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCB0cnVlKVxuLy8gIGNhcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFsZXJ0KFwiSGlcIikpXG5cbiBsZXQgaW5wdXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gaW5wdXROYW1lLnR5cGUgPSBcInRleHRcIlxuIGlucHV0TmFtZS5jbGFzc05hbWUgPSBcIm5hbWVJbnB1dFwiXG4gY2FyZERpdi5hcHBlbmRDaGlsZChpbnB1dE5hbWUpXG5cbiBsZXQgaW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuIGlucHV0RGVzY3JpcHRpb24udHlwZSA9IFwidGV4dFwiXG4gaW5wdXREZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcImRlc2NyaXB0aW9uSW5wdXRcIlxuIGNhcmREaXYuYXBwZW5kQ2hpbGQoaW5wdXREZXNjcmlwdGlvbilcblxuIGxldCBpbnB1dER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiBpbnB1dER1ZURhdGUudHlwZSA9IFwiZGF0ZVwiXG4gaW5wdXREdWVEYXRlLmNsYXNzTmFtZSA9IFwiZHVlRGF0ZUlucHV0XCJcbiBjYXJkRGl2LmFwcGVuZENoaWxkKGlucHV0RHVlRGF0ZSlcblxuIGxldCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuIHNhdmVCdXR0b24udHlwZSA9IFwiXCJcblxuXG5jYXJkSG9sZGVyLmFwcGVuZENoaWxkKGNhcmREaXYpXG59XG5cbmNyZWF0ZVRhc2tGb3JtKCkiLCJsZXQgbG9jYWxTdG9yYWdlRnVuY3Rpb25zID0gT2JqZWN0LmNyZWF0ZSh7fSwge1xuICAgIHNhdmVEYXRhYmFzZToge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKGRhdGFiYXNlT2JqZWN0LCBsb2NhbFN0b3JhZ2VLZXkpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0cmluZ0RhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhYmFzZU9iamVjdClcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZUtleSwgc3RyaW5nRGF0YSlcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbG9hZERhdGFiYXNlOiB7XG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiAobG9jYWxTdG9yYWdlS2V5KSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlS2V5KVxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YVN0cmluZylcbiAgICAgICAgfVxuICAgIH1cbn1cbilcblxuY29uc29sZS5sb2cobG9jYWxTdG9yYWdlRnVuY3Rpb25zKTtcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhbFN0b3JhZ2VGdW5jdGlvbnNcbiIsIiJdfQ==
