const listaProdutos = document.querySelectorAll(".produtos");


document.addEventListener("click", (event) => {

    let click = event.target;

    if (click.classList.contains("favoritar")) {

        favoritar(click);

    }

    if (click.classList.contains("todos") || click.classList.contains("bolos") || click.classList.contains("carnes")) {

        limpaFiltros(listaProdutos);

    }

    listaProdutos.forEach((produto) => {

        if (click.classList.contains("bolos")) {

            if (produto.children[2].innerHTML !== "Bolos") {
                filtraConteudo("invisivel", produto);
            }

        } else if (click.classList.contains("carnes")) {

            if (produto.children[2].innerHTML !== "Carnes") {
                filtraConteudo("invisivel", produto);
            }
        }

    });
});


function filtraConteudo(texto, elemento) {

    elemento.classList.add(texto);

}

function limpaFiltros(elementos) {

    elementos.forEach((elemento) => {

        elemento.classList.remove("invisivel");

    });

}

function favoritar(alvo) {

    if (alvo.classList.contains("pinta-favorito")) {

        alvo.classList.remove("pinta-favorito");

    } else {

        alvo.classList.add("pinta-favorito");
    }

}
