//Média entre três números em node.js
//Importando o módulo 
const readline = require('readline-sync')

const nota1 = parseInt(readline.question("Digite a primeira nota: \n"))
const nota2 = parseInt(readline.question("Digite a segunda nota: \n"))
const nota3 = parseInt(readline.question("Digite a terceira nota: \n"))

console.log((nota1 + nota2 + nota3)/3)
