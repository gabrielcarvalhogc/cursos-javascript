async function buscaEndereco(cep) {

    var mensagemErro = document.getElementById('erro');
    mensagemErro.style.color = "red";
    mensagemErro.innerHTML = "";

    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const consultaCEPConvertido = await consultaCEP.json();

        if (consultaCEPConvertido.erro) {
            throw Error("CEP não existe!")
        }

        const cidade = document.getElementById('cidade');
        const logradouro = document.getElementById('endereco');
        const estado = document.getElementById('estado');

        cidade.value = consultaCEPConvertido.localidade;
        logradouro.value = consultaCEPConvertido.logradouro;
        estado.value = consultaCEPConvertido.uf;

        return consultaCEPConvertido;

    } catch (erro) {
        mensagemErro.innerHTML = "<p>CEP inválido!</p>"
        console.log(erro);
    }
}

const cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));
