$(document).ready(function() {
    
    $('.background-slider').cycle({
        fx:     'fade',
        rev: 0,
        speed: 600,
        timeout:  1050,
    });

    $('.owl-carousel').owlCarousel({
        loop:true, 
        margin:50,
        nav:false,
        autoplay:true,
        smartSpeed:1000,
        autoplayTimeout:2000,
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
    $('.main-text').css('z-index','5');
    setTimeout(function() {
        $('.main-text').css('opacity','0.1');
    },1);
    $('.timetable').css('z-index','8');
    setTimeout(function() {
        $('.timetable').css('opacity','0.8');
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

function author(){
    $('.author').css('display','block');
    setTimeout(function() {
        $('.author').css('opacity','1');
    }, 1);
    setTimeout(function() {
        $('.author__line').css('height','100%');
        $('.author__logo').css('top','0%');
    }, 100);
    setTimeout(function() {
        $('.author__text').css('opacity','1');
    }, 300);
}
function author__exit(){
    $('.author').css('opacity','0');
    $('.author__line').css('height','0%');
    $('.author__logo').css('top','-100%');
    $('.author__text').css('opacity','0');
    setTimeout(function() {
        $('.author').css('display','none');
    }, 600);
}