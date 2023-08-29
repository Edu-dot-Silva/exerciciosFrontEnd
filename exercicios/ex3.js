// Escreva um programa que exiba os números primos de 1 a 100 no console.

for(let i=1;i < 100;i++) {

let divisores = 0;

for (let j = 1;j<=i; j++) {
  if (i % j === 0) {
    divisores++;
  }
}

if (divisores === 2) {
  console.log(`${i} - É um número primo.`);
} else {
  console.log(`${i} - Não é um número primo.`);
}
}