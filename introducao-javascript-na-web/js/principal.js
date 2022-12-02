var titulo = document.querySelector(".titulo");
titulo.textContent = 'aparecida nutricionista';

var paciente = document.querySelector(".paciente");

function calculaIMC() {
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var tdImc = paciente.querySelector(".info-imc");
    
    imc = peso / (altura * altura);
    tdImc.textContent = imc;
}

calculaIMC();
