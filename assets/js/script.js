/* ===================================================================
    
    Author          : Valid Theme
    Template Name   : Agrul - Organic Farm Agriculture Template
    Version         : 1.0
    
* ================================================================= */

(function($){
    "use strict"
    $(document).ready(function(){

        AOS.init({
            duration: 1500,
        });

         /* ==================================================
            # Testimonial Carousel
         ===============================================*/
		const testimonialStyleOne = new Swiper(".testimonial-style-one-carousel", {
			// Optional parameters
			loop: true,
			slidesPerView: 1,
			spaceBetween: 50,
			autoplay: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
	
			breakpoints: {
				
				1199: {
					slidesPerView: 1,
				}
			},
		});


         /* ==================================================
            # Services Carousel
         ===============================================*/
		const ServicesStyleOne = new Swiper(".service-style-one-carousel", {
			// Optional parameters
			loop: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: false,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1199: {
					slidesPerView: 4,
				}
			},
		});

        /* ==================================================
            # Project Carousel
         ===============================================*/
		const ProjectStyleOne = new Swiper(".project-style-one", {
			// Optional parameters
			loop: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			
			breakpoints: {
				768: {
					slidesPerView: 2.7,
				},
				992: {
					slidesPerView: 3.7,
				},
				1199: {
					slidesPerView: 4.7,
				}
			},
		});


        /* ==================================================
            # Venobox
         ===============================================*/

		 new VenoBox({
			selector: '.my-video-links',
		});

		


			/* ==================================================
		    # Fun Factor Init
		===============================================*/
		$('.counter').counterUp({
			delay: 20,
			time: 3000
		});


		

		

    })
})(jQuery);