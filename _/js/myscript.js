// $(document).ready(function(){
// 	$(".navbar").find(".dropdown").on("mouseover", function(){
// 		console.log("you hovered over the dropdown");
// 	});
// });
$(document).ready(function(){

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

	$(".navbar").find(".dropdown").hover(function(){
		$('.dropdown-menu', this).fadeIn('800');/*Dropdown fades IN*/
	}, function(){
		$('.dropdown-menu', this).fadeOut('fast');/*Dropdown fades OUT*/
	});/*hover function*/
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