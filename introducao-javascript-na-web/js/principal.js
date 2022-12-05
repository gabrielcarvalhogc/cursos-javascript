var titulo = document.querySelector(".titulo");
titulo.textContent = 'aparecida nutricionista';

var pacientes = document.querySelectorAll(".paciente");

console.log(pacientes);

function calculaIMC() {
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
            imc = peso / (altura * altura);
            tdImc.textContent = imc.toFixed(2);
        }
    }
}

calculaIMC();
