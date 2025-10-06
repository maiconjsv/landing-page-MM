


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

const menuMobile = document.querySelector('.menuMobile')
const fecharMenu = document.querySelector('.closeMenu')
const header_nav_mobile =document.querySelector('.header_nav_mobile')

    menuMobile.addEventListener('click', () =>{
        menuMobile.classList.add('mbOff')
        fecharMenu.classList.toggle('cmOn')
        header_nav_mobile.classList.add('hdnmOn')
    })
    fecharMenu.addEventListener('click', () =>{
        menuMobile.classList.toggle('mbOff')
        fecharMenu.classList.toggle('cmOn')
        header_nav_mobile.classList.toggle('hdnmOn')
    })




//Menu de dúvidas frequentes
document.addEventListener('DOMContentLoaded', function() {
    var botoesPergunta = document.querySelectorAll('.pergunta');

    botoesPergunta.forEach(function(botao) {
        botao.addEventListener('click', function() {
            this.classList.toggle('active');

            var painel = this.nextElementSibling;

            if (painel.style.maxHeight) {
                painel.style.maxHeight = null;
                painel.style.padding = '0 18px'; 
            } else {
                painel.style.maxHeight = painel.scrollHeight + "px";
                painel.style.padding = '10px 18px 20px 18px'; 
            }
        });
    });
});


//Float chat
const float_chat = document.getElementById('float_chat')
const fecharChat = document.getElementById('fecharChat')
const chat_lp = document.querySelector('.chat_lp')
const message_fade = document.querySelectorAll('.messages')
const digitando = document.querySelector('.digitando')

float_chat.addEventListener('click', () =>{    
    chat_lp.classList.toggle('chatOff')
    setTimeout(() =>{
        digitando.classList.toggle('digitandoOff')
    },3800)
    setTimeout(() =>{
        message_fade[0].classList.toggle('msgOff')
    }, 2000)
    setTimeout(() =>{
        message_fade[1].classList.toggle('msgOff')
    }, 3200)

})
fecharChat.addEventListener('click', () =>{
    chat_lp.classList.toggle('chatOff') 
    setTimeout(() =>{
        digitando.classList.toggle('digitandoOff')
    },3800)
        setTimeout(() =>{
        message_fade[0].classList.toggle('msgOff')
    }, 1000)
    setTimeout(() =>{
        message_fade[1].classList.toggle('msgOff')
    }, 1000)
})

//animação do chat






//função do card dos advogados
const botao_1 = document.getElementById('seta-lado-1')
const botao_2 = document.getElementById('seta-lado-2')

botao_1.addEventListener('click', () =>{
   const adv_info_1 = document.querySelectorAll('.advogado-info')   
   adv_info_1[0].classList.toggle('off')
   const seta_right_1 = document.querySelectorAll('.seta-left-adv')
   seta_right_1[0].classList.add('off')
   const seta_cima_1 = document.querySelectorAll('.seta-adv')
   seta_cima_1[0].classList.toggle('off')
   const info_footer_advgs_1 = document.querySelectorAll('.info_footer_advgs')
   info_footer_advgs_1[0].classList.toggle('off')
   console.log(info_footer_advgs_1)
})
botao_2.addEventListener('click', () =>{
   const adv_info_2 = document.querySelectorAll('.advogado-info')   
   adv_info_2[1].classList.toggle('off')
   const seta_right_2 = document.querySelectorAll('.seta-left-adv')
   seta_right_2[1].classList.add('off')
   const seta_cima_1 = document.querySelectorAll('.seta-adv')
   seta_cima_1[1].classList.toggle('off')
   const info_footer_advgs_1 = document.querySelectorAll('.info_footer_advgs')
   info_footer_advgs_1[1].classList.toggle('off')
   console.log(info_footer_advgs_1)
})

const seta_baixo_1 = document.getElementById('seta-baixo-1')
const seta_baixo_2 = document.getElementById('seta-baixo-2')

seta_baixo_1.addEventListener('click', () =>{
   const adv_info_1 = document.querySelectorAll('.advogado-info')   
   adv_info_1[0].classList.toggle('off')
   const seta_right_1 = document.querySelectorAll('.seta-left-adv')
   seta_right_1[0].classList.toggle('off')
   const seta_cima_1 = document.querySelectorAll('.seta-adv')
   seta_cima_1[0].classList.toggle('off')
   const info_footer_advgs_1 = document.querySelectorAll('.info_footer_advgs')
   info_footer_advgs_1[0].classList.toggle('off')
})
seta_baixo_2.addEventListener('click', () =>{
   const adv_info_2 = document.querySelectorAll('.advogado-info')   
   adv_info_2[1].classList.toggle('off')
   const seta_right_2 = document.querySelectorAll('.seta-left-adv')
   seta_right_2[1].classList.toggle('off')
   const seta_cima_1 = document.querySelectorAll('.seta-adv')
   seta_cima_1[1].classList.toggle('off')
   const info_footer_advgs_1 = document.querySelectorAll('.info_footer_advgs')
   info_footer_advgs_1[1].classList.toggle('off')
   console.log(info_footer_advgs_1)
})
