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

	$(".navbar").find(".dropdown").hover(function(){
		$('.dropdown-menu', this).fadeIn('800');/*Dropdown fades IN*/
	}, function(){
		$('.dropdown-menu', this).fadeOut('fast');/*Dropdown fades OUT*/
	});/*hover function*/
});