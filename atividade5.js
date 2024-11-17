const listaDeCompras = {
    Frutas: [],
    Laticínios: [],
    Congelados: [],
    Doces: [],
    Outros: []
};

let adicionarMais = true;

alert("Bem-vindo à sua lista de compras!");

while (adicionarMais) {
    // Pergunta ao usuário se deseja adicionar uma comida
    const desejaAdicionar = prompt("Você deseja adicionar uma comida à sua lista de compras? Responda com 'sim' ou 'não'.");

    if (desejaAdicionar.toLowerCase() === "sim") {
        // Solicita o nome da comida
        const comida = prompt("Qual comida você deseja adicionar?");

        // Pergunta a categoria da comida
        const categoria = prompt(`Em qual categoria a comida "${comida}" se encaixa? Escolha entre:
        - Frutas
        - Laticínios
        - Congelados
        - Doces
        - Outros`);

        // Adiciona a comida na categoria correspondente
        if (listaDeCompras[categoria]) {
            listaDeCompras[categoria].push(comida);
        } else {
            alert("Categoria inválida. Adicionando na categoria 'Outros'.");
            listaDeCompras["Outros"].push(comida);
        }
    } else if (desejaAdicionar.toLowerCase() === "não") {
        adicionarMais = false;
    } else {
        alert("Resposta inválida. Por favor, responda apenas com 'sim' ou 'não'.");
    }
}

// Exibe a lista de compras agrupada por categoria
let mensagem = "Lista de compras:\n";
for (const categoria in listaDeCompras) {
    if (listaDeCompras[categoria].length > 0) {
        mensagem += `    ${categoria}: ${listaDeCompras[categoria].join(", ")}\n`;
    }
}

alert(mensagem);
