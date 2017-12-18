jQuery(function($) {
	function movedown() {

		$('html, body').animate({
			scrollTop: $("#custom_o").offset().top
		}, 2000);

	}


	$(document).ready(function() {
		// function movedown() {
		//
		// 	$('html, body').animate({
		// 		scrollTop: $("#custom_o").offset().top
		// 	}, 2000);
		//
		// }

		$('.horizontal_slider').each(function() {
			$(this).appendTo('.owl-carousel').wrapAll("<div class='item' />");
		});

		$('.item').each(function(i) {
			$(this).attr('data-hash', i);
			// $(this).attr('id', 'slide-' + i);
		});


		// window.location.hash = "";
		// $(function() {
		// 	var hash = parseInt(location.hash.replace('#', ''), 10);
		//
		//
		//
		// 	if (window.location.hash) {
		// 		setTimeout(function() {
		// 			if (typeof hash === 'number') {
		// 				$('html, body').animate({
		// 					scrollTop: $("#custom_o").offset().top
		// 				}, 2000);
		// 			}
		// 		}, 150);
		//
		//
		//
		// 	} else {
		// 		console.log("abc");
		//
		// 	}
		//
		// });


		$(function() {
			function movedown() {

				$('html, body').animate({
					scrollTop: $("#custom_o").offset().top
				}, 2000);

			}
			$("#move_down").click(function() {
				console.log("hel");
				$('html, body').animate({
					scrollTop: $("#custom_o").offset().top
				}, 2000);
			});
			var hash = parseInt(location.hash.replace('#', ''), 10);



			if (window.location.hash) {

				if (window.location.pathname == "/our-programs/") {
					setTimeout(function() {
						if (typeof hash === 'number') {
							$('html, body').animate({
								scrollTop: $("#custom_o").offset().top
							}, 2000);
						}
					}, 150);
				}


				if (window.location.pathname == "/success-stories/") {
					console.log("that");
					var newhash = location.hash.split('')[1];
					$('.tile_click').removeClass('current');
					$('.tile_click').eq(parseInt(newhash, 10)).trigger('click');
					var d = $('.tab-content').get(newhash);
					console.log(d);

					$(d).removeClass('current');
					$(d).addClass('current');
					setTimeout(function() {

						$('html, body').animate({
							scrollTop: $(".tile_click").offset().top
						}, 2000);
					});
				}

			} else {
				console.log("abc");

			}

		});

		// $(function() {
		// 	var hash = parseInt(location.hash.replace('#', ''), 10);
		// 	// hash = hash.split('-')[2];
		// 	if (window.location.hash) {
		// 		if (window.location.pathname == "/sucess-stories/") {
		// 			console.log("that");
		// 			setTimeout(function() {
		//
		// 				$('html, body').animate({
		// 					scrollTop: $(".tile_click").offset().top
		// 				}, 2000);
		// 			});
		// 		}
		//
		// 	} else {
		// 		console.log("abc");
		//
		// 	}
		//
		// });

		// <div id="foo"></div>


		var owl = $('.owl-carousel');
		// var items;
		// var item;
		$('.owl-carousel').owlCarousel({
			items: 1,
			loop: false,
			// mouseDrag: false,
			// touchDrag: false,
			center: true,
			margin: 10,
			URLhashListener: true,
			autoplayHoverPause: true,
			startPosition: 'URLHash'
		});
		// $('.item').each(function(i) {
		// 	$(this).attr('data-hash', i);
		// 	// $(this).attr('id', i);
		// });

		// $('#fwork').click(function() {
		// 	console.log("work");
		// 	 owl.jumpTo(3);
		// 	// $('.owl-carousel').trigger('to.owl.carousel', 3);
		// });

		// owl.owlCarousel({
		// 	items: 1,
		// 	loop: false,
		// 	center: true,
		// 	mouseDrag: false,
		// 	touchDrag: false,
		// 	margin: 10,
		// 	callbacks: true,
		// 	URLhashListener: true,
		// 	// autoplay: false,
		// 	autoplayHoverPause: true,
		// 	startPosition: 'URLHash',
		//
		// 	// nav: true,
		// 	// navText: ["", ""],
		// 	// smartSpeed: 900,
		// 	// margin:10,
		// 	// URLhashListener: true,
		// 	// loop: false,
		// 	// items: 1,
		// 	// URLhashListener: true,
		// 	// autoplayHoverPause: true,
		// 	// startPosition: 'URLHash',
		// 	dots: true,
		// });
		// owl.on('changed.owl.carousel', function(property) {
		// 	var current = property.item.index;
		// 	window.location.hash = current + 1;
		// });
		// owl.on('changed.owl.carousel', function(event) {
		// 	location.hash = 'slide' + event.property.value;
		// });

		function callback(e) {
			items = e.item.count; // Number of items
			item = e.item.index; // Position of the current item
		}

		function next() {
			owl.trigger('next.owl');
			console.log("next");
		}

		function prev() {
			owl.trigger('prev.owl');
			console.log("next");
		}



	});

});