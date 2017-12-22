jQuery(function($) {

	$(function() {

		//HASH_ANCHOR

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


		//OWL

		$('.horizontal_slider').each(function() {
			$(this).appendTo('.owl-carousel').wrapAll("<div class='item' />");
		});

		$('.item').each(function(i) {
			$(this).attr('data-hash', i);
		});

		var owl = $('.owl-carousel');

		$('.owl-carousel').owlCarousel({
			items: 1,
			loop: false,
			center: true,
			margin: 0,
			URLhashListener: true,
			autoplayHoverPause: true,
			startPosition: 'URLHash'
		});

		function callback(e) {
			items = e.item.count;
			item = e.item.index;
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