$(document).ready(function() {
    
    $('.background-slider').cycle({
        fx:     'fade',
        rev: 0,
        speed: 600,
        timeout:  1050,
    });

    $('.owl-carousel').owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:50, //Отступ от элемента справа в 50px
        nav:false, //Отключение навигации
        autoplay:true, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:2000, //Время смены слайда
        items:4,
        center:true,
        dots:false,
    });
});

function gallery(){
    $('.gallery').css('z-index','100');
    setTimeout(function() {
        $('.gallery').css('opacity','1');
    }, 1);
}
setTimeout(function() {
    $('.background-slider').css('z-index','3');
    setTimeout(function() {
        $('.background-slider').css('opacity','1');
    },1);
    $('.menu').css('z-index','8');
    setTimeout(function() {
        $('.menu').css('opacity','1');
    },1);
},2680);

var app = new Vue({
    el: '.wall__text',
    data: {
      message: '@Coslovs'
    },
  })
setTimeout (() => {
    app.message = '#Козлова';
    $('h1').css('color','black');
}, 660)
setTimeout (() => {
    app.message = '@Coslovs';
    $('h1').css('color','#CCFF66');
}, 1320)
setTimeout (() => {
    app.message = '#Козлова';
    $('h1').css('color','white');
}, 2010)

setTimeout (() => {
    $('.works-button').css('z-index','5');
    $('.wall').css('background-color','rgba(10, 10, 10, 0.2)');
}, 2210)

function gallery__exit(){
    $('.gallery').css('opacity','0');
    setTimeout(function() {
        $('.gallery').css('z-index','0');
    }, 1);
}