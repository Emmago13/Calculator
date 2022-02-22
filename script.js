const buttons = document.querySelectorAll('.btn');
const buttonSecondary = document.querySelectorAll('.btn-secondary');
const operationButton = document.querySelectorAll('.operation-btn');
let screenRecorded = document.getElementById('screen-recorded');
let screenResult = document.getElementById('screen-result');
let screenRecordedArray = [];



//addEventListeners

buttons.forEach(button => {
    button.addEventListener('click',buttonScreenRecorded);
})
operationButton.forEach(button => {
    button.addEventListener('click',buttonScreenRecorded);
})
buttonSecondary.forEach(button => {
    button.addEventListener('click', consoleOperations)
})
screenRecorded.addEventListener('keyup', consoleOperations)



//Functions


function buttonScreenRecorded(event) {
    const button = event.target;
    screenRecordedArray.push(button.textContent);
    screenRecorded.innerHTML = screenRecordedArray.join('');
}

function consoleOperations(event) {
    const button = event.target;
    if (button.textContent === 'C') {
        screenRecorded.innerHTML = '';
        screenResult.innerHTML = 0;
        screenRecordedArray = []
    }else if (button.textContent === 'Delete') {
        screenRecordedArray.pop();
        screenRecorded.innerHTML = screenRecordedArray.join('');
    }else if (button.textContent === '=') {
        screenResult.innerHTML = eval(screenRecorded.textContent);
        screenRecordedArray = [];
    }else if (event.keyCode === 13) {
        document.getElementById('equals').click();
        screenResult.innerHTML = eval(screenRecorded.textContent);
        screenRecorded.innerHTML = '';
        event.preventDefault();
    }
}
