const numeroCorreto = Math.floor(Math.random() * 11);
 // Altere aqui o número desejado entre 0 e 10
let tentativas = 3; // Total de tentativas permitidas

alert("Bem-vindo ao jogo de adivinhação! Você tem 3 tentativas para adivinhar o número entre 0 e 10.");

while (tentativas > 0) {
    // Solicita o palpite do usuário
    const chute = parseInt(prompt("Qual o seu chute?"), 10);

    if (chute === numeroCorreto) {
        alert("Parabéns! Você acertou o número!");
        break;
    } else {
        tentativas--;
        if (tentativas > 0) {
            alert(`Errado! Você ainda tem ${tentativas} tentativa(s).`);
        } else {
            alert(`Que pena! Você não conseguiu acertar. O número correto era ${numeroCorreto}.`);
        }
    }
}
