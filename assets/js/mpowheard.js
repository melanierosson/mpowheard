// Footer copyright year variable for current year
var year = new Date().getFullYear();
document.getElementById('currentYear').innerText = year;


// ------- Options Page
const optModal = document.getElementById('modal-overlay');
const optLinks = document.querySelectorAll('div.opt.row');

for (var i = 0; i < optLinks.length; i++) {
	console.log(i); // index
	console.log(optLinks[i]); // value
	optLinks[i].addEventListener('click', function() {
		optModal.classList.add('enabled');
		// add show content by index+option
		// add click out or close button to hide modal
	});
}
