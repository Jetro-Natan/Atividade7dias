// Inicializa um objeto para armazenar os itens por categoria
const listaDeCompras = {
    Frutas: [],
    Laticínios: [],
    Congelados: [],
    Doces: [],
    Outros: []
};

let continuar = true;

alert("Bem-vindo à sua lista de compras!");

while (continuar) {
    // Verifica se há itens na lista para exibir a opção de remover
    const listaVazia = Object.values(listaDeCompras).every(categoria => categoria.length === 0);

    // Opções disponíveis
    const opcao = listaVazia
        ? prompt("Você deseja adicionar uma comida à sua lista de compras? Responda com 'adicionar' ou 'sair'.")
        : prompt("Você deseja adicionar ou remover uma comida da lista de compras? Responda com 'adicionar', 'remover' ou 'sair'.");

    if (opcao.toLowerCase() === "adicionar") {
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
            alert(`"${comida}" foi adicionado à categoria "${categoria}".`);
        } else {
            alert("Categoria inválida. Adicionando na categoria 'Outros'.");
            listaDeCompras["Outros"].push(comida);
        }
    } else if (opcao.toLowerCase() === "remover") {
        if (listaVazia) {
            alert("A lista está vazia! Não há itens para remover.");
        } else {
            // Exibe a lista atual
            let listaAtual = "Lista de compras atual:\n";
            for (const categoria in listaDeCompras) {
                if (listaDeCompras[categoria].length > 0) {
                    listaAtual += `    ${categoria}: ${listaDeCompras[categoria].join(", ")}\n`;
                }
            }
            alert(listaAtual);

            // Solicita o item a ser removido
            const itemARemover = prompt("Digite o nome do item que deseja remover:");

            // Procura e remove o item
            let itemEncontrado = false;
            for (const categoria in listaDeCompras) {
                const index = listaDeCompras[categoria].indexOf(itemARemover);
                if (index !== -1) {
                    listaDeCompras[categoria].splice(index, 1);
                    itemEncontrado = true;
                    alert(`"${itemARemover}" foi removido da categoria "${categoria}".`);
                    break;
                }
            }

            if (!itemEncontrado) {
                alert("Não foi possível encontrar o item dentro da lista!");
            }
        }
    } else if (opcao.toLowerCase() === "sair") {
        continuar = false;
    } else {
        alert("Opção inválida. Por favor, responda com 'adicionar', 'remover' ou 'sair'.");
    }
}

// Exibe a lista final de compras
let mensagemFinal = "Lista final de compras:\n";
for (const categoria in listaDeCompras) {
    if (listaDeCompras[categoria].length > 0) {
        mensagemFinal += `    ${categoria}: ${listaDeCompras[categoria].join(", ")}\n`;
    }
}
alert(mensagemFinal);
