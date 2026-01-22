let numeros =  [];

let tamanhoLista = prompt("Quantos numeros voce quer inserir?")
let soma = 0

for (let i = 0; i < tamanhoLista; i++) {
    let entrada = prompt("Insira um numero");
    let numero = Number(entrada);
    numeros.push(numero);
}

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log(numeros);
console.log("A soma dos numeros é: " + soma);