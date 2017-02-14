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

	let tab_elem =  $('.tab_content_elem');
	let tab_content = $('.tab_content');

	var marginRight = (elements, count) => {

		elements.each( (index) => { elements[index].style.marginRight = count+"px" } );

		marginRightZero(elements);
		 
	};

	var marginRightZero = (elements) => {
		let elementsQuantity = Math.ceil( tab_content.width() / tab_elem.width() - 1) ;
		elements.each( (index) => {
		 	if ( ( index + 1 ) % elementsQuantity === 0 ) {
		 		elements[index].style.marginRight = "0";
			};
		});
	};

	var addTabContent = () => {
	
		$('.tab_links ul li a').click( function(e) {
			
			let tab_id = $(this).attr('data-tab');
			let tabClass = $('.'+ tab_id);

			e.preventDefault();

			tab_content.children().each( function() {
				if(tab_id != 'all') {
					$(this).hide();
				} else {
					$(this).show();
					marginRight(tab_elem, 20);
				}
			});

			tabClass.css('display','block');	

			marginRight(tabClass,20);

		});
	};

	addTabContent(); 

	$(window).resize( () => {
		marginRight(tab_elem, 20);
	});

	

});
