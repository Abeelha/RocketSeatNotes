// function expression
// function anonymous


//parâmetros (parameters)
const sum = function (number1, number2) {
    let total = (number1 + number2) // sempre colocar chave especial em functions ( let ou var) por causa do escopo
    return total
}

let number1 = 50
let number2 = 100

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)


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


// Callback function
function callBack(name) {
    console.log('antes de executar a função callBack')
    name()
    console.log('depois de executar a função callBack')
}

callBack(
    () => {
        console.log('estou em uma callback')
    }
)

/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function () {
        return this.name + " está andando "
    }
}

const Mayk = new Person("Mayk")
const Theo = new Person("Theo")
console.log(Mayk.walk())
console.log(Theo.walk())