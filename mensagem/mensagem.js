document.getElementById("gerarPoema").addEventListener("click", function() {
    // Obter as palavras escolhidas
    const palavra1 = document.getElementById("word1").value;
    const palavra2 = document.getElementById("word2").value;
    const palavra3 = document.getElementById("word3").value;
    const palavra4 = document.getElementById("word4").value;

    // Verificar se todas as palavras foram selecionadas
    if (!palavra1 || !palavra2 || !palavra3 || !palavra4) {
        alert("Por favor, escolha todas as palavras!");
        return;
    }

    // Gerar o poema
    const poema = `
        Meu amor, cada dia ao seu lado é uma nova descoberta. O que sentimos é o mais puro <strong>${palavra1}</strong>,<br>
        algo que vai além das palavras e nos une de uma forma que não consigo explicar. O simples toque de sua mão,<br>
        o brilho nos seus olhos, o jeito como você sorri — tudo isso é a verdadeira essência do que é viver em <strong>${palavra1}</strong>.<br><br>
        
        Com você, aprendi que <strong>${palavra2}</strong> é a base de qualquer relação verdadeira. Sua <strong>${palavra2}</strong> me envolve de tal forma,<br>
        me faz querer ser uma pessoa melhor a cada dia. Você sempre está ao meu lado, com seu coração cheio de bondade,<br>
        e é por isso que acredito que estamos destinados a crescer juntos, aprendendo um com o outro.<br><br>

        Quando penso no nosso <strong>${palavra3}</strong>, sinto uma emoção tão grande que não consigo conter. O <strong>${palavra3}</strong> foi o momento onde tudo fez sentido,<br>
        o ponto de virada em nossas vidas, onde o universo conspirou para que nossos caminhos se cruzassem. Naquele instante,<br>
        soube que jamais iria querer viver sem você. Cada segundo ao seu lado é um <strong>${palavra4}</strong> brilhante, iluminando minha vida,<br>
        e sempre me lembrando de que o amor pode transformar tudo.<br><br>
        
        A cada novo amanhecer, me pego pensando no futuro, e é aí que vejo a verdadeira beleza de nosso amor. Juntos, caminhando lado a lado,<br>
        enfrentando tudo o que vier pela frente, com confiança, com <strong>${palavra1}</strong>, com <strong>${palavra2}</strong>, com tudo o que somos.<br><br>

        E é por isso que quando penso no <strong>${palavra4}</strong>, vejo um futuro brilhante. Vejo nossos corações unidos, e sempre que me sinto perdido,<br>
        é o seu amor que me guia, e é o seu <strong>${palavra1}</strong> que me faz sentir completo. Nosso destino já está traçado, e será eterno.<br>
    `;

    // Exibir o poema com animação
    const poemaDiv = document.getElementById("poema");
    poemaDiv.style.display = "block"; // Mostrar o poema
    poemaDiv.classList.add("show"); // Adicionar a classe para animação

    // Inserir o poema gerado no local adequado
    document.getElementById("mensagem").innerHTML = poema;

    // Exibir o botão "Prova" e a mensagem abaixo após gerar o poema
    document.querySelector(".uma").style.display = "block";  // Exibir a mensagem abaixo
    document.querySelector("a").style.display = "inline-block";  // Exibir o link "Prova"
});

// Lógica para o botão "Reiniciar"
document.getElementById("reiniciarPoema").addEventListener("click", function() {
    // Limpar os campos de seleção
    document.getElementById("word1").value = "";
    document.getElementById("word2").value = "";
    document.getElementById("word3").value = "";
    document.getElementById("word4").value = "";

    // Ocultar o poema
    const poemaDiv = document.getElementById("poema");
    poemaDiv.style.display = "none"; // Esconder o poema

    // Remover a classe "show" (ocultar animação)
    poemaDiv.classList.remove("show");

    // Limpar o conteúdo do poema
    document.getElementById("mensagem").innerHTML = "";

    // Esconder o botão "Prova" e a mensagem abaixo
    document.querySelector(".uma").style.display = "none";  // Esconder a mensagem abaixo
    document.querySelector("a").style.display = "none";  // Esconder o link "Prova"
});
