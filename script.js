const keyPress = document.querySelectorAll('button')
const number = document.querySelectorAll('.number')
const dot = document.getElementById('.')
const value = '0'
let display = document.getElementById("display")

let calc = (number) => {
    display.value = display.value + number
    if (display.value.endsWith('.')) {
        disableDot()
    }
    if (display.value.includes('+') || display.value.includes('-') || display.value.includes('/') || display.value.includes('*')){
        dot.removeAttribute('disabled', '')
        if ( number == '.' || display.value.endsWith('.')){
            disableDot()
        }
    }
}

//INDEX OF OPERATOR Y BUSCAR EL IF ELSE AHI


console.log(display.value)
if (number == ".") {
    console.log(number)

}


function disableDot() {
    dot.setAttribute('disabled', '')
}

let result = () => {
    if (display.value != '') {
        try {
            display.value = eval(display.value)
        }
        catch (err) {
            display.value = 'MATH ERROR'
        }
        if (display.value == 'Infinity') {
            display.value = 'Not a Number'
        }
    }
}


let handleClear = () => {
    display.value = ""
    dot.removeAttribute('disabled', '')
}

let handleDelete = () => {
    display.value = display.value.slice(0, -1)
}

// function updateDisplay(number) {
//     display.innerText = value
//     if(value.length > 9){
//         display.innerText = value.substring(0, 9)
//     }
// }




// keyPress.forEach((key) => {
//     key.addEventListener("click", function () {
//         if (key.classList == 'number') {
//             if (firstInput.length < 9) {
//                 firstInput.push(parseInt(key.innerHTML))
//                 console.log(firstInput)
//                 updateDisplay(firstInput)
//             } else {
//                 console.log("pasado de numeros")
//             }
//         }
//     })
// })


// number.forEach((number) => {
//         number.addEventListener("click", function (e) {
//             let currentString = e.target.innerText
//             var lastChar = currentString[currentString.length - 1];
//             console.log(lastChar, currentString)
//             showDisplay(lastChar)
//         })
//     })

