// Selecionando todos os botões de redes sociais
const socialButtons = document.querySelectorAll('.social-buttons a');

// Adicionando evento de clique em cada botão
socialButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Evita que o link seja aberto imediatamente

        const url = button.href; // Obtém o link da rede social
        window.open(url, '_blank'); // Abre o link em uma nova aba
    });
});

// Função para criar flocos de neve
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    // Posiciona o floco de neve em uma posição horizontal aleatória
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Duração aleatória da queda
    snowflake.style.opacity = Math.random(); // Opacidade aleatória

    document.body.appendChild(snowflake);

    // Remove o floco de neve quando a animação acabar
    setTimeout(() => {
        snowflake.remove();
    }, 5000); // 5 segundos de animação
}

// Cria flocos de neve continuamente a cada 200ms
setInterval(createSnowflake, 200);