const peso = document.querySelector("#peso")
const altura = document.querySelector("#altura")
const btn = document.querySelector(".btn")

function imc(){
    let imc = peso.value/(altura.value*altura.value);

    if(imc < 18.5){
        return "Abaixo do peso";
    } else if(imc <= 24.9){
        return "Peso Normal";
    } else if(imc <= 29.9){
        return "Sobrepeso";
    } else if(imc <= 34.9){
        return "Obesidade grau 1";
    } else if(imc <= 39.9){
        return "Obesidade grau 2";
    } else if(imc > 40){
        return "Obesidade grau 3";
    }
    return "Valor Inválido!";
    
}

function calcular(){
    let resultado = document.querySelector("#resultado")
    resultado.style.display = 'block'

    if(peso.value === "" || altura.value === ""){
        resultado.style.background = "rgba(255, 0, 0, 0.3)";
        resultado.innerHTML = "Preencha os campo!"
        return
    }

    valor = imc();

    if(valor === "Abaixo do peso"){
        resultado.style.background = "rgba(251, 255, 0, 0.300)";
    } else if(valor === "Peso Normal"){
        resultado.style.background = "rgba(81, 255, 0, 0.300)";
    } else if(valor === "Sobrepeso"){
        resultado.style.background = "rgba(255, 136, 0, 0.300)";
    } else if(valor === "Obesidade grau 1"){
        resultado.style.background = "rgba(255, 81, 0, 0.300)";
    } else if(valor === "Obesidade grau 2"){
        resultado.style.background = "rgba(255, 38, 0, 0.300)";
    } else if(valor === "Obesidade grau 3"){
        resultado.style.background = "rgba(255, 0, 0, 0.300)";
    } else if(valor === "Valor Inválido!"){
        resultado.style.background = "rgba(255, 0, 0, 0.3)";
    }
    resultado.innerHTML = valor + `: IMC(${(peso.value/(altura.value*altura.value)).toFixed(2)})`
}
