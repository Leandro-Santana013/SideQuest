
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
