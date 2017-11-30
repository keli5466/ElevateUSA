// require.config({
//
//     paths: {
//
//         'OC2': 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.6/owl.carousel.min'
//
//
//         // "ScrollMagic.debug": 'jquery.scrollmagic.debug'
//     },
//     shim: {
//
//         'OC2': ['jquery']
//     }
//
// });
//
//
//
//
//
// require(['jquery', 'domReady', 'foundation.magellan', 'OC2'], function($, domReady) {
//
//
//
//         if (!window.isEditMode) {
//
//             domReady(function() {
//
//             $('.productgrid').each(function(i) {
//
//                 var loc = $('.fncontent:eq(' + (i) + ') .fn-products');
//                 $('<div class="o-carousel" id="carousel' + i + '"></div>').appendTo(loc);
//
//                 $(this).find('article').each(function(j) {
//                     $(this).find('picture').removeClass('ratio-square');
//                     $(this).appendTo('#carousel' + i);
//                 });
//                 $(this).hide();
//             });
//
//
//             $(".o-carousel").each(function(i) {
//
//                 if ($("#carousel" + i).length) {
//                     var len = $("#carousel" + i + " >article").length;
//                     var bDots = len > 4;
//                     $("#carousel" + i).owlCarousel({
//                         loop: true,
//                         nav: false,
//                         dots: true,
//                         scrollPerPage: true,
//                         autoplay: true,
//                         autoplayTimeout: 3000,
//                         autoplayHoverPause: true,
//                         dotsEach: 1,
//                         autoplaySpeed: 800,
//                         lazyLoad: true,
//
//                         responsive: {
//                             0: {
//                                 items: 1,
//                                 stagePadding: 30
//                             },
//                             640: {
//                                 items: 3,
//                                 stagePadding: 60
//                             },
//                             1024: {
//                                 items: 4,
//                                 stagePadding: 0,
//                                 dots: bDots,
//                                 nav: bDots,
//                                 autoplay: bDots
//                             }
//                             // 1480: {
//                             //     items: 4,
//                             //     stagePadding: 60,
//                             //     nav: true
//
//                             // },
//                             // 1680: {
//                             //     items: len,
//                             //     dots: false,
//                             //     stagePadding: 0,
//                             //     autoplay: false,
//                             //     loop: false
//
//                             // }
//
//                         }
//                     });
//
//                 }
//             });
//
//
//
//         $(".subnav-1 a").click(function() {
//             if ($(this).hasClass('is-active')) return;
//
//             $(".subnav-1 a").removeClass("is-active");
//             $(this).addClass("is-active");
//             $(".fncontent").toggleClass('is-active');
//
//         });
//
//         $("picture").find("[lsrcset]").each(function(i, item) {
//                 var src = $(this).attr('lsrcset') || '';
//                 $(this).attr('srcset', src);
//         });
//
//
//
//     });
// }
// });
