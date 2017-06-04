/*

[Master JS File (Unminified) : MAIN.JS]
–––––––––––––––––––––––––––––––––––––––––––––––––– 

 * OSCAR - A premium portfolio / agency template from designova
 * Author: designova, http://www.designova.net
 * Copyright (C) 2016 designova
 * This is a premium product. For licensing queries please contact info@designova.net
 */

(function(){
  "use strict"; // Start of use strict

        //Detecting viewpot dimension
        var vH = $(window).height();
        var vW = $(window).width();
        //Adjusting Intro Components Spacing based on detected screen resolution
        $('.fullwidth').css('width', vW);
        $('.fullheight').css('height', vH);
        $('.halfwidth').css('width', vW / 2);
        $('.halfheight').css('height', vH / 2);
        
        //PRELOADER
        $('body, html').addClass('preloader-running');
        $('#mastwrap').css('visibility', 'hidden');
        $(window).load(function() {
            $("#status").fadeOut();
            $("#preloader").delay(1000).fadeOut(1000);
            $('body, html').removeClass('preloader-running');
            $('body, html').addClass('preloader-done');
            $("#mastwrap").delay(1000).css('visibility',
                'visible');
        });

        //Common UX/UI
        if ( $( "#works-container" ).length ) {
            $( ".works-filter-wrap" ).fadeIn(3000);
        }
        var LinkPoster;
        $('.main-link').on('mouseenter', function(){
            LinkPoster = $(this).html();
            $('.link-show-poster h1').html(LinkPoster);
            $('.link-show-poster').stop().fadeIn(1000);
        });
        $('.main-link').on('mouseleave', function(){
            $('.link-show-poster h1').html(' ');
            $('.link-show-poster').stop().fadeOut(1000);
        });


        //Mobile Only Navigation (SLIMMENU JS with multi level menu support)
                $('ul.slimmenu').slimmenu({
                    resizeWidth: '992',
                    collapserTitle: '',
                    easingEffect: 'easeInOutQuint',
                    animSpeed: 'medium',
                });

                $('.slimmenu li a:not(.sub-collapser)').on('click',function(){
                            $('ul.slimmenu').removeClass('expanded').slideUp();
                });

        //Sub Menu Trigger
        $('.main-menu li a.sub-menu-trigger').on('mouseenter', function(){
            $(this).next('.sub-menu').stop().slideDown(1000);
        });
        $('.main-menu li').on('mouseleave', function(){
            $('.sub-menu').stop().slideUp(1000);
        });


        //CAROUSEL
        $(window).load(function() {
            
        $(".team-carousel").owlCarousel({
            autoWidth: false,
            autoHeight: false,
            items: 3,
            margin: 30,
            loop: true,
            nav: true,
            dots: false,
            navText: false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:3
                }
            }
        });
        $(".testimonial-carousel").owlCarousel({
            autoWidth: false,
            autoHeight: true,
            items: 2,
            loop: true,
            nav: false,
            dots: true,
            navText: false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
        $(".home-testimonial-carousel").owlCarousel({
            autoWidth: false,
            autoHeight: true,
            items: 3,
            loop: true,
            nav: false,
            dots: true,
            navText: false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:3
                }
            }
        });
        $(".slider-carousel").owlCarousel({
            autoWidth: false,
            autoHeight: true,
            items: 1,
            loop: true,
            nav: true,
            dots: false,
            navText: false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });

        });

        //ISOTOPE
                //ISOTOPE GLOBALS
                var $container1 = $('.works-container');


                //ISOTOPE INIT
                $(window).load(function() {

                   //checking if all images are loaded
                    $container1.imagesLoaded( function() {

                        //init isotope once all images are loaded
                        $container1.isotope({
                            // options
                            itemSelector: '.works-item',
                            layoutMode: 'masonry',
                            transitionDuration: '0.8s'
                        });


                        //forcing a perfect masonry layout after initial load
                        setTimeout(function() {
                            $container1.isotope('layout');
                        }, 500);


                        // triggering filtering
                        $('.works-filter li a').on('click', function() {
                            $('.works-filter li a').removeClass('active');
                            $(this).addClass('active');

                            var selector = $(this).attr('data-filter');
                            $('.works-container').isotope({
                                filter: selector
                            });
                            setTimeout(function() {
                                $container1.isotope('layout');
                            }, 700);
                            return false;
                        });


                        //Isotope ReLayout on Window Resize event.
                        $(window).on('resize', function() {
                            $container1.isotope('layout');
                        });

                        //Isotope ReLayout on device orientation changes
                        window.addEventListener("orientationchange", function() {
                            $container1.isotope('layout');
                        }, false);

                    });

                });


        //VENOBOX
        $('.venobox, .image-lightbox-link').venobox({
            numeratio: true
        });

        //BX SLIDER
        $(document).ready(function(){
          $('.bxslider').bxSlider({
            adaptiveHeight:true
          });
        });


        //MEDIA BACKGROUND
        // $('.project-video-bg').umbg({
        //     'mediaPlayerType': 'YouTube', // YouTube, Vimeo, Dailymotion, Wistia, HTML5, Image, or Color.
        //     'mediaId': 'k7dEsMCFfFw' // Use the video id . For HTML5 use the location and video filename.
        // });

        //RESPONSIVE VIDEO EMBED
        $(document).ready(function(){
            // Target your .container, .wrapper, .post, etc.
            $(".project-video").fitVids();
        });


        //PARALLAX
        //Initialize Each Parallax Layer  
        function parallaxInit() {
            $.stellar({
                positionProperty: 'transform'
            });
        }

        if (!device.tablet() && !device.mobile()) {

            //Activating Parallax effect if non-mobile device is detected
            $(window).bind('load', function() {
                parallaxInit();
            });


        } else {

            //Dectivate Parallax effect if mobile device is detected (bg image is displayed)
            $('.parallax, .parallax-layer').addClass('no-parallax');

        }   
        

})();
//  Outer wrapper $(function ($)  : ends

