(function ($) {
	// FAQ accordion
	const esabAccordions = $('.wp-block-esab-accordion');
	$(esabAccordions).each(function () {
		// accordion heads
		const esabHeads = $(this).find('.esab__head');
		// accordion bodies
		const esabBodies = $(this).find('.esab__body');
		// active body
		const esabActiveBody = $(this).find('.esab__active');
		// accordion icons
		const esabIcons = $(this).find('.esab__icon');
		// show active accrodion on load
		if (esabActiveBody.length) {
			esabActiveBody.slideDown();
		}
		// each accordion head click event
		$(esabHeads).each(function () {
			$(this).on('click', function () {
				// accordion body
				const esabParent = $(this).parent();
				const esabBody = esabParent.find('.esab__body');
				const esabIcon = $(this).find('.esab__icon');

				if (esabBody.hasClass('esab__active')) {
					esabBody.slideUp("slow");
					esabIcon.removeClass('esab__active_icon');
					esabParent.removeClass('esab__active_accordion');
				        esabBody.removeClass('esab__active');
					// set aria-expanded to false
					$(this).attr('aria-expanded', 'false');
				} else {
					$(esabBodies).each(function () {
						// remove active class from parent
						$(this).parent().removeClass('esab__active_accordion');
						$(this).slideUp("slow");
					        esabBody.removeClass('esab__active');
						// set aria-expanded to false
						$(this)
							.parent()
							.find('.esab__head')
							.attr('aria-expanded', 'false');
					});
					esabBody.slideDown("slow");
					esabBody.addClass('esab__active');
					esabParent.addClass('esab__active_accordion');
					$(esabIcons).each(function () {
						$(this).removeClass('esab__active_icon');
					});
					esabIcon.addClass('esab__active_icon');
					// set aria-expanded to true
					$(this).attr('aria-expanded', 'true');
				}
			});
		});
	});
})(jQuery);

// jQuery(document).ready(function($){
// 	let count_orders = 0;
// $(".esab__heading_txt").each(function(){
// 	count_orders++;
// $(this).wrap("<div class='main_block_accordeon_title'></div>");
// $(this).prepend("<ol class='count_orders' start='"+ count_orders +"'><li class='count_orders_list'></li></ol>");
// });
// });

jQuery(document).ready(function($){
  let count_orders = 0;
function addLeadingZeros(num, totalLength) {
  return String(num).padStart(totalLength, '0');
}
$(".esab__heading_txt").each(function(){
  count_orders++;
$(this).wrap("<div class='main_block_accordeon_title'></div>");
$(this).prepend("<span class='count_orders'>"+ addLeadingZeros(count_orders, 2) +"</span>");
$(this).parent().parent().parent().find(".esab__body").prepend("<span class='count_orders'>"+ addLeadingZeros(count_orders, 2) +"</span>");
$(this).parent().parent().parent().find(".esab__body > p").wrapAll("<div class='second_desc_block'></div>");
$(this).parent().parent().parent().find(".esab__body > span").wrapAll("<div class='first_desc_block'></div>");
$(this).parent().parent().parent().find(".esab__body > div").wrapAll("<div class='main_desc_block'></div>");
});
});
