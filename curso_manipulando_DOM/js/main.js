const controle = document.querySelectorAll('[data-controle]');
const estatistica = document.querySelectorAll('[data-estatistica]');
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 25,
        "energia": -11,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -10
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 28,
        "velocidade": -14
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -12,
        "velocidade": 22
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
    })
});

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]');

    if(operacao === '-') {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca) {
    estatistica.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}