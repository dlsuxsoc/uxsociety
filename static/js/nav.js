/* Navigation functionalities */

$(document).ready(function(){
	$('#hamburger').click(function(){
		$('#main-list').addClass('show');
	});
	
	$('#close').click(function(){
		$('#main-list').removeClass('show');
	});
});

function setActive(index){
	var main_items = $('#main-nav ul li');
	main_items.removeClass("active");
	$(main_items[index]).addClass("active");
}
