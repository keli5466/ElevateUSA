jQuery(function($) {

	$(document).ready(function() {
		$('.horizontal_slider').each(function() {
			$(this).appendTo('.owl-carousel').wrapAll("<div class='item' />");
		});

		$('.item').each(function(i) {
			$(this).attr('data-hash', i);
			// $(this).attr('id', i);
		});

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
		$('.btnJump').click(function() {
			$('#myCarousel').trigger('to.owl.carousel', 1);
		});

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