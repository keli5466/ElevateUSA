//
// var main = main = $('#main ul');
//
// $('.scroll').click(function(event) {
//
//     event.preventDefault();
//
//     var full_url = this.href,
//         parts = full_url.split('#'),
//         trgt = parts[1],
//         target_offset = $('#'+trgt).offset(),
//         target_top = target_offset.top;
//
//     $('html, body').animate({scrollTop:target_top}, 500);
//
//     /* Remove active class on any li when an anchor is clicked */
//
//     main.children().removeClass();
//
//     /* Add active class to clicked anchor's parent li */
//
//     $(this).parent().addClass('active');
//
// });
//




(function($) {
$(document).ready(function() {
		$('#pleasework').appendTo('.owl-item');
    var navChildren = $("#top-menu li").children();
    var aArray = [];
    for (var i = 0; i < navChildren.length; i++) {
        var aChild = navChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    }
    $(window).scroll(function() {
        var windowPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var docHeight = $(document).height();
        for (var i = 0; i < aArray.length; i++) {
            var theID = aArray[i];
            var secPosition = $(theID).offset().top;
            secPosition = secPosition - 135;
            var divHeight = $(theID).height();
            divHeight = divHeight + 90;
            if (windowPos >= secPosition && windowPos < (secPosition + divHeight)) {
                $("a[href='" + theID + "']").parent().addClass("active");
            } else {
                $("a[href='" + theID + "']").parent().removeClass("active");
            }
        }
    });

});
})(jQuery);
