var titulo = document.querySelector(".titulo");
titulo.textContent = 'aparecida nutricionista';

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {
    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var altura = pacientes[i].querySelector(".info-altura").textContent;
    var tdImc = pacientes[i].querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if(peso < 0 || peso >= 1000) {
        alert("peso inválido!")
        pesoEhValido = false;   
        pacientes.style.color = "red";
    }

    if(altura < 0 || altura >= 3.00) {
        alert("altura inválida!")
        alturaEhValida = false;    
    }
    
    if(alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}
