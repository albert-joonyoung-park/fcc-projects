# Local storage

---

### Local storage is a web browser feature that lets web applications store key-value pairs persistently within a user's browser. This allows web apps to save data during one session, then retrieve it in a later page session.

### In this TODO application, you'll learn how to:

- handle form inputs
- manage local storage
- perform CRUD (Create, Read, Update, Delete) operations on tasks
- implement event listeners
- toggle UI elements

**Step 1**
In this project, you will learn how localStorage works in JavaScript by building a Todo app. LocalStorage is a web storage feature of JavaScript that lets you persist data by storing the data as a key:value pair.
The HTML and CSS for this project have been provided for you. Take a look at the files to get yourself familiarized with them.
Begin by accessing the task-form, confirm-close-dialog, and open-task-form-btn elements with the getElementById() method. Save them in the variables taskForm, confirmCloseDialog, and openTaskFormBtn.

```javascript
const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
```

**Step 2**
You need to access more elements with the getElementById() method. This time you need the close-task-form-btn, add-or-update-task-btn, and cancel-btn elements. Save them in the variables closeTaskFormBtn, addOrUpdateTaskBtn, and cancelBtn.

```javascript
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
```

**Step 3**
Next, access the discard-btn, tasks-container, and title-input elements using the getElementById() method. Save them in variables named discardBtn, tasksContainer, and titleInput, respectively.

```javascript
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
```

**Step 4**
The last set of elements you need to get from the HTML file are the date-input and description-input elements. Save them in the variables dateInput and descriptionInput respectively.

```javascript
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");
```

**Step 5**
Create a taskData constant and set it to an empty array. This array will store all the tasks along with their associated data, including title, due date, and description. This storage will enable you to keep track of tasks, display them on the page, and save them to localStorage.

Use let to create a currentTask variable and set it to an empty object. This variable will be used to track the state when editing and discarding tasks.

```javascript
const taskData = [];
let currentTask = {};
```

**Step 6**
Now, you will work on opening and closing the form modal.
Add a click event listener to the openTaskFormBtn variable, and then use classList to toggle the hidden class on the taskForm element. Make sure not to include curly braces in your arrow function.
Now you can click on the "Add new Task" button and see the form modal.

```javascript
openTaskFormBtn.addEventListener("click", () =>
  taskForm.classList.toggle("hidden")
);
```

**Step 7**
Add a click event listener to the closeTaskFormBtn variable, then use the showModal() method on your confirmCloseDialog variable. This will display a modal with the Discard and Cancel buttons.
showModal() is a method associated with the HTML dialog element. It is used to display a modal dialog box on a web page.

```javascript
closeTaskFormBtn.addEventListener("click", () =>
  confirmCloseDialog.showModal()
);
```

**Step 8**
If the user clicks the Cancel button, you want to cancel the process (close the modal showing the two buttons) so the user can continue editing.
Add a click event listener to the cancelBtn element, then use the close() method on the confirmCloseDialog variable.
close() is a method of the window object you can use to close the current window, or a modal you create with the dialog element.

```javascript
cancelBtn.addEventListener("click", () => confirmCloseDialog.close());
```

**Step 9**
If the user clicks the Discard button, you want to close the modal showing the Cancel and Discard buttons, then hide the form modal.
Add a click event listener to discardBtn, then use the close() method on the confirmCloseDialog variable. Also, use classList to toggle the class hidden on taskForm so the form modal will close too.

```javascript
discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  taskForm.classList.toggle("hidden");
});
```

**Step 10**
Now that you've worked on opening and closing the modal, it's time to get the values from the input fields, save them into the taskData array, and display them on the page.
To start, add a submit event listener to your taskForm element and pass in e as the parameter of your arrow function. Inside the curly braces, use the preventDefault() method to stop the browser from refreshing the page after submitting the form.

```javascript
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
```

**Step 11**
You need to determine whether the task being added already exists or not. If it doesn't exist, you will add it, and if it already exists, you will set it up for editing. You can use the findIndex() method to accomplish this.
findIndex is an array method that lets find the index of the first element in an array that satisfies a given testing function.
Here's an example:
const numbers = [3, 1, 5, 6, 10, 9, 8];
const firstEvenNumIndex = numbers.findIndex((num) => num % 2 === 0);
console.log(firstEvenNumIndex); // Output: 3 – because the first even number (6) is at index 3

Declare a dataArrIndex variable using const and set it to the result of the findIndex() method applied to the taskData array. Utilize arrow syntax to provide a callback function with item as the parameter, and within the callback, check if the id property of item is equal to the id property of currentTask.
If the task exists, this returns the index, and if it doesn't exist, it returns -1.

```javascript
const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
```

**Step 12**
Next, retrieve the values from the input fields and store them in a taskObj object. Each task should also have a unique id.
Create a taskObj object with an id property as the first property. For the value of the id property, retrieve the value of the titleInput field, convert it to lowercase, and then use the split() and join() methods to hyphenate it.
Make sure all of those are in template literals because you need the id property value as a string.

```javascript
const taskObj = {
  id: `${titleInput.value.toLowerCase().split(" ").join("-")}`,
};
```

**Step 13**
To make the id more unique, add another hyphen and use Date.now().
Date.now() returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
console.log(Date.now()); // 1628586800000

```javascript
const taskObj = {
  id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
};
```

**Step 14**
Retrieve the values from the titleInput, dateInput, and descriptionInput fields, and then save them in the properties title, date, and description of the taskObj object.

```javascript
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
```

**Step 15**
Now that you have obtained the values from the input fields and generated an id, you want to add them to your taskData array to keep track of each task. However, you should only do this if the task is new. If the task already exists, you will set it up for editing. This is why you have the dataArrIndex variable, which provides the index of each task.
Create an if statement with the condition dataArrIndex === -1. Within the if statement, use the unshift() method to add the taskObj object to the beginning of the taskData array.
unshift() is an array method that is used to add one or more elements to the beginning of an array.
N.B: Try adding a task and log taskData to the console to see what it looks like.

```javascript
if (dataArrIndex === -1) {
  taskData.unshift(taskObj);
}
```

**Step 16**
Now that you have saved the task in the taskData array, you should display the task on the page by looping through it.
Use forEach() on taskData, then destructure id, title, date, description as the parameters. Don't return anything yet.

```javascript
taskData.forEach(({ id, title, date, description }) => {});
```
