// Object
const person = { 
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
}

// usar crase + ${variavel} strings...
console.log(`${person.name} tem ${person.age} anos`)

//Array 0 Lion , 1 Monkey , 2 Cat
const animals = [
    {
        // Pode adicionar objetos dentro do Array
        nome: 'Lion',
        anos: '7'
    },
    {
        nome: 'Monkey',
        anos: '18'
    },
    {
        nome: 'Cat',
        anos: '3'
    }
]

//Acessar quantos valores dentro do Array
console.log(animals.length)

//Acessar valores dentro do Array
// ..nome chama atributo do objeto
console.log(animals[2].nome, animals[2].anos) 

