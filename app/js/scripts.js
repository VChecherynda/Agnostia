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

	/*--- (Portfokio) Tabs ---*/

	var tab_elem =  $('.tab_content_elem');
	var tab_content = $('.tab_content');

	function MarginRight(px){
		tab_content.each(function(){
			$(this).children().css({'margin-right':' ' + px + 'px'});
		})
	};

	function MarginRightZero(){
		var elementsQuantity = Math.ceil( tab_content.width() / tab_elem.width() - 1) ;
		tab_content.children()+$(':nth-child('+elementsQuantity+'n)').css('margin-right','0');
	};

	function addTabContent() {
	
		$('.tab_links ul li a').click(function(e){
			
			var tab_id = $(this).attr('data-tab');
			var tabClass = $('.'+ tab_id);

			e.preventDefault();

			tab_content.children().each(function(){
				if(tab_id != 'all') {
					$(this).hide();
				} else {
					$(this).show();
				}
			})

			tabClass.css('display','block');	

			MarginRight(20);
		  	MarginRightZero();	

		});
	};

	$(window).resize(function() {
		MarginRight(20);
	  	MarginRightZero();
	});

	addTabContent(); 
	

});

