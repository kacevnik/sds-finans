jQuery(document).ready(function ($) {
	new WOW().init();

	//Иницилизация и отправка плагина AjaxForm отправки даных из форм
    $('form').ajaxForm(function(){
		//$("a[title='Close']").trigger("click");
		$('form').clearForm();
		$(".fancybox-close-small").trigger("click");
    $("a[title='thanks']").trigger("click");
    if($('input[name="submit"]').val() == 'Получить расчет'){
      $('#select_body h2').html('Заявка принята!');
      $('#select_body input[name="submit"]').hide();
      $('#step_5').show();
      $('#step_4').hide();
    }
	});



    //Иницилизация и настройка Галереи-Слайдера OWL-carusel
    $("#bank_slider").owlCarousel({
      nav:true,
      loop:true,
      autoplaySpeed:1200,
      navSpeed:1200,
      autoplay:5000,
      margin: 20,
      responsive:{
        0:{
            items:1
        },       
        630:{
            items:2
        },
        1000:{
            items:3
        }
      },
      navText: ['<div class="arrow_prev_owl"><i class="fa fa-angle-left"></i></div>', '<div class="arrow_next_owl"><i class="fa fa-angle-right"></div>']
    });     

  	//Плавная прокрутка
  $("a[href*='#']").bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 500);
		e.preventDefault();
		return false;
	});

  	//Библиотека Fancybox
  $("[data-fancybox]").fancybox({
  		padding: '300px'
	});

  $(".scroll").mCustomScrollbar({
    axis:"y",
    setHeight: $('.set_plan').height() + 30,
            scrollButtons:{
          enable:true
        }
  });

  $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 5000000,
      step: 1000,
      values: [ 1000000, 2500000 ],
      slide: function( event, ui ) {
        $( "#slider_price_left" ).html('от ' + ui.values[ 0 ]);
        $( "#slider_price_right" ).html('до ' + ui.values[ 1 ]);
      }
    });
    $( "#slider_price_left" ).html('от ' + $( "#slider-range" ).slider( "values", 0 ));
    $( "#slider_price_right" ).html('до ' + $( "#slider-range" ).slider( "values", 1 ));

  	//Маска под телефонный номер для поля Input
  	$('input[name="phone"]').mask("+7 (999) 999-99-99"); 	

  	$('#select_body .select_body_show .item a').click(function(event) {
  		$('#select_body .select_body_show .item a').removeClass('selected');
  		$(this).addClass('selected');
  		if($('#more').attr('data_to') == 'step_2'){
  			$('#select_body input[name="home"]').val($(this).html());
  		}  		
  		if($('#more').attr('data_to') == 'step_3'){
  			$('#select_body input[name="fuel"]').val($(this).html());
  		}
  		$('#more').attr('data_ok', 'ok');
  		return false;
  	});

  	$('#select_body input').keyup(function(event) {
  		if($(this).val() != ''){
  			$('#more').attr('data_ok', 'ok');
  		}
  		else{
  			$('#more').attr('data_ok', '');
  		}
  	});

    $('#dg-container').gallery();

});