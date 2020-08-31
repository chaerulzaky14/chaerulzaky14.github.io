// event pada link
$('.page-scroll').on('click', function(e)  {


// AMBIL ISI href
	var tujuan = $(this).attr('href');


//TANGKAP ELEMENT YBS
	 var elemenTujuan = $(tujuan);


// PINDAHKAN SCROLLNYA
 	$('html,body').animate({
 			scrollTop: elemenTujuan.offset().top - 50
 	}, 1000, 'swing');

	 e.preventDefault();
});



// PARALLAX

// about text p
$(window).on('load', function() {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});




$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	// JUMBOTRON

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});


	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});


	// PORTFOLIO 
	if( wScroll > $('.portfolio').offset().top - 250 ) {
			$('.portfolio .thumbnail').each(function(i) {
				setTimeout(function() {
			$('.portfolio .thumbnail').eq(i).addClass('muncul'); 	
				}, 300 * (i+1));
			});




		

	}

});