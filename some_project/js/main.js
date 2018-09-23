$(window).scroll(function(){
	var st = $(this).scrollTop();
	$(".paralaxP").css({
		"transform":"translate(0%, "+ st   + "%"
	})

	});	

$(window).scroll(function(){
	var st = $(this).scrollTop();
	$(".paralaxImg").css({
		"transform":"translate(0%, -"+ st/20   + "%"
	})

	});	

