var segredo = Math.round(Math.random() * 10);

var input = document.querySelector("input");
input.focus();

function verifica() {
    if(input.value == segredo) {
        alert("Você acertou");
    } else {
        alert("Voce errou");
    }

    input.value = "";
    input.focus();
}

var botao = document.querySelector("button");

botao.onclick = verifica;