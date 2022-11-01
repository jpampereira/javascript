let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) // Evite fazer isso - dificulta a leitura do código!
console.log(num1 === num2)