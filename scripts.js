/*
    Prototype

    * prototype-based language
    * prototype chain
    * __proto__
    * 
*/


/*
    Type conversion ( typecasting ) se trata de uma conversão de tipo
    * Alteração de um tipo de dado para outro 
*/
// Convertendo string para number
let string = "123"
console.log(Number(string) + 5)

// Convertendo number para string
let number = 321
console.log(String(number) + 4)


// Contar quantos caracteres tem uma palavra e quantos diogitos tem um número
let word = "Paralelepipedo"
console.log(word.length)
let numeroLongo = 3.141516
console.log(String(numeroLongo).length) // Precisa converter numero pra string para usar parametro lenght

// Transformar um número quebrado com 2 casas decmais e trocar ponto por vígula
let numeroQuebrado = 325.97281978291
console.log(numeroQuebrado.toFixed(2).replace(".", ","))

// Tranformar letras minúsculas em maiúsculas. Faça o contrário disso também
let palavraMenor = "Programar é muito legal"
console.log(palavraMenor.toLowerCase().toUpperCase())

// Separar um texto que contem espaços, e um hjnovo array onde cada texto é uma posição do array. Depois diss, transformar o array em um texto e onde eram espaços, colocar "_"
let phrase = "Eu quero um pão de Queijo!"
let myArray = phrase.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLowerCase())

// Verificar se o texto cointém uma palavra
// let phrase = "Eu quero um pão de Queijo!"
console.log(phrase.includes("Queijo"))

// Criar array cin construtor
let arrayConstrutor = new Array(10) // Cria array com 10 posições vazias
console.log(arrayConstrutor)