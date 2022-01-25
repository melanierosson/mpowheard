const arrowDeskPrev = document.querySelector('.left-arrow.desktop-review-slide-buttons.carousel-control');
const arrowDeskNext = document.querySelector('.right-arrow.desktop-review-slide-buttons.carousel-control');
const arrowMobilePrev = document.querySelector('.left-arrow.mobile-reviews.carousel-control');
const arrowMobileNext = document.querySelector('.right-arrow.mobile-reviews.carousel-control');

const review01 = document.getElementById('review-01');
const review02 = document.getElementById('review-02');

function hasClass(el, cls) {
  return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
}

window.onload = function() {
	// PREVIOUS
	arrowDeskPrev.addEventListener('click', function() {
		if(hasClass(review01,'active')){
			review01.classList.remove('active');
			review02.classList.add('active');
		} else {
			if(hasClass(review02, 'active')){
				review02.classList.remove('active');
				review01.classList.add('active');
			}
		}
	});
	arrowMobilePrev.addEventListener('click', function() {
		if(hasClass(review01,'active')){
			review01.classList.remove('active');
			review02.classList.add('active');
		} else {
			if(hasClass(review02, 'active')){
				review02.classList.remove('active');
				review01.classList.add('active');
			}
		}
	});
	// NEXT
	arrowDeskNext.addEventListener('click', function() {
		if (hasClass(review01,'active')){
			review01.classList.remove('active');
			review02.classList.add('active');
		} else {
			if (hasClass(review02, 'active')){
				review02.classList.remove('active');
				review01.classList.add('active');
			}
		}
	});
	arrowMobileNext.addEventListener('click', function() {
		if (hasClass(review01,'active')){
			review01.classList.remove('active');
			review02.classList.add('active');
		} else {
			if (hasClass(review02, 'active')){
				review02.classList.remove('active');
				review01.classList.add('active');
			}
		}
	});
}
