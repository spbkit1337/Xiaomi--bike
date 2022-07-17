$(function(){
    //тут я испольую библиоетку slick чтобы накатить модные кнопки то есть дотсы переключения картинок 
    $('.bike-slider, .slider__items').slick({
        arrows: false,
        dots:true,
        fade:true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    //Скрипт плавного перехода к нужному блоку
    $(document).ready(function(){
        $(".menu , .bike__column").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });
        

});


