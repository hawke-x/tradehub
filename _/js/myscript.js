// $(document).ready(function(){
// 	$(".navbar").find(".dropdown").on("mouseover", function(){
// 		console.log("you hovered over the dropdown");
// 	});
// });
$(document).ready(function(){

	var $windowHandle = window;

	$("#home a:contains('Home'):first").parent().addClass('z-active-nav');
	$("#products a:contains('Products'):first").parent().addClass('z-active-nav');
	$("#services a:contains('Services'):first").parent().addClass('z-active-nav');
	$("#privacypolicy a:contains('Privacy Policy'):first").parent().addClass('z-active-nav');
	$("#about a:contains('About Us'):first").parent().addClass('z-active-nav');
	$("#register a:contains('Register'):first").parent().addClass('z-active-nav');

	/*------JQuery code for catching events on Top-CART-BAR--------------------------------------------*/
	// $("#expandCart").on("mouseover mouseleave", decideTrayStatus);/*attaching events to tray for deciding status once opened*/
	// $("#logo-cart").hover(function() {$("#expandCart").stop(true).animate({height:115}, 500, "swing");}, 
	// 		function() {$("#expandCart").stop(true).animate({height:0}, 500);});
	
	$("#expandCart").on("mouseover mouseleave", decideTrayStatus);/*attaching events to tray for deciding status once opened*/
	$("#logo-cart").hover(
			function() {
				$("#expandCart").stop(true).animate({top:35}, 500, "swing");
			}, 
			function() {
				$("#expandCart").stop(true).animate({top:-150}, 500, "swing");
			});
	/*----------------------------------------------------------------------------------------------------*/

	/*---Functionality of navbar triggering-------------------------------------*/
	$(".navbar").find(".dropdown").hover(function(){
		$('.dropdown-menu', this).fadeIn('800');/*Dropdown fades IN*/
	}, function(){
		$('.dropdown-menu', this).fadeOut('fast');/*Dropdown fades OUT*/
	});/*hover function*/
	/*---------------------------------------------------------------------------*/

	/*--------------FUNCTIONALITY FOR ITEM -> CART TRAVEL-----------------------*/
	var $prodItems = $('.item-container');//getting access to items container
	$prodItems.find('.item-content').on('click', function(e) {/*currently we are searching for click event on whole div, but we can modify it later*/
		// console.log(this.id);
		e.preventDefault(); /*donot follow if its a link*/
		var $selItem = $(this), /*This is the SELECTED/CLICKED Item*/
			// $ghost = $selItem.clone().appendTo($selItem).addClass('item-ghost');
			
			// $ghost =  $selItem.clone().removeClass('div-action-pos').addClass('item-ghost');
			$ghost = $selItem.clone().appendTo($selItem.parent()).addClass('item-ghost');
			// $selItem.after($ghost);

			
			console.log('Coords of GHOST element; left:' + $ghost.offset().left + ' top: ' + $ghost.offset().top);

			/*Animation part on ghost----------------------------*/
				var selCoords = $selItem.offset(),
					$targetCart = $('#static-cart-bar'),
					targetCoords = $targetCart.offset();

					console.log('Coords of selected element; left:' + selCoords.left + ' top: ' + selCoords.top);
					console.log('Coords of target element; left:' + targetCoords.left + ' top: ' + targetCoords.top);

				$ghost.animate({
					left: -selCoords.left - 21 + $windowHandle.scrollX,
					top: -selCoords.top - 17 + $windowHandle.scrollY,
					width: $windowHandle.screen.availWidth * 0.96,
					opacity: 0
				},
				 1500, "swing", function(e){$(this).remove(); console.log("Item has been removed");
				 	});
			/*---------------------------------------------------*/

		// $(this).clone().css('background-color','red').css('z-index', 1999);
	});

	/*--------------------------------------------------------------------------*/
});

//-----------------START of CART Tray Animation Function----------------------
	function decideTrayStatus(event)
	{
		if(event.type === "mouseleave")
		{
			$("#expandCart").stop(true).animate({top:-150}, 500, "swing");
		}
		else if(event.type === "mouseover")
		{
			$("#expandCart").stop(true).animate({top:35}, 500, "swing");
		}
		else
		{
			$("#expandCart").animate({height:0}, 500, "swing",  function(){
				console.log('Animation of cart has finished');
				
					});		
		}
	}
//------------------------------End of CART Tray animation function-----------------