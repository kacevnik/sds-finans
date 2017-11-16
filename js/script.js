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


    //Кастомные табы

    $('#vibor_1 .item a').click(function(event) {
      $('#vibor_1 .item').removeClass('activ');
      $(this).parent().addClass('activ');
      $('#vibor_2 .tabs').hide();
      $('#vibor_2 #' + $(this).parent().attr('data-tab')).fadeIn(300);
      return false;
    });

    //Иницилизация и настройка Галереи-Слайдера OWL-carusel
    $("#slider_owl_1").owlCarousel({
      items : 1,
      loop:true,
      autoplaySpeed:1200,
      navSpeed:1200,
      autoplay:5000,
      nav:true,
      navText: ['<div class="arrow_prev_owl"></div>', '<div class="arrow_next_owl"></div>']
    });     

    $("#slider_owl_2").owlCarousel({
      items : 1,
      loop:true,
      autoplaySpeed:1200,
      navSpeed:1200,
      autoplay:5000,
      nav:true,
      navText: ['<div class="arrow_prev_owl"></div>', '<div class="arrow_next_owl"></div>']
    });     

    $("#slider_owl_3").owlCarousel({
      items : 1,
      loop:true,
      autoplaySpeed:1200,
      navSpeed:1200,
      autoplay:5000,
      nav:true,
      navText: ['<div class="arrow_prev_owl"></div>', '<div class="arrow_next_owl"></div>']
    }); 

    $('#slider_owl_3 .arrow_next_owl').on('click', function(event) {
      $('#slider_owl_2 .arrow_next_owl').trigger('click');
    });    

    $('#slider_owl_3 .arrow_prev_owl').on('click', function(event) {
      $('#slider_owl_2 .arrow_prev_owl').trigger('click');
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


  	$('a.link').click(function(event) {
  		var step = $(this).attr('data_to').split('_')[1];
  		var name = {2:'Выберите тип топлива?', 3:'Укажите площадь дома?', 4:'Оставьте свои контакты?', 5:'Заявка принята!'};
	  	if($('#more').attr('data_ok') == 'ok'){
	  		$('#select .answer ul li[data-activ='+step+']').addClass('activ');

	  		$('.select_body_show').hide();
	  		$('#step_' + step).show();
	  		$('.link').attr('data_to', 'step_' + (step*1 + 1));

	  		$('#more').attr('data_ok', '');
	  		$(this).blur();
	  		$(this).next().hide();
	  		$('#select_body h2').html(name[step]);

	  		if(step == 4){
	  			$(this).hide();
	  			$('#select_body input[name="submit"]').show();
	  		}	  		

	  		if(step == 5){
	  			$('#select_body input[name="submit"]').hide();
	  		}
	  	}
  		return false;
  	});

});