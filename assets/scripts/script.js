
/* SELECIONANDO TODOS OS ELEMENTOS QUE VOU MANIPULAR */
let formulario = document.querySelector('form')
let cxNome = document.querySelector('#nome')
let cxIdade = document.querySelector('#idade')
let cxPeso = document.querySelector('#peso')
let cxAltura = document.querySelector('#altura')
let cxImc = document.querySelector('#resultadoImc')
let cxDados = document.querySelectorAll('.pessoa')
let btnEnviar = document.querySelector('#btnEnviar')
let btnLimpar = document.querySelector('#btnLimpar')

// Calcular o IMC
btnEnviar.addEventListener('click', function(e) {
    // pegar os valores de cada input
let nome = cxNome.value
let idade = cxIdade.value
let peso = cxPeso.value
let altura = cxAltura.value
let imc = (peso / (altura * altura)).toFixed(1) //Calcula o IMC multiplicando o valor da altura por 2 e dividindo pelo valor do peso.

cxImc.value = imc
let sit = situacaoDoPeso(imc)
aviso.textContent = sit


// SAÍDA DE DADOS UTILIZANDO OBJETOS
let pessoa = {
    nome : nome,
    idade : idade,
    peso : peso,
    altura : altura,
    imc : imc,
    sit : sit,
}

console.log(pessoa)
dados[1].textContent = pessoa.nome
dados[2].textContent = pessoa.idade + ' anos'
dados[3].textContent = pessoa.peso + 'Kg'
dados[4].textContent = pessoa.altura + ' m'
dados[5].textContent = pessoa.imc + ' ' + pessoa.sit

//Prevenir o comportamento padrão 
e.preventDefault()

})

function situacaoDoPeso(imc) {
    let situacao = ''
    if (imc < 18.5) {
        situacao = 'Baixo peso'
    } else if (imc >= 18.5 && imc <= 24.9) {
        situacao = 'Peso normal'
    } else if (imc >= 25 && imc <= 29.9) {
        situacao = 'Sobrepeso'
    } else if (imc >= 30 && imc <= 34.9) {
        situacao = 'Obesidade I' 
    } else if (imc >= 35 && imc <= 39.9) {
        situacao = 'Obesidade II'
    } else if (imc >= 40) {
        situacao = 'Obesidade III'
    } else {
        situacao = 'Informe seu peso corretamente.'
    }
    return situacao
}

