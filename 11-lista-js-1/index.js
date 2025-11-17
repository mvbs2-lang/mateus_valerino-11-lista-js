/**** Escreva o código abaixo 👇******/

//Questão 1
function somar(a, b) {
 return a + b;
}

//Questão 2
function multiplicar(a, b) {
 return a * b;
}

//Questão 3
function subtrair(a, b) {
 return a - b;
}

//Qestão 4
function dividir(a, b) {
  if (b === 0) {
    throw new Error("Erro: divisão por zero");
  }
  return a / b;
}

//Questão 5
function calcularMedia(nota1, nota2, nota3, nota4) {
  const soma = nota1 + nota2 + nota3 + nota4;
  return dividir(soma, 4);
}

//Questão 6
function elevarPotencia(base, expoente) {
  return Math.pow(base, expoente);
}

//Questão 7
function calcularAreaRetangulo(largura, altura) {
  return multiplicar(largura, altura);
}

//Questao 8
function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "ímpar";
  }
}

//Questão 9 
function calcularRaizQuadrada(numero) {
  return Math.sqrt(numero);
}

//Questão 10
function calcularHipotenusa(cateto1, cateto2) {
  const quadradoCateto1 = elevarPotencia(cateto1, 2);
  const quadradoCateto2 = elevarPotencia(cateto2, 2);
  const somaDosQuadrados = somar(quadradoCateto1, quadradoCateto2);
  const hipotenusa = calcularRaizQuadrada(somaDosQuadrados);
  return hipotenusa;
}







/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
