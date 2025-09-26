


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




