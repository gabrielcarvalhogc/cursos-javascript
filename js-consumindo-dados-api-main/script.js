async function buscaEndereco(cep) {
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const consultaCEPConvertido = await consultaCEP.json();

        if (consultaCEPConvertido.erro) {
            throw Error("CEP não existe!")
        }

        //console.log(consultaCEPConvertido);
        return consultaCEPConvertido;

    } catch (erro) {
        console.log(erro);
    }
}

let ceps = ['01001000', '01001001'];
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));

Promise.all(conjuntoCeps).then(respostas => console.log(respostas));