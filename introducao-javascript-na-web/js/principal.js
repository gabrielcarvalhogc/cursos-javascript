var titulo = document.querySelector(".titulo");
titulo.textContent = 'aparecida nutricionista';

var paciente = document.querySelector(".paciente");

function calculaIMC() {
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var tdImc = paciente.querySelector(".info-imc");


    var pesoEhValido = true;
    var alturaEhValida = true;

    if(peso <= 0 || peso >= 1000) {
        pesoEhValido = false;    
        peso.textContent = "peso inválido!";
    }

    if(altura <= 0 || altura >= 3.00) {
        alturaEhValida = false;    
        altura.textContent = "altura inválida!";
    }
    
    if(alturaEhValida && pesoEhValido) {
        imc = peso / (altura * altura);
        tdImc.textContent = imc;
    }
}

calculaIMC();
