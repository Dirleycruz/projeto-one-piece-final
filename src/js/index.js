// OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botão como selecionado
// passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
const botoes = document.querySelectorAll('.botao')

// OBJETIVO 2 - quando clicar no botão personagem mostrar as informações do personagem
// passo 1 - pegar osd personagens no JS pra poder mostrar ou esconder ele
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        // Obj1 - passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele
        desselecionarBotao();

        // Obj2 - passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
        desselecionarPersonagem();

        // Obj1 - passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        botao.classList.add("selecionado");

        
        // Obj2 - passo 2 - adicionar a classe "selecionado" no personagem que o usuárioa selecionou
        personagens[indice].classList.add("selecionado")
    });

});


function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

