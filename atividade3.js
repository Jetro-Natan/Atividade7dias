
function iniciarJogo() {
    alert("Bem-vindo ao Jogo de Carreira em Programação!");


    const areaEscolhida = prompt("Escolha sua área de interesse:\n1. Front-End\n2. Back-End\nDigite 1 ou 2:");

    let especializacao = "";
    let tecnologias = [];

    if (areaEscolhida === "1") {
    
        const feEscolha = prompt("Você escolheu Front-End! O que você quer aprender?\n1. React\n2. Vue\nDigite 1 ou 2:");
        if (feEscolha === "1") {
            especializacao = "React";
            alert("Você escolheu React. Ótima escolha para desenvolver interfaces dinâmicas!");
        } else if (feEscolha === "2") {
            especializacao = "Vue";
            alert("Você escolheu Vue. Excelente para construir aplicações interativas!");
        } else {
            alert("Escolha inválida. Por favor, reinicie o jogo e escolha 1 ou 2.");
            return;
        }
    } else if (areaEscolhida === "2") {

        const beEscolha = prompt("Você escolheu Back-End! O que você quer aprender?\n1. C#\n2. Java\nDigite 1 ou 2:");
        if (beEscolha === "1") {
            especializacao = "C#";
            alert("Você escolheu C#. Excelente para desenvolver aplicações robustas!");
        } else if (beEscolha === "2") {
            especializacao = "Java";
            alert("Você escolheu Java. Ótima escolha para sistemas escaláveis!");
        } else {
            alert("Escolha inválida. Por favor, reinicie o jogo e escolha 1 ou 2.");
            return;
        }
    } else {
        alert("Escolha inválida. Por favor, reinicie o jogo e escolha 1 ou 2.");
        return;
    }


    const caminho = prompt("Deseja:\n1. Se especializar na área escolhida\n2. Se tornar Fullstack\nDigite 1 ou 2:");
    if (caminho === "1") {
        alert(`Você decidiu se especializar em ${especializacao}. Excelente para se tornar um expert na área!`);
    } else if (caminho === "2") {
        alert("Você decidiu se tornar Fullstack. Uma ótima escolha para dominar tanto Front-End quanto Back-End!");
    } else {
        alert("Escolha inválida. Por favor, reinicie o jogo e escolha 1 ou 2.");
        return;
    }


    let continuar = "sim";
    while (continuar.toLowerCase() === "sim") {
        const tecnologia = prompt("Qual tecnologia você gostaria de aprender?");
        if (tecnologia) {
            tecnologias.push(tecnologia);
            alert(`Legal! ${tecnologia} é uma ótima tecnologia para aprender.`);
        } else {
            alert("Você não inseriu nenhuma tecnologia.");
        }
        continuar = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Responda com 'sim' ou 'não':");
    }


    if (tecnologias.length > 0) {
        let lista = "Tecnologias que você deseja aprender:\n";
        tecnologias.forEach((tech, index) => {
            lista += `${index + 1}. ${tech}\n`;
        });
        alert(lista);
    } else {
        alert("Você não adicionou nenhuma tecnologia à lista.");
    }

    alert("Obrigado por jogar! Boa sorte na sua jornada de aprendizado.");
}

iniciarJogo();
