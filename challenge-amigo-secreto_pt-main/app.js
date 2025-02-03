let amigos = [];
let resultados = [];

function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value;

    if (nomeAmigo.trim() !== "") {
        amigos.push(nomeAmigo);
        atualizarListaAmigos();
        document.getElementById('amigo').value = ""; // Limpa input
    } else {
        alert("Por favor, digite um nome válido.");
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpa lista

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário pelo menos dois amigos para o sorteio.");
        return;
    }

    // Embaralha o array de amigos usando o algoritmo Fisher-Yates
    for (let i = amigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]];
    }

    resultados = []; // Limpa resultados anteriores

    // Cria pares de amigos secretos, garantindo que ninguém se tire
    for (let i = 0; i < amigos.length; i++) {
        const amigoAtual = amigos[i];
        const amigoSorteado = amigos[(i + 1) % amigos.length]; 

        resultados.push(`${amigoAtual} tirou ${amigoSorteado}`);
    }

    exibirResultados();
}

function exibirResultados() {
    const listaResultados = document.getElementById('resultado');
    listaResultados.innerHTML = ""; // Limpa lista de resultados

    resultados.forEach(resultado => {
        const li = document.createElement('li');
        li.textContent = resultado;
        listaResultados.appendChild(li);
    });
}