let firstNumber = Number(prompt('Insira o primeiro número:'))
let secondNumber = Number(prompt('Insira o segundo número:'))

let sum = firstNumber + secondNumber
let sub = firstNumber - secondNumber
let multi = firstNumber * secondNumber
let div = firstNumber / secondNumber
let rem = firstNumber % secondNumber

alert(`A soma dos dois números é: ${sum}.`)
alert(`A subtração dos dois números é: ${sub}.`)
alert(`A multiplicação dos dois números é: ${multi}.`)
alert(`A divisão dos dois números é: ${div}.`)
alert(`O resto da divisão dos dois números é: ${rem}.`)

even = sum % 2 == 0

if (even) {
  alert(`A soma dos dois números, ${sum}, é par.`)
} else {
  alert(`A soma dos dois números, ${sum}, é ímpar.`)
}

equalNumber = firstNumber == secondNumber
//Poderia-se fazer sub == 0 OU div == 1

if (equalNumber) {
  alert(`Os números inseridos são iguais.`)
} else {
  alert(`Os números inseridos são diferentes.`)
}
