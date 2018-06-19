(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// const archiveButton = document.createElement("button");
// archiveButton.innerhtml = "Archive Completed Tasks"

// //var boby// = document.getElementsByTagName("body")[0];
// columnDiv3 = document.getElementsByTagName("col")
// columnDiv3.appendChild(archiveButton);

// archiveButton.addEventListener("click", function () {
//     alert("did something")
// }
},{}],2:[function(require,module,exports){
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


},{}]},{},[1,2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY3JpcHRzL2FyY2hpdmVUYXNrLmpzIiwic2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gY29uc3QgYXJjaGl2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4vLyBhcmNoaXZlQnV0dG9uLmlubmVyaHRtbCA9IFwiQXJjaGl2ZSBDb21wbGV0ZWQgVGFza3NcIlxuXG4vLyAvL3ZhciBib2J5Ly8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF07XG4vLyBjb2x1bW5EaXYzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjb2xcIilcbi8vIGNvbHVtbkRpdjMuYXBwZW5kQ2hpbGQoYXJjaGl2ZUJ1dHRvbik7XG5cbi8vIGFyY2hpdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbi8vICAgICBhbGVydChcImRpZCBzb21ldGhpbmdcIilcbi8vIH0iLCIvLyogQ1JFQVRFRCBGQUtFIERBVEE6IEVNUFRZIEFSUkFZLCBQUk9UT1RZUEUsIEhFTFBFUiBGVU5DSVRPTiAqLy9cblxuLy8qIEkgQU0gTk9UIFNVUkUgSE9XIFdFIFdJTEwgR0lWRSBVU0VSIEFCSUxJVFkgVE8gU0VUIERBVEUgKi8vXG5cbmNvbnN0IGZha2VUYXNrcyA9IFtdO1xuXG5jb25zdCBhc3NpZ25EYXRlXzEgPSBuZXcgRGF0ZSgyMDE4LCAxMSwgMTIpO1xuY29uc3QgYXNzaWduRGF0ZV8yID0gbmV3IERhdGUoMjAxOCwgMTIsIDExKTtcbmNvbnN0IGFzc2lnbkRhdGVfMyA9IG5ldyBEYXRlKDIwMTgsIDEwLCAxMCk7XG5cbmNvbnNvbGUubG9nKGFzc2lnbkRhdGVfMSk7XG5jb25zb2xlLmxvZyhhc3NpZ25EYXRlXzIpO1xuY29uc29sZS5sb2coYXNzaWduRGF0ZV8zKTtcblxubGV0IGZhbHNlVGFzayA9IE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIFRhc2tfTmFtZToge1xuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuICAgIERlc2NyaXB0aW9uOiB7XG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgRHVlX0RhdGU6IHtcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfVxufSlcblxuY29uc3QgY3JlYXRlVGFzayA9ICh0TmFtZSwgdERlc2NyaXB0aW9uLCB0RGF0ZSkgPT4ge1xuICAgIGNvbnN0IGZUYXNrID0gT2JqZWN0LmNyZWF0ZShmYWxzZVRhc2spXG5cbiAgICBmVGFzay5UYXNrX05hbWUgPSB0TmFtZVxuICAgIGZUYXNrLkRlc2NyaXB0aW9uID0gdERlc2NyaXB0aW9uXG4gICAgZlRhc2suRHVlX0RhdGUgPSB0RGF0ZVxuICAgIGZha2VUYXNrcy5wdXNoKGZUYXNrKVxufVxuXG5jcmVhdGVUYXNrKFwiQmFsbCBPdXRcIiwgXCJCYWxsIE91dCBhbGwgZGF5IGF0IHRoZSBneW0gYW5kIGRvbWluYXRlIGNvbXBldGl0aW9uXCIsIGFzc2lnbkRhdGVfMSlcbmNyZWF0ZVRhc2soXCJTaG9vdFwiLCBcIldvcmsgb24ganVtcHNob3QgYXQgZ3ltXCIsIGFzc2lnbkRhdGVfMilcbmNyZWF0ZVRhc2soXCJHYW1lIERheVwiLCBcInBsYXkgcGljay11cCBnYW1lcyBhdCBneW1cIiwgYXNzaWduRGF0ZV8zKVxuXG5jb25zb2xlLmxvZyhmYWtlVGFza3MpXG5cbiJdfQ==
