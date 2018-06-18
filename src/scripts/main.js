//* CREATED FAKE DATA: EMPTY ARRAY, PROTOTYPE, HELPER FUNCITON *//

//* I AM NOT SURE HOW WE WILL GIVE USER ABILITY TO SET DATE *//

const fakeTasks = [];

const assignDate_1 = new Date(2018, 11, 12);
const assignDate_2 = new Date(2018, 12, 11);
const assignDate_3 = new Date(2018, 10, 10);

console.log(assignDate_1);
console.log(assignDate_2);
console.log(assignDate_3);

let falseTask = Object.create(null, {
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
        value: "",
        enumerable: true,
        writable: true
    }
})

const createTask = (tName, tDescription, tDate) => {
    const fTask = Object.create(falseTask)

    fTask.Task_Name = tName
    fTask.Description = tDescription
    fTask.Due_Date = tDate
    fakeTasks.push(fTask)
}

createTask("Ball Out", "Ball Out all day at the gym and dominate competition", assignDate_1)
createTask("Shoot", "Work on jumpshot at gym", assignDate_2)
createTask("Game Day", "play pick-up games at gym", assignDate_3)

console.log(fakeTasks)

