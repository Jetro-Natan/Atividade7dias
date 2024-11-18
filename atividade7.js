// Funções para operações
function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero não é permitida.";
    }
    return a / b;
}

// Função principal
function calculadora() {
    let opcao;

    do {
        // Exibir opções
        alert("Escolha uma operação:");
        alert("1 - Soma");
        alert("2 - Subtração");
        alert("3 - Multiplicação");
        alert("4 - Divisão");
        alert("5 - Sair");

        // Ler opção do usuário
        opcao = parseInt(prompt("Digite o número da operação desejada:"));

        // Verificar se é a opção de sair
        if (opcao === 5) {
            alert("Até a próxima!");
            break;
        }

        // Ler valores do usuário
        const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
        const valor2 = parseFloat(prompt("Digite o segundo valor:"));

        // Variável para o resultado
        let resultado;

        // Switch para realizar a operação
        switch (opcao) {
            case 1:
                resultado = soma(valor1, valor2);
                alert(`Resultado: ${resultado}`);
                break;
            case 2:
                resultado = subtracao(valor1, valor2);
                alert(`Resultado: ${resultado}`);
                break;
            case 3:
                resultado = multiplicacao(valor1, valor2);
                alert(`Resultado: ${resultado}`);
                break;
            case 4:
                resultado = divisao(valor1, valor2);
                alert(`Resultado: ${resultado}`);
                break;
            default:
                alert("Opção inválida. Por favor, tente novamente.");
        }
    } while (opcao !== 5);
}

// Executar a calculadora
calculadora();
