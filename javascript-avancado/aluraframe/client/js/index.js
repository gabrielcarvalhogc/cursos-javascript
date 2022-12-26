var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
]

console.log(campos);

const tBody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault();
    const tr = document.createElement('tr'); //Cria tr

    campos.forEach(function(campo) {

        const td = document.createElement('td'); //Cria td
        td.textContent = campo.value; //Pega o valor do campo que recebeu o evento
        tr.appendChild(td); //tr recebe a td como filho
    })

    const tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);

    tBody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();
})
