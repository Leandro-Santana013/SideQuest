
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



const carrosseis = document.querySelectorAll('.swiper.mySwiper');
carrosseis.forEach((carrossel) => telaCarrossel.observe(carrossel));



function showCarrossel(carrosselNumber) {
    console.log(`showCarrossel chamada com carrosselNumber: ${carrosselNumber}`);
  
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`carrossel${i}`).style.display = 'none';
        document.getElementById(`carrossel-btn${i}`).style.borderLeft = 'solid 3px #757575'
    }   
  
    document.getElementById(`carrossel${carrosselNumber}`).style.display = 'block';
    document.getElementById(`carrossel-btn${carrosselNumber}`).style.borderLeft = 'solid 3px #3cbc8c'
  }