var titulo = document.querySelector(".titulo");
titulo.textContent = 'aparecida nutricionista';

var pacientes = document.querySelectorAll(".paciente");

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

var botaoAdicionar = document.getElementById("adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    
    var form = document.querySelector('#form-adiciona');

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(pacienteTr);
});
