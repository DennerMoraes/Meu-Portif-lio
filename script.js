//Titulo

const titulo = document.querySelector('h2');
typeWriter(titulo);

function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
        
};

//Pop Up

window.sr = ScrollReveal({reset: true})

sr.reveal('.cont-sobremim, .cont-projetos, .icons-habilidades',{duration: 1200})

//Modal

const botoes = document.querySelectorAll('[data-abre-modal]');

for (let botaoEl of botoes){
    botaoEl.addEventListener('click', abreModal);
};

function abreModal(e){
    const botaoClicadoEl = e.currentTarget;
    const seletorDoModal = botaoClicadoEl.dataset.abreModal;
    const modalEl = document.querySelector(seletorDoModal);
    modalEl.classList.add('visivel');
};

const botaoFechar = document.querySelectorAll('.fechar-modal');
botaoFechar.forEach(fecharEl => fecharEl.addEventListener('click', fecharModal));

function fecharModal(e){
    const fecharModalEl = e.currentTarget;
    const modalEl = fecharModalEl.closest('.modal');
    modalEl.classList.remove('visivel');
};

const mascaraEl = document.querySelector('#mascara');
mascaraEl.addEventListener('click', fecharModalAberto);

function fecharModalAberto(){
    document.querySelector('.modal.visivel').classList.remove('visivel')
};