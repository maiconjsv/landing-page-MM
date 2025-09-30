


//Animação do header quando o usuario rolar a tela
const headerSite = document.getElementById('headerSite')
const li1 = document.getElementById('hd_list_inicio')
const li2 = document.getElementById('hd_list_servicos')
const li3 = document.getElementById('hd_list_contato')

window.addEventListener('scroll', () =>{
    if(window.scrollY >100){
        headerSite.classList.add('hdS_on')
        li1.classList.add('nav_scrolled')
        li2.classList.add('nav_scrolled')
        li3.classList.add('nav_scrolled')
    }
    else{
        headerSite.classList.remove('hdS_on')
        li1.classList.remove('nav_scrolled')
        li2.classList.remove('nav_scrolled')
        li3.classList.remove('nav_scrolled')
    }
})


document.addEventListener('DOMContentLoaded', function() {
    //Seleciona todos os botões de pergunta
    var botoesPergunta = document.querySelectorAll('.pergunta');

    //Itera sobre cada botão para adicionar um 'ouvinte' de evento
    botoesPergunta.forEach(function(botao) {
        botao.addEventListener('click', function() {
            //Adiciona/Remove a classe 'active' ao botão
            this.classList.toggle('active');

            //Seleciona o painel de resposta que está logo após o botão
            var painel = this.nextElementSibling;

            //Verifica se o painel está visível (se tem altura)
            if (painel.style.maxHeight) {
                // Se estiver visível, esconde
                painel.style.maxHeight = null;
                painel.style.padding = '0 18px'; // Remove o padding para o fechamento
            } else {
                // Se estiver escondido, mostra, definindo a altura para o tamanho real do conteúdo
                painel.style.maxHeight = painel.scrollHeight + "px";
                painel.style.padding = '10px 18px 20px 18px'; // Define o padding
            }
        });
    });
});
