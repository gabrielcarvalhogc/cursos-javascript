var segredo = Math.round(Math.random() * 10);

var input = document.querySelector("input");
input.focus();

var segredos = [5,7,10,2]

function verifica() {

    for(var posicao = 0; posicao < segredos.length; posicao++) {
        if(input.value == segredos[posicao]) {
            alert("Você acertou");
            break
        } else {
            alert("Voce errou");
        }
    }
    
    input.value = "";
    input.focus();
}

var botao = document.querySelector("button");

botao.onclick = verifica;