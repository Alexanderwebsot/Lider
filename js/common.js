$(document).ready(function () {
  new WOW().init();
  let questions_content = $('.questions-block__text');
  let questions = $('.questions-list__item');
  let attainment = $('.attainment-list-item');
  let attainment_content = $('.atm');
  $(attainment).on('click', function() {
    $(attainment).removeClass('attainment-list-item-active');
    $(attainment_content).removeClass('attainment-block-active');
    $(this).addClass('attainment-list-item-active');
    let num = $(attainment).index(this);
    $(attainment_content[num]).addClass('attainment-block-active');
  })

  let attainment2 = $('.attainment-list-item');
  let attainment_content2 = $('.atm-m');
  $(attainment).on('click', function() {
    $(attainment2).removeClass('attainment-list-item-active');
    $(attainment_content2).removeClass('attainment-block-active');
    $(this).addClass('attainment-list-item-active');
    let num = $(attainment2).index(this);
    $(attainment_content2[num]).addClass('attainment-block-active');
  })

  $(questions).on('click', function() {
    $(questions).removeClass('questions-list__item_active');
    $(questions_content).removeClass('questions-block__text__active');
    $(this).addClass('questions-list__item_active');
    let num = $(questions).index(this);
    $(questions_content[num]).addClass('questions-block__text__active');
  })
  $('.departure-form__btn').on('click', function() {
    let modal = $('.window-dark');
    $(modal).addClass('window-dark-active');
    return false;
  })
  $('.window-close').on('click', function() {
    let modal = $('.window-dark');
    $(modal).removeClass('window-dark-active');
    let modal2 = $('.window-price');
    let body = $('html')
    $(modal2).removeClass('window-price-active');
    $(body).removeClass('body-scroll');
  })
  let check_scroll = 0;
  let check_scroll2 = 0;
  let check_scroll3 = 0;
  $(".phone").mask("+7 (999) 999-9999");
  let text_area = $('.departure-form__textarea')[0];
  text_area_content = text_area.getAttribute("placeholder");
  text_area_content = text_area_content.split('');
  let i = 0;
  let text_area_content_new = '';

  let text_area2 = $('.departure-form__textarea')[1];
  text_area_content2 = text_area2.getAttribute("placeholder");
  text_area_content2 = text_area_content2.split('');
  let i2 = 0;
  let text_area_content_new2 = '';

  let text_area3 = $('.departure-form__textarea')[2];
  text_area_content3 = text_area3.getAttribute("placeholder");
  text_area_content3 = text_area_content3.split('');
  let i3 = 0;
  let text_area_content_new3 = '';
  $('.header-menu-mobail__button').on('click', function() {
    let menu = $('.header-nav');
    $(menu).addClass('menu-mobail-active');
  })
  $('.menu-mobail-close').on('click', function() {
    let menu = $('.header-nav');
    $(menu).removeClass('menu-mobail-active');
  })
  $('.services-block-button').on('click', function() {
    let parent_element = $(this).parent();
    if (parent_element.hasClass('services-block__active')) {
      $(parent_element).removeClass('services-block__active');
    }
    else{
      $(parent_element).addClass('services-block__active');
    }
  })
  $('.attainment-block-list__btn').on('click', function() {
    let prt = $(this).parent('.attainment-block-list__item');
    let child = $(prt).children('.attainment-modal-dark');
    $(child).addClass('attainment-modal-dark-active');
    let body = $('html')
    $(body).addClass('body-scroll');
    return false;
  })
  $('.attainment-modal__close').on('click', function() {
    $('.attainment-modal-dark').removeClass('attainment-modal-dark-active');
    let body = $('html')
    $(body).removeClass('body-scroll');
  })
  $('.services-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: $('.arrows-left-services'),
    nextArrow:$('.arrows-right-services'),
    responsive: [
     {
       breakpoint: 1200,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
         infinite: true,
         dots: true
       }
     },
     {
       breakpoint: 767,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         infinite: true,
         dots: true
       }
     }
  ]
  });
  $('.window-price-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    prevArrow: $('.window-arrow_l'),
    nextArrow:$('.window-arrow_r'),
  });
  $('.reviews-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: $('.arrows-left-reviews'),
    nextArrow:$('.arrows-right-reviews'),
  });
  $('.leaders-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true,
    prevArrow: $('.arrows-left-leaders'),
    nextArrow:$('.arrows-right-leaders'),
    centerMode: true,
    variableWidth: true,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }]
  });
  $('.partners-slider').slick({
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    variableWidth: true,
    prevArrow: $('.arrows-left-partners'),
    nextArrow:$('.arrows-right-partners'),
    responsive: [
     {
       breakpoint: 767,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         infinite: true,
         dots: true,
         variableWidth: false,
         centerMode: false,
       }
     }
  ]
  })

  $('.questions-list__item').on('click', function() {
    $('.questions-list-mobile').removeClass('questions-list-mobile-active');
    let block = $(this).children('.questions-list-mobile');
    if (block.hasClass('questions-list-mobile-active')) {
      $(block).removeClass('questions-list-mobile-active');
    }
    else{
      $(block).addClass('questions-list-mobile-active');
    }
  })
	$(".list-item").on("click", 'a', function (event) {
		event.preventDefault();
		let id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
  lightbox.option({
    disableScrolling: true,
  })
  function myLoop() {
    setTimeout(function() {
      text_area_content_new = text_area_content_new + text_area_content[i]
      $(text_area).attr("placeholder", text_area_content_new);
      i++;
      if (i < text_area_content.length) {
        myLoop();
      }
    }, 70)
  }

  function myLoop2() {
    setTimeout(function() {
      text_area_content_new2 = text_area_content_new2 + text_area_content2[i2]
      $(text_area2).attr("placeholder", text_area_content_new2);
      i2++;
      if (i2 < text_area_content2.length) {
        myLoop2();
      }
    }, 70)
  }

  function myLoop3() {
    setTimeout(function() {
      text_area_content_new3 = text_area_content_new3 + text_area_content3[i3]
      $(text_area3).attr("placeholder", text_area_content_new3);
      i3++;
      if (i3 < text_area_content3.length) {
        myLoop3();
      }
    }, 70)
  }

  $(window).scroll(function() {
    if ($(this).scrollTop() >= 2000) {
      check_scroll += 1;
      if (check_scroll == 1) {
        myLoop();
      }
    }
    if ($(this).scrollTop() >= 3600) {
      check_scroll2 += 1;
      if (check_scroll2 == 1) {
        myLoop2();
      }
    }
    if ($(this).scrollTop() >= 10600) {
      check_scroll3 += 1;
      if (check_scroll3 == 1) {
        myLoop3();
      }
    }
  });
  let pen = $('.consultation-pen')[0];
  let scrollPos = 0;
  $(pen).css('top','70px')
  let scrl = pen.style.top;
  $(window).scroll(function(){
     let st = $(this).scrollTop();
     if (st > scrollPos){
       if (parseInt(scrl) < 180) {
         scrl = parseInt(scrl) + 5;
         let stp = scrl + 'px';
         $(pen).css('top',stp)
       }
     } else {
       if (parseInt(scrl) > -20) {
         scrl = parseInt(scrl) - 5;
         let stp = scrl + 'px';
         $(pen).css('top',stp)
       }
     }
     scrollPos = st;
  });
  $('.services-block__btn').on('click', function() {
    let modal = $('.window-price');
    let body = $('html')
    $(modal).addClass('window-price-active');
    $(body).addClass('body-scroll');
    return false;
  })
});
