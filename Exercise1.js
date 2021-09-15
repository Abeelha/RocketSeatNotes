// Exercício 1



// let name= 'Júlia'
// let age= 20
// let stars= 4.2
// let isSubscribed= true

let student = {
    name: 'Júlia',
    age: 20,
    stars: 4.2,
    isSubscribed: true,
    weight: 62.5
}
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

let students = []
students = student
console.log(students)

const ana = {
    name: 'Ana',
    age: 25,
    stars: 3.2,
    isSubscribed: false,
    weight: 82.5
}

students[1] = ana

console.log(students[1])




