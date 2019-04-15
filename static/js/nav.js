/* Navigation functionalities */
function setActive(index){
	var main_items = $('#main-nav ul li');
	main_items.removeClass("active");
	$(main_items[index]).addClass("active");
}
