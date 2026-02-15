document.addEventListener("DOMContentLoaded", function () {

    // ===== CONTADOR =====

    const contador = document.getElementById("contador");

    if (contador) {

        const dataInicio = new Date("2025-10-04 00:00:00"); // ALTERE AQUI

        function atualizarContador() {
            const agora = new Date();
            const diferenca = agora - dataInicio;

            const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
            const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
            const segundos = Math.floor((diferenca / 1000) % 60);

            contador.innerHTML =
                dias + " dias, " +
                horas + " horas, " +
                minutos + " minutos e " +
                segundos + " segundos ❤️";
        }

        setInterval(atualizarContador, 1000);
        atualizarContador();
    }


    // ===== JOGO DE PALAVRAS =====

    const palavras = [
        "Sara,",
        "eu",
        "quero",
        "cumprir",
        "todas",
        "as",
        "coisas",
        "junto",
        "com",
        "você,",
        "crescer",
        "na",
        "igreja,",
        "andar",
        "nos",
        "caminhos",
        "de",
        "Deus",
        "e",
        "construir",
        "uma",
        "vida",
        "abençoada",
        "ao",
        "seu",
        "lado.",
        "Eu",
        "te",
        "amo",
        "muito! ❤️"
    ];

    let indice = 0;

    const botao = document.getElementById("revelarBtn");
    const fraseContainer = document.getElementById("fraseContainer");

    if (botao && fraseContainer) {
        botao.addEventListener("click", function () {

            if (indice < palavras.length) {
                const span = document.createElement("span");
                span.textContent = palavras[indice] + " ";
                span.style.opacity = "0";
                span.style.transition = "0.5s";

                fraseContainer.appendChild(span);

                setTimeout(() => {
                    span.style.opacity = "1";
                }, 50);

                indice++;
            } else {
                botao.innerText = "Promessa Completa 💖";
                botao.disabled = true;
            }

        });
    }

});