// ------- FRONT PAGE ANIMATIONS ------- //
function is_touch_device() {  
  try {  
    document.createEvent("TouchEvent");  
    return true;  
  } catch (e) {  
    return false;  
  }  
}

const largePow = document.getElementById('powAnim');
const largePow2 = document.getElementById('powAnim2');
const largePow3 = document.getElementById('powAnim3');

function followMouse(e) {
	x = e.clientX;
    y = e.clientY;
    largePow.style.backgroundPosition = `${x/10}px ${y/10}px`;
    if (largePow2) {
    	largePow2.style.backgroundPosition = `${x/10}px ${y/10}px`;
    }
    if (largePow3) {
    	largePow3.style.backgroundPosition = `${x/10}px ${y/10}px`;
    }
}
if (is_touch_device()) {
	// add class here that will have the background animate on its own
	document.querySelector('body#main').style.overflowY = "hidden";
	setTimeout(function(){ 
		largePow.classList.add('touch-anim');
		largePow2.classList.add('touch-anim');
		largePow3.classList.add('touch-anim');
	}, 450);
} else {
	document.addEventListener("mousemove", followMouse, false);
}

// Empowerment toggle text
function toggleEmpTxt() {
	const empTxt = document.getElementById('empowerText');
	const arrow = document.getElementById('arrow');
	if (empTxt.classList.contains('on')) {
		empTxt.classList.remove('on');
		arrow.classList.remove('open');
	} else {
		empTxt.classList.add('on');
		arrow.classList.add('open');
	}
}