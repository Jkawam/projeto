// Array com as perguntas e respostas
const questions = [
    { question: "Onde nos conhecemos?", options: ["No trabalho", "Na escola", "Na rua", "Em uma festa"], correctAnswer: 1 },
    { question: "Qual é a sua cor favorita?", options: ["Azul", "Verde", "Vermelho", "Rosa bebê"], correctAnswer: 3 },
    { question: "Qual é o meu prato favorito?", options: ["Lasanha", "Sushi", "Feijoada", "Hamburguer"], correctAnswer: 0 },
    { question: "Em que cidade nasci?", options: ["Aracati", "Fortaleza", "Beberibe", "Cascavel"], correctAnswer: 2 },
    { question: "Qual é o meu filme favorito?", options: ["Harry Potter", "se nem ele sabe imagina eu", "Titanic", "Star Wars"], correctAnswer: 1 },
    { question: "Qual é o meu hobby favorito?", options: ["Correr", "Ler", "Cozinhar", "Futebol"], correctAnswer: 3 },
    { question: "Qual é o nome do meu pet?", options: ["Baruk", "Baruc", "Baruck", "Haty"], correctAnswer: 2 },
    { question: "Qual o meu time de futebol?", options: ["Fortaleza", "Corinthians", "Palmeiras", "São Paulo"], correctAnswer: 0 },
    { question: "Onde foi nosso primeiro encontro?", options: ["No cinema", "No parque", "Em um restaurante", "No shoping"], correctAnswer: 3 },
    { question: "Qual é a minha bebida favorita?", options: ["Energetico", "Água", "Café", "Suco de laranja"], correctAnswer: 0 }
];

let currentQuestionIndex = 0;
let score = 0;

// Exibe a próxima pergunta
function showQuestion() {
    const question = questions[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    const optionsContainer = document.querySelector(".options");
    const feedbackElement = document.getElementById("feedback");
    const nextButton = document.getElementById("nextQuestion");
    
    questionElement.textContent = question.question;
    optionsContainer.innerHTML = "";  // Limpa as opções

    // Adiciona as opções de resposta
    question.options.forEach((option, index) => {
        const optionLabel = document.createElement("label");
        const optionInput = document.createElement("input");
        optionInput.type = "radio";
        optionInput.name = "option";
        optionInput.value = index;
        optionLabel.appendChild(optionInput);
        optionLabel.appendChild(document.createTextNode(option));
        optionsContainer.appendChild(optionLabel);
    });

    feedbackElement.textContent = "";
    nextButton.style.display = "none";  // Esconde o botão "Próxima Pergunta" inicialmente
}

// Lida com a resposta do usuário
document.getElementById("submitAnswer").addEventListener("click", function() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    const nextButton = document.getElementById("nextQuestion");

    if (!selectedOption) {
        alert("Por favor, selecione uma resposta!");
        return;
    }

    const selectedAnswerIndex = parseInt(selectedOption.value);
    const question = questions[currentQuestionIndex];

    // Verifica se a resposta está correta
    if (selectedAnswerIndex === question.correctAnswer) {
        score++;
        document.getElementById("feedback").textContent = "Resposta correta! 💖";
    } else {
        document.getElementById("feedback").textContent = "Resposta errada! 😢";
    }

    nextButton.style.display = "block";  // Mostra o botão "Próxima Pergunta" após a resposta
});

// Avança para a próxima pergunta
document.getElementById("nextQuestion").addEventListener("click", function() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        // Mostra o botão de finalizar e esconde o botão de próxima pergunta
        document.getElementById("finishGame").style.display = "block";
        document.getElementById("nextQuestion").style.display = "none";

        // Exibe a mensagem de sucesso personalizada
        const feedbackElement = document.getElementById("feedback");
        feedbackElement.textContent = `Parabéns! Você liberou a surpresa! 🎉 Hoje à noite poderá jantar onde quiser e pedir o que quiser, mas lembre-se, seu namorado não é rico ainda!. Tem outra coias, você foi convidada para o casamento do meu primo, simplismente por conta que minha tia gostou de você, parabéns bb, agora se prepare que é dia 21, tem outra coisa, mais você ainda vai descobri 😅, Sua pontuação é: ${score}/${questions.length}`;
    }
});

document.getElementById("finishGame").addEventListener("click", function() {
    alert("Parabéns! Você terminou o jogo!");
    window.location.reload();  // Reinicia o jogo
});

// Inicializa a primeira pergunta
showQuestion();