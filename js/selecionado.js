const menuNavegacao = document.querySelectorAll(".lista-produtos");

for (let i = 0; i < menuNavegacao.length; i++) {

    let botaoNavegacao = menuNavegacao[i];

    botaoNavegacao.addEventListener("click", (event) => {

        limpaSelecionado();

        let botoes = event.target;

        console.log(botoes);

        if (botoes.classList.contains("selecionado")) {

            botoes.classList.remove("selecionado");

        } else {

            botoes.classList.add("selecionado");

        }
    });
}



function limpaSelecionado() {

    menuNavegacao.forEach((botao) => {

        console.log(botao);

        botao.classList.remove("selecionado");

        console.log(botao);

    });

}