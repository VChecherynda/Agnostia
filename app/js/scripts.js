$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		items:1,
		loop: true,
		nav: true,
		autoplay: true,
		navText: ['','']

	});

	/*--- (Portfokio) Pop-up image ---*/

	$('.tab_content_elem').magnificPopup({
		type:'image'
	});

	/*--- (Portfolio) Tabs ---*/

	;(function($){

		let defaults = {
			tab_elem: $('.tab_content_elem'),
			tab_content: $('.tab_content'),
			tab_links: $('.tab_links ul li a')
		}

		$.fn.galleryCollection = function(options) {

			console.log(this);

			this.init = () => {

				let config = $.extend({}, defaults, options);

				var marginRight = (elements, count) => {
					elements.each( (index) => { elements[index].style.marginRight = count+"px" } );
					marginRightZero(elements);
				};

				var marginRightZero = (elements) => {
					let elementsQuantity = Math.ceil( config.tab_content.width() / config.tab_elem.width() - 1) ;
					elements.each( (index) => {
					 	if ( ( index + 1 ) % elementsQuantity === 0 ) {
					 		elements[index].style.marginRight = "0";
						};
					});
				};

				var addTabContent = () => {
				
					config.tab_links.click( function(e) {
						
						let tab_id = $(this).attr('data-tab');
						let tabClass = $('.'+ tab_id);

						e.preventDefault();

						config.tab_content.children().each( function() {
							if(tab_id != 'all') {
								$(this).hide();
							} else {
								$(this).show();
								marginRight(config.tab_elem, 20);
							}
						});

						tabClass.css('display','block');	

						marginRight(tabClass,20);

					});
				};

				marginRightZero(config.tab_elem, 20);

				addTabContent(); 

				$(window).resize( () => {
					marginRight(config.tab_elem, 20);
				});

			};

			this.init();

			return this

		};

	})(jQuery);

	$('.gallery').galleryCollection();

	/*--- Placeholder ---*/

	$('input, textarea').focusin(function(){
		let input = $(this);
		input.data('place-holder-text', input.attr('placeholder'))
		input.attr('placeholder', '');
	});

	$('input, textarea').focusout(function(){
		let input = $(this);
		input.attr('placeholder', input.data('place-holder-text'));
	});

});

/*--- Smooth scroll to the anchor ---*/

$(document).on('click','a', function(e){
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($.attr(this, 'href') ).offset().top
	}, 500);

});