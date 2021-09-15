// function expression
// function anonymous


//parâmetros (parameters)
const sum = function(number1, number2){
    let total =(number1 + number2) // sempre colocar chave especial em functions ( let ou var) por causa do escopo
    return total
}

let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1,number2)}`)


// Function scope
let subject

function createThink() {
    subject = 'study'
}

console.log(subject)
createThink()
console.log(subject)

//Function hoisting
sayMyName()

function sayMyName() {
    console.log('Theo')
}

//Arrow function

const functionArrow = (name) => {
    console.log(name)
}
functionArrow('arrow')
