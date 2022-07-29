const display = document.querySelector("#display")
const displayResult = document.querySelector("#displayResult")
const displayTempResult = document.querySelector("#displayTempResult")
const numberKey = document.querySelectorAll(".number")
const operatorKey = document.querySelectorAll(".operator")
const equal = document.querySelector(".equal")
const clear = document.querySelector(".clear")
const clearLastEl = document.querySelector(".del")

let displayFirstNum = ""
let displaySecNum = ""
let result = null;
let lastOperation = ""
let haveDot = false

numberKey.forEach(number => {
    number.addEventListener("click", (e) => {
        if (e.target.innerText === "." && !haveDot) {
            haveDot = true
        } else if (e.target.innerText === "." && haveDot) {
            return
        } 
        if( (displaySecNum === "0" || displayFirstNum === "0") && e.target.innerText === "0"){
            return
        }
        displaySecNum += e.target.innerText
        displayResult.innerText = displaySecNum
    })
})

operatorKey.forEach(operation => {
    operation.addEventListener("click", (e) => {
        if (!displaySecNum) return
        haveDot = false
        const operationName = e.target.innerText;
        if (displayFirstNum && displaySecNum && lastOperation) {
            calculate()
        } else {
            result = parseFloat(displaySecNum)
        }
        clearVar(operationName)
        lastOperation = operationName
    })
})

function clearVar(operator = "") {
    displayFirstNum += displaySecNum + "" + operator + ""
    display.innerText = displayFirstNum
    displayResult.innerText = ""
    displaySecNum = ""
    displayTempResult.innerText = result
}

function calculate() {
    if (lastOperation === "*") {
        result = parseFloat(result) * parseFloat(displaySecNum)
    } else if (lastOperation === "+") {
        result = parseFloat(result) + parseFloat(displaySecNum)
    } else if (lastOperation === "-") {
        result = parseFloat(result) - parseFloat(displaySecNum)
    } else if (lastOperation === "/") {
        result = parseFloat(result) / parseFloat(displaySecNum)
    }
}

equal.addEventListener("click", (e) => {
    if (!displayFirstNum || !displaySecNum) return
    haveDot = false;
    calculate()
    clearVar()
    displayResult.innerText = result.toFixed(6)
    console.log(typeof(result))
    displayTempResult.innerText = ""
    displaySecNum = result
    displayFirstNum = ""
})

clear.addEventListener("click", (e) => {
    display.innerText = "0"
    displayResult.innerText = "0"
    displayTempResult.innerText = "0"
    displayFirstNum = ""
    displaySecNum = ""
    result = ""
})

clearLastEl.addEventListener("click", (e) => {
    displayResult.innerText = ""
    displaySecNum = ""
})

window.addEventListener("keydown", (e) => {
    if (
        e.key === "0" ||
        e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" ||
        e.key === "8" ||
        e.key === "9" ||
        e.key === "."
    ) {
        clickedButton(e.key)
    } else if (
        e.key === "*" ||
        e.key === "+" ||
        e.key === "-" ||
        e.key === "/"
    ) {
        clickedOperation(e.key)
    } else if( e.key === "Enter" || e.key === "="){
        clickEqual()
    }
})

function clickedButton(key) {
    numberKey.forEach(number => {
        if (number.innerText === key) {
            number.click()
        }
    })
}

function clickedOperation(key) {
    operatorKey.forEach(operation => {
        if (operation.innerText === key) {
            operation.click()
        }
    })
}

function clickEqual(){
    equal.click()
}