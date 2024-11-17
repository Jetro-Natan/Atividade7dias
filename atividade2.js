
alert("Olá, bem-vindo ao programa!");

const linguagem = prompt("Qual linguagem de programação você está estudando?");
const resposta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

if (resposta == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
} else if (resposta == 2) {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
} else {
    alert("Resposta inválida. Por favor, responda apenas com 1 ou 2.");
}
