//getting mouse position
// $(window).scroll(function() {
// 	let scrollPosition = $(this).scrollTop();
// 	$('.parallax').css({
// 		'background-position': 'center ' + (scrollPosition * 0.5) + 'px'
// 	});

	// if ($(this).scrollTop() > 100) {
	// 	$('#scroll').fadeIn();
	// } else {
	// 	$('#scroll').fadeOut();
	// }	
// });

document.addEventListener('mousemove', parallaxFun);
function parallaxFun(e){
	this.querySelectorAll('.welcomeShehzad').forEach(layer => {
		const speed = welcomeShehzad.getAttribute('data-Speed')

		const x = (window.innerWidth - e.pageX*speed)/100
		const y = (window.innerHeight - e.pageY*speed)/100

		welcomeShehzad.style.transform = `translateX(${x}px translateY(${y}px)`

	})
}
