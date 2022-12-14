//gnb
$(function(){
  $('.gnb > li > a').on('mouseenter focus', function(){
    var gnbindex = $('.gnb > li > a').index($(this));
  
    $('.gnb .inner').removeClass('on');
    $('.gnb .inner:eq('+ gnbindex +')').addClass('on');  
  });  
  $('header').on('mouseleave', function(){
    $('.gnb .inner').removeClass('on');
  });     
});


///fixHeader
var scrollFix = 0;
scrollFix = $(document).scrollTop();
fixHeader();

$(window).on('scroll resize', function(){
  scrollFix = $(document).scrollTop();
  fixHeader();
});

function fixHeader(){
  if (scrollFix > 150) { 
    $('header').addClass('on');
  } else {
    $('header').removeClass('on');
  }
}

//splitting.js
$(function(){
  Splitting();
});


//.top-visual 이미지슬라이드
$(function(){
  $('.visual .slide').slick({
    arrows:true,//화살표
    dots:true,//인디케이터
    autoplay:true, //자동재생
    fade:true,//페이드인효과
    autoplaySpeed:7000,//재생시간
    pauseOnHover:false, //호버시 멈추는 멈추는것을 해제
    pauseOnFocus:false
  });
  $('.slick-prev').text("prev");
  
  //두번째 슬라이드
  $('.slide2').slick({
    arrows: false,
    dots: true,
    autoplay:true,
    infinite: true,
    slidesToShow: 2,
    autoplaySpeed : 6000,
    pauseOnHover : true,
    pauseOnFocus : true
  });

  $(".slide2 #slick-slide-control10").text("서울 마곡지구 업무용지");
  $(".slide2 #slick-slide-control11").text("서울 마곡지구 대방디엠시티2차");
  $(".slide2 #slick-slide-control12").text("화성 동탄 1차 대방디엠시티 더세텀");
  $(".slide2 #slick-slide-control13").text("광주 수완 대방노블랜드 6차");
});

// scrolla animation
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: true //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 

