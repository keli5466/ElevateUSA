jQuery(function($) {
	$(document).ready(function() {

		$(".no_row").each(function(i) {
			$(this).attr('data-id', i);
		});
		$(".popup").each(function(i) {
			$(this).removeClass('.et_pb_row');
			// $(this).removeClass('.worrksfdvs');
			// $(this).appendTo('.our_team');
			$(this).removeClass('.et_pb_row');
			$(this).addClass("item" + i);

			//click event of the button
		});
		$(".popup").wrapInner("<div class='new_wrap' />");

		$(".no_row").click(function() { //click event of the button
			$('.popup').removeClass('.et_pb_row');
			console.log(this);
			var item_id = $(this).attr('data-id');
			console.log(item_id);

			$('.item' + item_id).show();
		});

		$(".popup .close").on("click", function() { //click event of the close button in popup
			$(".popup").hide(); //hide popup
		});
	});
});






jQuery(function($) {
	$(document).ready(function() {
		$('.tile_click').each(function(i) {
			$(this).attr('data-tab', i);
			$(this).attr('id', i);
		});

		$('.tab-content').each(function(i) {
			$(this).attr('data-tab', i);
		});
		$('.tile_click').click(function() {
			$('.tab-content').removeClass('current');
			var tab_id = $(this).attr('data-tab');
			$('.tile_click').removeClass('current');
			var d = $('.tab-content').get(tab_id);
			console.log(d);
			$(d).removeClass('current');
			$(d).addClass('current');
			$(this).addClass('current');
		});

	});
});

jQuery(function($) {
	$(document).ready(function() {
		$('#AZ').click(function(event) {
			$('html, body').animate({
				scrollTop: $('#Ariz').offset().top
			}, 500);
			event.preventDefault();
		});
		$('#NV').click(function(event) {
			$('html, body').animate({
				scrollTop: $('#Neveda').offset().top
			}, 500);
			event.preventDefault();
		});
		$('#DENVER').click(function(event) {
			$('html, body').animate({
				scrollTop: $('#Denver').offset().top
			}, 500);
			event.preventDefault();
		});
		$('#IN').click(function(event) {
			$('html, body').animate({
				scrollTop: $('#Indi').offset().top
			}, 500);
			event.preventDefault();
		});
		$('#NE').click(function(event) {
			$('html, body').animate({
				scrollTop: $('#Mass').offset().top
			}, 500);
			event.preventDefault();
		});
		$('#NYC').click(function(event) {
			$('html, body').animate({
				scrollTop: $('#Newyork').offset().top
			}, 500);
			event.preventDefault();
		});
		$('#FL').click(function(event) {
			$('html, body').animate({
				scrollTop: $('#Flord').offset().top
			}, 500);
			event.preventDefault();
		});
	});
});