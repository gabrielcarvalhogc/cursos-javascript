const listaDeDestinos = [
    "Salvador",
    "Rio de Janeiro",
    "São Paulo"
]

listaDeDestinos.push("Curitiba");

for(let i = 0; i < listaDeDestinos.length; i++) {
    console.log(listaDeDestinos[i]);
}

listaDeDestinos.splice(2, 1);
console.log(listaDeDestinos);