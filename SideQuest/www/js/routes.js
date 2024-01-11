//INICIALIZAÇÃO DO F7 QUANDO DISPOSITIVO ESTÁ PRONTO
document.addEventListener('deviceready', onDeviceReady, false);
var app = new Framework7({
  // App root element
  el: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: true,
  },
  dialog: {
    buttonOk: 'Sim',
    buttonCancel: 'Cancelar',
  },
  // Add default routes
  routes: [
    {
      path: '/index/',
      url: 'index.html',
      animate: false,
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
      var swiper1 = new Swiper("#carrossel1", {
        slidesPerView: 3,
        spaceBetween: 30,
        rewind: true,
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    var swiper2 = new Swiper("#carrossel2", {
      slidesPerView: 3,
      spaceBetween: 30,
      rewind: true,
      freeMode: true,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
  });

  var swiper3 = new Swiper("#carrossel3", {
      slidesPerView: 3,
      spaceBetween: 30,
      rewind: true,
      freeMode: true,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
  });

  var swiper4 = new Swiper("#carrossel4", {
      slidesPerView: 3,
      spaceBetween: 30,
      rewind: true,
      freeMode: true,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
  });

  var swiper5 = new Swiper("#carrossel5", {
      slidesPerView: 3,
      spaceBetween: 30,
      rewind: true,
      freeMode: true,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
  });
  
  

// Outros logs para verificar se o código está sendo executado
console.log("Código de inicialização do Framework7");


		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/link2/',
      url: 'link2.html',
      animate: false,
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/link3/',
      url: 'link3.html',
      animate: false,
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
  ],
  // ... other parameters
});

//Para testes direto no navegador
var mainView = app.views.create('.view-main', { url: '/index/' });

//EVENTO PARA SABER O ITEM DO MENU ATUAL
app.on('routeChange', function (route) {
  var currentRoute = route.url;
  console.log(currentRoute);
  document.querySelectorAll('.tab-link').forEach(function (el) {
    el.classList.remove('active');
  });
  var targetEl = document.querySelector('.tab-link[href="' + currentRoute + '"]');
  if (targetEl) {
    targetEl.classList.add('active');
  }
});


function onDeviceReady() {
  //Quando estiver rodando no celular
  var mainView = app.views.create('.view-main', { url: '/index/' });

  //COMANDO PARA "OUVIR" O BOTAO VOLTAR NATIVO DO ANDROID 	
  document.addEventListener("backbutton", function (e) {

    if (mainView.router.currentRoute.path === '/index/') {
      e.preventDefault();
      app.dialog.confirm('Deseja sair do aplicativo?', function () {
        navigator.app.exitApp();
      });
    } else {
      e.preventDefault();
      mainView.router.back({ force: true });
    }
  }, false);

}
