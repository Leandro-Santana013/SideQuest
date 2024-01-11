
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}



document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}


const tela = new IntersectionObserver((entradas)=>{
    entradas.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
        else{
            entry.target.classList.remove('show')
        }
    })
})

const imagens = document.querySelectorAll('.hidden')
imagens.forEach((element) => tela.observe(element))

const tela1 = new IntersectionObserver((entradas1)=>{
    entradas1.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show1")
        }
        else{
            entry.target.classList.remove('show1')
        }
    })
})


const itens = document.querySelectorAll('.hidden1')
itens.forEach((element) => tela1.observe(element))


const telaCarrossel = new IntersectionObserver((entradas) => {
    entradas.forEach((entry) => {
        if (entry.isIntersecting) {
            const carrosselId = entry.target.id;
            console.log(`Carrossel visível: ${carrosselId}`);
            changeBarColorBasedOnCarrossel(carrosselId);
        }
    });
});


function changeBarColorBasedOnCarrossel(carrosselId) {
    const barra = document.querySelector('.barra');
    
    // Resetar a cor da barra
    barra.style.backgroundImage = 'linear-gradient(to top, #3cbc8c 0%, #3cbc8c 0%)';
    
    // Adicionar lógica para mudar a cor com base no carrossel
    switch (carrosselId) {
        case 'carrossel1':
            barra.style.backgroundImage = 'linear-gradient(to top, #3cbc8c 0%, #3cbc8c 25%, #ffffff 25%, #ffffff 100%)';
            break;
        case 'carrossel2':
            
            barra.style.backgroundImage = 'linear-gradient(to top, #3cbc8c 0%, #3cbc8c 50%, #ffffff 50%, #ffffff 100%)';
            break;
        case 'carrossel3':
            barra.style.backgroundImage = 'linear-gradient(to top, #3cbc8c 0%, #3cbc8c 75%, #ffffff 75%, #ffffff 100%)';
            break;
        case 'carrossel4':
            barra.style.backgroundImage = 'linear-gradient(to top, #3cbc8c 0%, #3cbc8c 100%, #ffffff 100%, #ffffff 100%)';
            break;
        case 'carrossel5':
            barra.style.backgroundImage = 'linear-gradient(to top, #3cbc8c 0%, #3cbc8c 100%, #ffffff 100%, #ffffff 100%)';
            break;
        
        default:
            barra.style.backgroundImage = 'linear-gradient(to top, #3cbc8c 0%, #3cbc8c 0%)';
    }
}

// Restante do código...





const carrosseis = document.querySelectorAll('.swiper.mySwiper');
carrosseis.forEach((carrossel) => telaCarrossel.observe(carrossel));



function showCarrossel(carrosselNumber) {
    console.log(`showCarrossel chamada com carrosselNumber: ${carrosselNumber}`);
  
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`carrossel${i}`).style.display = 'none';
    }   
  
    document.getElementById(`carrossel${carrosselNumber}`).style.display = 'block';
  }