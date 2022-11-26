let numero = 0;

numero = prompt('Digite um número:');

const informeDigitos = () => {
    return `Esse é o número: ${numero}, e possui: ${numero.length} dígitos`;
}
console.log(informeDigitos());