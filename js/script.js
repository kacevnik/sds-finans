jQuery(document).ready(function ($) {
	new WOW().init();

	//Иницилизация и отправка плагина AjaxForm отправки даных из форм
    $('form').ajaxForm(function(){
		//$("a[title='Close']").trigger("click");
		$('form').clearForm();
		$(".fancybox-close-small").trigger("click");
    $("#thanks_link").trigger("click");
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
      min: 1500,
      max: 4500,
      step: 100,
      values: [ 1500, 4500 ],
      slide: function( event, ui ) {
        reloadVolume(ui.values[ 0 ], ui.values[ 1 ]);
        $( "#slider_price_left" ).html('от ' + ui.values[ 0 ] + ' тыс.');
        $( "#slider_price_right" ).html('до ' + ui.values[ 1 ] + ' тыс.');
        $('#select input[name="price"]').val('от ' + ui.values[ 0 ] + ' до ' + ui.values[ 1 ]);
      }
    });
    $( "#slider_price_left" ).html('от ' + $( "#slider-range" ).slider( "values", 0 ) + ' тыс.');
    $( "#slider_price_right" ).html('до ' + $( "#slider-range" ).slider( "values", 1 ) + ' тыс.');
    $('#select input[name="price"]').val('от ' + $( "#slider-range" ).slider( "values", 0 ) + ' до ' + $( "#slider-range" ).slider( "values", 1 ));

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

    ymaps.ready(init);
 
function init () {
    var myMap = new ymaps.Map("map", {
        // Центр карты, указываем коордианты
        center:[55.014652,82.884050],
        // Масштаб, тут все просто
        zoom: 16,
    }); 
             
    var myGeoObjects = [];
     
    // Наша метка, указываем коордианты
    myGeoObjects = new ymaps.Placemark([55.016063,82.890219],{
                    balloonContentBody: 'Текст в балуне',
                    },{
                    iconLayout: 'default#image',
                    // Путь до нашей картинки
                    iconImageHref: 'img/temp/logo_for_map.png', 
                    // Размер по ширине и высоте
                    iconImageSize: [200, 131],
                    // Смещение левого верхнего угла иконки относительно
                    // её «ножки» (точки привязки).
                    iconImageOffset: [-35, -35]
    });
                 
    var clusterer = new ymaps.Clusterer({
        clusterDisableClickZoom: false,
        clusterOpenBalloonOnClick: false,
    });
     
    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);
 
}

function reloadHHome(){
   var i = 0;
      var text = '';
      $('.planirovki_hide .item').each(function(index, el) {
        if(i == 0){text = text + '<div class="row">';}
        if($(this).attr('data-count') == 1 && $('span[data-span="1"]').hasClass('active')){
          text = text + '<div class="col-md-6">' + $(this).parent().html() + '</div>';
          i++;
        }        
        if($(this).attr('data-count') == 2 && $('span[data-span="2"]').hasClass('active')){
          text = text + '<div class="col-md-6">' + $(this).parent().html() + '</div>';
          i++;
        }        
        if($(this).attr('data-count') == 3 && $('span[data-span="3"]').hasClass('active')){
          text = text + '<div class="col-md-6">' + $(this).parent().html() + '</div>';
          i++;
        }
        if(i == 2){text = text + '</div>'; i = 0;}
      });
      text = text + '</div>';
      text.replace(/<\/div><\/div><\/div>/g,"</div></div>");
      $('#mCSB_1_container').html(text);
}

function reloadVolume(min, max){
  var i = 0;
  var text = '';
  $('.planirovki_hide .item').each(function(index, el) {
    if(i == 0){text = text + '<div class="row">';}
    if($(this).attr('data-price') > min && $(this).attr('data-price') < max){
      text = text + '<div class="col-md-6">' + $(this).parent().html() + '</div>';
      i++;
    }        
    if(i == 2){text = text + '</div>'; i = 0;}
  });
  text = text + '</div>';
  text.replace(/<\/div><\/div><\/div>/g,"</div></div>");
  $('#mCSB_1_container').html(text);
}

  $('.count_area span').click(function(event) {
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      reloadHHome();
    }else{
      $(this).addClass('active');
      reloadHHome();
    }
  });

  $('.check_sqd input[type="checkbox"]').click(function(event) {
    var text = '';
    $('.check_sqd input[type="checkbox"]').each(function(index, el) {
      if($(this).prop("checked")){
        text = text + $('label[for="' + $(this).attr('id') + '"]').html() + ' ';

      }
      $('#select input[name="sqd"]').val(text);
    });
  });

});