// jQuery(function($) {
// $(document).ready(function() {
//
// 	$('.tab-content').each(function() {
// 		$(this).appendTo('.respsonsive_owl');
// 	});
// 		var rowl = $('.respsonsive_owl');
// rowl.owlCarousel({
// loop:true,
// margin:10,
// slideSpeed : 300,
// 		 paginationSpeed : 400,
// 		 singleItem:true,
// // rewindNav: false,
// nav:true,
// items:1,
// });
// });
// });
// jQuery(function($) {
// $(document).ready(function() {
//
// 	$('.simple_slider').each(function() {
// 		$(this).appendTo('.s-owl-carousel');
// 	});
// 		var sowl = $('.s-owl-carousel');
// sowl.owlCarousel({
// // loop:true,
// // margin:10,
// slideSpeed : 300,
// 		 paginationSpeed : 400,
// 		 singleItem:true,
// rewindNav: false,
// nav:true,
// items:1,
// });
// });
//
//
//
// });


jQuery(function($) {
	$(document).ready(function() {
		$('.social-feed-text').appendTo('.name');
});
		$(document).ready(function() {
			$('.social-feed-text').appendTo('.name');
			$('.social-feed-text').each(function() {
			  $(this).appendTo('.name');
					// $(this).attr('id', i);

			});


			var winHeight = $(window).height();
			  $('.owl-controls').css({ 'height': winHeight});

$('.horizontal_slider').each(function() {
  $(this).appendTo('.owl-carousel');
		// $(this).attr('id', i);

});
$('.owl-stage .owl-item').each(function(i) {
	$(this).attr('data-hash', i);
	$(this).attr('id', i);
});

$('.owl-carousel').addClass('.owl-theme');
	var owl = $('.owl-carousel');
	var items;
var item;
	owl.owlCarousel({

	    nav:true,
			 navText : ["",""],
			    smartSpeed :900,
	    // margin:10,
			loop: true,
			items:1,
			dots:true,
			// rewindNav: true,
       // navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],


		  onChanged: callback,
	});

 function callback(e) {
    items = e.item.count;     // Number of items
    item = e.item.index;     // Position of the current item
}
function next(){
	          owl.trigger('next.owl');
						console.log("next");
}
function prev(){
	          owl.trigger('prev.owl');
						console.log("next");
}
owl.bind('mousewheel', function () {
    // console.log(new Date().getTime());
});
	// owl.on('mousewheel', '.owl-stage', function (e) {
	//         if (e.deltaY < 0) {
	// 										 	setTimeout(next, 600);
	//         } else {
	//           setTimeout(prev, 600);
	//         }
	// 				 // e.preventDefault();
	//       });


	});

});
