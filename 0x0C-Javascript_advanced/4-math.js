function divideBy(firstNumber) {
    return function a(secondNumber) { return secondNumber / firstNumber}
}

function addBy(firstNumber) {
    return function b(secondNumber) {return firstNumber + secondNumber}
}

var addBy100 = addBy(100)
var addBy1000 = addBy(1000)
var divideBy10 = divideBy(10)
var divideBy100 = divideBy(100)