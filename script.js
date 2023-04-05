let numberButton = document.querySelectorAll(".number-button")
let operator = document.querySelectorAll(".operation-button")
let calculateDisplay = document.querySelector("#calc-display")
let calc = document.getElementById('=')

let screen = []
let firstInput = []
let operatorInput = []
let nextInput = false
let nextCalc = []

function calcDisplay(value) {
  calculateDisplay.innerText = value;
}

function calculate() {
  let first = parseFloat(firstInput.join(''))
  let next = parseFloat(nextCalc.join(''))

  if (operatorInput[0] === '+') {
    calcDisplay(first + next)
  } else if (operatorInput[0] === '-') {
    calcDisplay(first - next)
  } else if (operatorInput[0] === '*') {
    calcDisplay(first * next)
  } else if (operatorInput[0] === '/') {
    calcDisplay(first / next)
  }
  
  // reset input variables
  firstInput = []
  operatorInput = []
  nextCalc = []
  nextInput = false
}

numberButton.forEach(numberButton => {
  numberButton.addEventListener('click', (e) => {
    if (nextInput != true) {
      firstInput.push(numberButton.getAttribute('id'))
      console.log(firstInput, 'first')
    } else {
      nextCalc.push(numberButton.getAttribute('id'))
      console.log(nextCalc, 'next')
    }
    
    // call calculate function if operator has been clicked and nextCalc has a value
    if (nextInput && nextCalc.length > 0) {
      calculate()
    }
  })
})

operator.forEach(operator => {
  operator.addEventListener('click', () => {
    operatorInput.push(operator.getAttribute('id'))
    console.log(operatorInput)
    nextInput = true
  })
})

calc.addEventListener('click', () => {
  // call calculate function to calculate final result
  calculate()
})
