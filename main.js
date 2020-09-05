// --       CONTROL OF DISPLAYS     --
function getHistory () {
    return document.getElementById('display-first-line').innerText;
}
function updateHistory(num) {
    document.getElementById('display-first-line').innerText=num;
}
function getResult () {
    return document.getElementById('display-second-line').innerText;
}
function updateResult(num) {
    if (num == ""){
        document.getElementById('display-second-line').innerText=num;
    } else {
        console.log(num)
        document.getElementById('display-second-line').innerText=getFormattedNumber(num);
    }
}

function getFormattedNumber (num) {
    return Number(num).toLocaleString()
}
function reverseNumberFormat (num) {
    return num.replace(/,/g,'')
}

// --       CONTROL OF KEYS     --
//NUMBERS
function getKeyNumber () {
    let numbers = document.getElementsByClassName('button-number');
    
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', function () {
            switch (this.id) {
                case 'button-0':
                    prevResult = getResult()
                    updateResult(reverseNumberFormat(prevResult) + '0')
                    break;
                case 'button-1':
                    prevResult = getResult()
                    updateResult(reverseNumberFormat(prevResult) + '1')
                    break;
                case 'button-2':
                    prevResult = getResult()
                    updateResult(reverseNumberFormat(prevResult) + '2')
                    break;
                case 'button-3':
                    prevResult = getResult()
                    updateResult(reverseNumberFormat(prevResult) + '3')
                    break;
                case 'button-4':
                    prevResult = getResult()
                    updateResult(reverseNumberFormat(prevResult) + '4')
                    break;
                case 'button-5':
                    prevResult = getResult()
                    updateResult(reverseNumberFormat(prevResult) + '5')
                    break;
                case 'button-6':
                    prevResult = getResult()
                    updateResult(reverseNumberFormat(prevResult) + '6')
                    break;
                case 'button-7':
                    prevResult = getResult()
                    updateResult(reverseNumberFormat(prevResult) + '7')
                    break;
                case 'button-8':
                    prevResult = getResult()
                    updateResult(reverseNumberFormat(prevResult) + '8')
                    break;
                case 'button-9':
                    prevResult = getResult()
                    updateResult(reverseNumberFormat(prevResult) + '9')
                    break;
                default:
                    break;
            }
        })
    }
}

// OPERATORS
function getOperators () {
    let operators = document.getElementsByClassName('button-operator');

    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', function () {
            switch (this.id) {
                case 'button-divide':
                    updateHistory(getHistory() + getResult() + '/')
                    updateResult('')
                    break;
                case 'button-multiply':
                    updateHistory(getHistory() + getResult() + '*')
                    updateResult('')
                    break;
                case 'button-substract':
                    updateHistory(getHistory() + getResult() + '-')
                    updateResult('')
                    break;
                case 'button-additon':
                    updateHistory(getHistory() + getResult() + '+')
                    updateResult('')
                    break;
                case 'button-equal':
                    result = eval(getHistory() + getResult())
                    updateResult(result)
                    updateHistory('')
                    break;
                default:
                    break;
            }
        })
    }
}

// OTHERS
function getOthers () {
    let others = document.getElementsByClassName('button-other');

    for (let i = 0; i < others.length; i++) {
        others[i].addEventListener('click', function () {
            switch (this.id) {
                case 'button-C':
                    updateResult('')
                    updateHistory('')
                    break;
                case 'button-CE':
                    prevResult = getResult()
                    updateResult(reverseNumberFormat(prevResult).slice(0, -1))
                    break;
                case 'button-%':
                    updateHistory(getHistory() + getResult() + '%')
                    updateResult('')
                    break;
                default:
                    break;
            }
        })
    }
}

window.onload = () => {
    getKeyNumber();
    getOperators();
    getOthers();
}
