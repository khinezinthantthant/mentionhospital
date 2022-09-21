$(document).ready(function(){
	// console.log('i am working');

	// Start Header Section
	// Start Banner Section
	// End Banner Section
	// End Header Section

	// Start Info Section
	$(window).scroll(function(){
		let getscrollpoint = $(this).scrollTop();
		// console.log(getscrollpoint);

		if(getscrollpoint >= 220){
			$(".infotexts").addClass('fromlefts');
			$(".infopics").addClass('fromrights');
		}else{
			$(".infotexts").removeClass('fromlefts');
			$(".infopics").removeClass('fromrights');
		}
	});
	// End Info Section


	// Start ADV Section
	$("#videos").click(function(){
		var getmodal = $(this).data("bs-target");
		var getvideosrc = $(this).data("video");
		var videourlwithauto = getvideosrc+"?autoplay=1";

		$(getmodal + " iframe").attr("src",videourlwithauto);

		$(getmodal + " button.btn-close").click(function(){
			$(getmodal+ " iframe").attr("src",getvideosrc);
		});

		$(getmodal).click('hidden.bs.modal',function(){
			$(getmodal +" iframe").attr("src",getvideosrc);
		});
	});
	// End ADV Section


	// Start Premises Section
	$("#lightslider").lightSlider({
		item:4,
		auto:true,
        loop:true,
        slideMove:1,
        speed:600
	}).play();

	// End Premises Section


	// Start Pricing Section
	$(window).scroll(function(){
		let getscroll = $(this).scrollTop();
		// console.log(getscroll);

		if(getscroll >= 2450){
			$(".cardones").addClass("movelefts");
			$(".cardtwos").addClass("moverights");
			$(".cardthrees").addClass("movebottoms");
		}else{
			$(".cardones").removeClass("movelefts");
			$(".cardtwos").removeClass("moverights");
			$(".cardthrees").removeClass("movebottoms");
		}
	});
	// End Pricing Section


	// Start Join Us Section
	$("#accordion").accordion()
	// End Join Us Section


	// Start Footer Section
	$("#getyear").text(new Date().getUTCFullYear());
	// End Footer Section


	// Start Progress

	$(window).scroll(function(){
		var getprogress = $("#progress");
		var getprogressval = $("#progressvalues");
		var getscrolltop = $(this).scrollTop();
		// console.log(getscrolltop);


		//formula st * 100 / (pjheight - cvheight)

	// By Jquery

		// var getscrollheight = $(document).height()
		// // console.log(getscrollheight);
		// var getclientheight = $(window).height();
		// // console.log(getclientheight);
		// var calheight = getscrollheight - getclientheight;
		// var getfinalheight = Math.round(getscrolltop * 100 / calheight);
		// // console.log(getfinalheight);

// By JavaScript
	
		var getscrollheight = document.documentElement.scrollHeight;
		// console.log(getscrollheight);
		var getclientheight = document.documentElement.clientHeight;
		// console.log(getclientheight);
		var calheight = getscrollheight - getclientheight;
		var getfinalheight = Math.round(getscrolltop * 100 / calheight);
		// console.log(getfinalheight);


		getprogressval.text(`${getfinalheight}%`);
		getprogress.css({
			"background":`conic-gradient(steelblue ${getfinalheight}%,#eee ${getfinalheight}%)`
		});

		

	});

	// End Progress

});
