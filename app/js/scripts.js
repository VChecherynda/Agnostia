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

	var tab_elem =  $('.tab_content_elem');
	var tab_content = $('.tab_content');

	function marginRight(elements, count){
		elements.each(function(index){
			elements[index].style.marginRight = count+"px";
		});

		marginRightZero(elements);
		 
	};

	function marginRightZero(elements){
		var elementsQuantity = Math.ceil( tab_content.width() / tab_elem.width() - 1) ;
		elements.each(function(index){
		 	if ( ( index + 1 ) % elementsQuantity === 0 ) {
		 		elements[index].style.marginRight = "0";
			};
		});
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
					marginRight(tab_elem, 20);
				}
			});

			tabClass.css('display','block');	

			marginRight(tabClass,20);

		});
	};

	addTabContent(); 

	$(window).resize(function() {
		marginRight(tab_elem, 20);
	});

	

});
