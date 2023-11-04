// Button noises

let normalClickSoundButtons = document.querySelectorAll('.nclick');
let specialClickSoundButtons = document.querySelectorAll('.sclick');

for (let button of normalClickSoundButtons) {
    button.addEventListener('click', () => {
        let normalClickSound = new Audio('calculatorclick.mp3');
        normalClickSound.play();
    });
}

for (let button of specialClickSoundButtons) {
    button.addEventListener('click', () => {
        let specialClickSound = new Audio('calculatorspecialbutton.mp3');
        specialClickSound.play();
    });
}

//

// Basic Mathematical Functions

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

//

let firstOperand;
let operator;
let secondOperand;


function operate(num1, sign, num2) {

    if (sign === '+') {
        return add(num1, num2);
    } else if (sign === '-') {
        return subtract(num1, num2);
    } else if (sign === 'x') {
        return multiply(num1, num2);
    } else if (sign === '/') {
        return divide(num1, num2);
    }
}


//

// Button-Display Assignments

let currentDisplay = document.querySelector('.calcTextCurrent');
let resultDisplay = document.querySelector('.calcTextResult');

let displayValue = '';
let mathSigns = ['+', '-', 'x', '/'];
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

let zeroB = document.querySelector('.zero');
let oneB = document.querySelector('.one');
let twoB = document.querySelector('.two');
let threeB = document.querySelector('.three');
let fourB = document.querySelector('.four');
let fiveB = document.querySelector('.five');
let sixB = document.querySelector('.six');
let sevenB = document.querySelector('.seven');
let eightB = document.querySelector('.eight');
let nineB = document.querySelector('.nine');

let pointB = document.querySelector('.pointB');
let equalB = document.querySelector('.equalB');
let addB = document.querySelector('.addB');
let subtractB = document.querySelector('.subtractB');
let multiplyB = document.querySelector('.multiplyB');
let divideB = document.querySelector('.divideB');
let delB = document.querySelector('.DELB');
let ACB = document.querySelector('.ACB');

function mathSignInStringCheck(string) {
    for (let letter of string) {
        if (mathSigns.includes(letter)) {
            return true;
        }
    }

    return false;
}

function numberInStringCheck(string) {
    for (let letter of string) {
        if (numbers.includes(letter)) {
            return true;
        }
    }
    return false;
}

function specialSignFunction (leftDisplay, rightDisplay, sign) {
    let placeholder = displayValue.split(' ');
    let storeValue = operate(+placeholder[0], placeholder[1], +placeholder[2]);
    let roundedValue = Math.round((storeValue + Number.EPSILON) * 100) / 100;
    let ptext = roundedValue.toString();
    rightDisplay.textContent = ptext
    displayValue = ptext + ` ${sign} `;
    leftDisplay.textContent = displayValue;
}

function zeroCheckAddNum(num) {
    let psplit = displayValue.split(' ');
    let firstPart = psplit[0];
    let secondPart = psplit[1];

    if (!(secondPart) && firstPart.length < 10) {
        if (displayValue === '0') {
            displayValue = num;
            currentDisplay.textContent = displayValue;
        } else {
            displayValue += num;
            currentDisplay.textContent = displayValue;
        }

    } else if (secondPart && displayValue.length < 24) {
        displayValue += num;
        currentDisplay.textContent = displayValue;
    }


}





zeroB.addEventListener('click', () => {
    let psplit = displayValue.split(' ');
    let first = psplit[0];
    let second = psplit[1];
    let third = psplit[2];

    if (!(second) && displayValue !== '0') {
        displayValue += '0';
        currentDisplay.textContent = displayValue;
    } else if (displayValue === '0') {
        return;
    } else if (third !== '0') {
        displayValue += '0';
        currentDisplay.textContent = displayValue;
    }
})

oneB.addEventListener('click', () => {
    zeroCheckAddNum('1');
})

twoB.addEventListener('click', () => {
    zeroCheckAddNum('2');
})

threeB.addEventListener('click', () => {
    zeroCheckAddNum('3');
})

fourB.addEventListener('click', () => {
    zeroCheckAddNum('4');
})

fiveB.addEventListener('click', () => {
    zeroCheckAddNum('5');
})

sixB.addEventListener('click', () => {
    zeroCheckAddNum('6');
})

sevenB.addEventListener('click', () => {
    zeroCheckAddNum('7');
})

eightB.addEventListener('click', () => {
    zeroCheckAddNum('8');
})

nineB.addEventListener('click', () => {
    zeroCheckAddNum('9');
})

pointB.addEventListener('click', () => {
    let placeholder = displayValue.split(' ');
    if (placeholder[2] && !(placeholder[2].includes('.'))) {
        displayValue += '.';
        currentDisplay.textContent = displayValue;
    } else {
        if (!(displayValue.includes('.'))) {
            displayValue += '.';
            currentDisplay.textContent = displayValue;
        }    
    }
})

addB.addEventListener('click', () => {
    if (numberInStringCheck(displayValue)) {
        if (mathSignInStringCheck(displayValue)) {
            let pholder = displayValue.split(' ');
            if (pholder[2]) {
                specialSignFunction(currentDisplay, resultDisplay, '+');
            }
        } else {
            displayValue += ' + '
            currentDisplay.textContent = displayValue;
        }
    }
})

subtractB.addEventListener('click', () => {
    if (numberInStringCheck(displayValue)) {
        if (mathSignInStringCheck(displayValue)) {
            let pholder = displayValue.split(' ');
            if (pholder[2]) {
                specialSignFunction(currentDisplay, resultDisplay, '-');
            }
        } else {
            displayValue += ' - '
            currentDisplay.textContent = displayValue;
        }
    }
})

multiplyB.addEventListener('click', () => {
    
    if (numberInStringCheck(displayValue)) {
        if (mathSignInStringCheck(displayValue)) {
            let pholder = displayValue.split(' ');
            if (pholder[2]) {
                specialSignFunction(currentDisplay, resultDisplay, 'x');
            }
        } else {
            displayValue += ' x '
            currentDisplay.textContent = displayValue;
        }
    }
})

divideB.addEventListener('click', () => {

    if (numberInStringCheck(displayValue)) {
        if (mathSignInStringCheck(displayValue)) {
            let pholder = displayValue.split(' ');
            if (pholder[2]) {
                specialSignFunction(currentDisplay, resultDisplay, '/');
            }
        } else {
            displayValue += ' / '
            currentDisplay.textContent = displayValue;
        }
    }
})

equalB.addEventListener('click', () => {

    if (numberInStringCheck(displayValue)) {
        if (mathSignInStringCheck(displayValue)) {
            let placeholder = displayValue.split(' ');
            if (placeholder[2]) {
                let storeValue = operate(+placeholder[0], placeholder[1], +placeholder[2]);
                let roundedValue = Math.round((storeValue + Number.EPSILON) * 100) / 100
                let ptext = roundedValue.toString();
                resultDisplay.textContent = ptext
                displayValue = ptext;
                currentDisplay.textContent = displayValue;
                displayValue = '';
            }
        }
    }
})

delB.addEventListener('click', () => {
    if (displayValue.length >= 1) {
        if (displayValue.slice(-1) === ' ') {
            displayValue = displayValue.slice(0, displayValue.length - 3);
            currentDisplay.textContent = displayValue;
        } else {
            displayValue = displayValue.slice(0, -1);
            currentDisplay.textContent = displayValue;
        }
    }
})

ACB.addEventListener('click', () => {
    displayValue = '';
    currentDisplay.textContent = displayValue;
    resultDisplay.textContent = '0';
})
//
