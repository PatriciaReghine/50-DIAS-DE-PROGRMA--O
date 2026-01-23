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

let maior = numeros[0]
let menor = numeros [0]

for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
        maior = numeros[i];
    } else if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

let media = soma / numeros.length;



console.log(numeros);
console.log("A soma dos numeros é: " + soma);

console.log("A média dos numeros é: " + media);

console.log("O maior numero é: " + maior);

console.log("O menor numero é: " + menor);
