var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
document.getElementById("plusBtn").addEventListener("click", increment);
document.getElementById("minusBtn").addEventListener("click", decrement);
document.getElementById("timesBtn").addEventListener("click", multiply);
function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber > 0){
        currentNumberWrapper.style.color = "blue";
    }else if(currentNumber === 0 ){
        currentNumberWrapper.style.color = "green";
    }
}   
function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0){
        currentNumberWrapper.style.color = "red";
    }
    
}
function multiply() {
    currentNumber = currentNumber * 2;
    currentNumberWrapper.innerHTML = currentNumber;
}
const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');
	addTask(inputField.value);
	form.reset();
};

function addTask(description) {
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}