
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
}

module.exports = createTask;

