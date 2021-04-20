// Footer copyright year variable for current year
var year = new Date().getFullYear();
document.getElementById('currentYear').innerText = year;

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

function followMouse(e) {
	x = e.clientX;
    y = e.clientY;
    largePow.style.backgroundPosition = `${x/10}px ${y/10}px`;
    if (largePow2) {
    	largePow2.style.backgroundPosition = `${x/10}px ${y/10}px`;
    }
}
if (is_touch_device()) {
	// add class here that will have the background animate on its own
	document.querySelector('body#main').style.overflowY = "hidden";
	largePow.classList.add('touch-anim');
	largePow2.classList.add('touch-anim');
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



// ------- OPTIONS PAGE ------- //
function optionsPage() {
	const optModal = document.getElementById('modal-overlay');
	const optLinks = document.querySelectorAll('div.opt.row');
	const modalWindow = document.getElementById('opt-modal');
	let modalEnabled = false;

	// TODO: Fill in content 
	const options = {
		staticWebSm: {
			onetime: true,
			pricePkg: null,
			priceNoPkg: `<span class="fw-500">$600 one-time</span> ($250 deposit)`,
			title: `Static Website (Small)`,
			descr: `This is a 1 page responsive website design and development that can include light content ` +
			`strategy, copywriting, SEO, and optimized images.<br/><small>*Pricing does not include domain and ` +
			`hosting costs, nor animations, how-to documentation, or additional features.</small>`,
			multi: null
		},
		staticWebLg: {
			onetime: true,
			pricePkg: null,
			priceNoPkg: `<span class="fw-500">$900 - $2,000 varies</span> ($500 deposit)`,
			title: `Static Website (Large)`,
			descr: `This is a 1-5 page responsive website design and development that can include light content ` +
			`strategy, copywriting, SEO, optimized images, plus one additional feature<sup>1</sup>.<br/><small>*Pricing ` +
			`does not include domain and hosting costs.</small><br/><small><sup>1</sup> Additional features include how-to ` +
			`documentation, demos, animations, and more advanced integrations.</small>`,
			multi: null
		},
		wpSiteSm: {
			onetime: true,
			pricePkg: null,
			priceNoPkg: `<span class="fw-500">$500 - $2,800 varies</span> ($500 deposit)`,
			title: `WordPress Site (Small)`,
			descr: `This is a standard WordPress website built off of a paid or free existing theme with no more than 5 `
			+ `standard features (blog, custom form, etc.). ` +
			`Package includes light content strategy, copywriting, SEO, and optimized images.<br/><small>*Pricing ` +
			`does not include domain and hosting costs.</small>`,
			multi: null
		},
		wpSiteLg: {
			onetime: true,
			pricePkg: null,
			priceNoPkg: `<span class="fw-500">$3,000+ varies</span> (deposit varies)`,
			title: `WordPress Site (Large)`,
			descr: `This is a 10+ section WordPress website manually developed off of provided mocks and/or contains 6 or more main ` +
			`features (scheduler, contact us form, blog, API integrations such as through a social media feed or live webcam ` +
			`view, etc.)<br/><small>*Pricing ` +
			`does not include domain and hosting costs.</small>`,
			multi: null
		},
		ecommWebSm: {
			onetime: true,
			pricePkg: null,
			priceNoPkg: `<span class="fw-500">$1,000 - $1,500 varies</span> ($500 deposit)`,
			title: `E-Commerce Site (Small)`,
			descr: `This is a WooCommerce Online Store with 5-20 different products (other features will need to be added separately). ` +
			`Package includes light content strategy, copywriting, SEO, and optimized images.<br/><small>*Pricing ` +
			`does not include domain and hosting costs.</small>`,
			multi: null
		},
		ecommWebLg: {
			onetime: true,
			pricePkg: null,
			priceNoPkg: `<span class="fw-500">$2,000+ varies</span> (deposit varies)`,
			title: `E-Commerce Site (Large)`,
			descr: `This is a WooCommerce Online Store with 20-50+ different products (other features will need to be added separately). ` +
			`Package includes light content strategy, copywriting, SEO, and optimized images.<br/><small>*Pricing ` +
			`does not include domain and hosting costs.</small>`,
			multi: null
		},
		socialEngage: {
			onetime: false,
			pricePkg: `<span class="fw-500">$180/mo.</span> with a package`,
			priceNoPkg: `<span class="fw-500">$200/mo.</span> per diem<br/> + $150 per additional account `,
			title: `Social Media Engagement`,
			descr: `This option includes ~20 minutes each day spent on each account with engagement activity targeting the ` +
			`current platform's algorithm rating system. Consistent social media engagement activity increases the visibility of published content.`,
			multi: null
		},
		copyWriting: {
			onetime: false,
			pricePkg: `<span class="fw-500">$125 per post</span> with a package`,
			priceNoPkg: `<span class="fw-500">$150 per post</span> per diem`,
			title: `Copywriting`,
			descr: `This can be purchased one-time or on an ongoing basis. It is a fully researched and SEO optimized blog `+
			`post or article of 1000-2000 words in length.`,
			multi: null
		},
		webUpdates: {
			onetime: false,
			pricePkg: `<span class="fw-500">$50 hrly.</span> with a package`,
			priceNoPkg: `<span class="fw-500">$55 hrly.</span> per diem`,
			title: `Website Updates`,
			descr: `Web updates can be done on your website with content verbiage, file changes, or media content, ` +
			`Wordpress, WP Plugins, HTML, SCSS/CSS, JavaScript, JQuery, PHP, React, or other format as needed.`,
			multi: null
		},
		trainingHowTo: {
			onetime: false,
			pricePkg: null,
			priceNoPkg: null,
			title: `Training & How-To Docs`,
			descr: null,
			multi: {
				recordedDemo: {
					onetime: false,
					pricePkg: `<span class="fw-500">$60 hrly.</span> with a package`,
					priceNoPkg: `<span class="fw-500">$100 hrly.</span> per diem`,
					title: `Recorded Demos`,
					descr: `Recorded demos are like personal webinars that demonstrate how to use, maintain, ` +
					`or update a specific feature or service. They can be purchased as a standalone educational ` +
					`item or accompanying a product package.`
				},
				customHowToDocs: {
					onetime: false,
					pricePkg: `<span class="fw-500">$40 hrly.</span> with a package`,
					priceNoPkg: `<span class="fw-500">$50 hrly.</span> per diem`,
					title: `Custom How-To Documentation`,
					descr: `Custom How-To Documentation will usually involve a written tutorial or step-by-step ` +
					`guide published on Google Docs. It will always contain screen shots and very simple, clear ` +
					`instructions for how to use, maintain, or update a specific feature or service.`
				}
			}
		},
		specialWebFeatures: {
			onetime: false,
			pricePkg: null,
			priceNoPkg: `Price done by <span class="fw-500">quote only<span>`,
			title: `Special Website Features`,
			descr: `Additional website features includes custom animations, special functioning modal boxes, ` +
			`accessibility features, unique dynamic content, risky subjects, add-on WP features like blog, ` +
			`live social feed integration, UX phases such as wireframes, data gathering, user testing, etc.`,
			multi: null
		},
		uxAudit: {
			onetime: false,
			pricePkg: null,
			priceNoPkg: `<span class="fw-500">$50 hrly.</span> per diem`,
			title: `UX Audit`,
			descr: `Our UX Audit is a complete user experience audit around the website or software as ` +
			`requested with results provided in a spreadsheet with items categorized by urgency and type. Communications ` +
			`with other staff or developers can optionally be included.`,
			multi: null
		},
		socialAuditPlan: {
			onetime: false,
			pricePkg: `<span class="fw-500">$1,500 with a package</span> ($500 deposit)`,
			priceNoPkg: `<span class="fw-500">$2,000 per diem</span> ($500 deposit)`,
			title: `Social Media Audit & Plan`,
			descr: `This is a deep dive social media audit for all available platforms (discount provided for 3 or less platforms) with ` +
			`paired strategy plan and resources for future content creation, scheduling, and a choice between:` +
			`<ul><li> a small set of branded Instagram templates</li>` +
			`<li> non-copyrighted, optimized and sized images with long-form content (LinkedIn, Blog, Facebook)</li>` +
			`<li> large batch of short-form verbiage content and external references (Twitter)</li></ul>`,
			multi: null
		},
		socialTemplates: {
			onetime: false,
			pricePkg: `<span class="fw-500">$1,000 with a package</span> ($500 deposit)`,
			priceNoPkg: `<span class="fw-500">$1,500 per diem</span> ($500 deposit)`,
			title: `Social Media Templates`,
			descr: `This package includes 5 custom, branded Instagram story templates and 10 post templates, plus additional resources and assets for creating ` +
			`reels + videos. (Templates can be made in either Canva or Adobe XD.)`,
			multi: null
		}
	};

	for (var i = 0; i < optLinks.length; i++) {
	// console.log(i); // index
	// console.log(optLinks[i]); // value
		optLinks[i].classList.add('opt-' + i);
		optLinks[i].addEventListener('click', function() {
			optModal.classList.add('enabled');
			setTimeout(function(){ modalEnabled = true; }, 500);
			let thisClasses = this.className;
			switch(thisClasses) {
			  case 'opt row opt-0':
			    document.querySelector('article.opt-modal').nextElementSibling.style.display = "none";
			    if (document.querySelector('article.opt-modal').classList.contains('single')) {} else {
			    	document.querySelector('article.opt-modal').classList.add('single')
			    }
			    document.querySelector('section#opt-modal header h5').innerText = options.staticWebSm.title;
			    document.querySelector('article.opt-modal h6.opt-sub.header').style.display = "none";
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').style.display = "none";
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.staticWebSm.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerHTML = options.staticWebSm.descr;
			    break;
			  case 'opt row opt-1':
			    document.querySelector('article.opt-modal').nextElementSibling.style.display = "none";
			    if (document.querySelector('article.opt-modal').classList.contains('single')) {} else {
			    	document.querySelector('article.opt-modal').classList.add('single')
			    }
			    document.querySelector('section#opt-modal header h5').innerText = options.staticWebLg.title;
			    document.querySelector('article.opt-modal h6.opt-sub.header').style.display = "none";
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').style.display = "none";
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.staticWebLg.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerHTML = options.staticWebLg.descr;
			    break;
			  case 'opt row opt-2':
			    document.querySelector('article.opt-modal').nextElementSibling.style.display = "none";
			    if (document.querySelector('article.opt-modal').classList.contains('single')) {} else {
			    	document.querySelector('article.opt-modal').classList.add('single')
			    }
			    document.querySelector('section#opt-modal header h5').innerText = options.wpSiteSm.title;
			    document.querySelector('article.opt-modal h6.opt-sub.header').style.display = "none";
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').style.display = "none";
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.wpSiteSm.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerHTML = options.wpSiteSm.descr;
			    break;
			  case 'opt row opt-3':
			    document.querySelector('article.opt-modal').nextElementSibling.style.display = "none";
			    if (document.querySelector('article.opt-modal').classList.contains('single')) {} else {
			    	document.querySelector('article.opt-modal').classList.add('single')
			    }
			    document.querySelector('section#opt-modal header h5').innerText = options.wpSiteLg.title;
			    document.querySelector('article.opt-modal h6.opt-sub.header').style.display = "none";
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').style.display = "none";
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.wpSiteLg.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerHTML = options.wpSiteLg.descr;
			    break;
			  case 'opt row opt-4':
			    document.querySelector('article.opt-modal').nextElementSibling.style.display = "none";
			    if (document.querySelector('article.opt-modal').classList.contains('single')) {} else {
			    	document.querySelector('article.opt-modal').classList.add('single')
			    }
			    document.querySelector('section#opt-modal header h5').innerText = options.ecommWebSm.title;
			    document.querySelector('article.opt-modal h6.opt-sub.header').style.display = "none";
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').style.display = "none";
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.ecommWebSm.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerHTML = options.ecommWebSm.descr;
			    break;
			  case 'opt row opt-5':
			    document.querySelector('article.opt-modal').nextElementSibling.style.display = "none";
			    if (document.querySelector('article.opt-modal').classList.contains('single')) {} else {
			    	document.querySelector('article.opt-modal').classList.add('single')
			    }
			    document.querySelector('section#opt-modal header h5').innerText = options.ecommWebLg.title;
			    document.querySelector('article.opt-modal h6.opt-sub.header').style.display = "none";
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').style.display = "none";
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.ecommWebLg.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerHTML = options.ecommWebLg.descr;
			    break;
			  case 'opt row opt-6':
			    document.querySelector('article.opt-modal').nextElementSibling.style.display = "none";
			    if (document.querySelector('article.opt-modal').classList.contains('single')) {} else {
			    	document.querySelector('article.opt-modal').classList.add('single')
			    }
			    document.querySelector('section#opt-modal header h5').innerText = options.socialEngage.title;
			    document.querySelector('article.opt-modal h6.opt-sub.header').style.display = "none";
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').innerHTML = options.socialEngage.pricePkg;
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.socialEngage.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerHTML = options.socialEngage.descr;
			    break;
			  case 'opt row opt-7':
			    document.querySelector('article.opt-modal').nextElementSibling.style.display = "none";
			    if (document.querySelector('article.opt-modal').classList.contains('single')) {} else {
			    	document.querySelector('article.opt-modal').classList.add('single')
			    }
			    document.querySelector('section#opt-modal header h5').innerText = options.copyWriting.title;
			    document.querySelector('article.opt-modal h6.opt-sub.header').style.display = "none";
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').style.display = "block";
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').innerHTML = options.copyWriting.pricePkg;
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.copyWriting.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerHTML = options.copyWriting.descr;
			    break;
			  case 'opt row opt-8':
			    document.querySelector('article.opt-modal').nextElementSibling.style.display = "none";
			    if (document.querySelector('article.opt-modal').classList.contains('single')) {} else {
			    	document.querySelector('article.opt-modal').classList.add('single')
			    }
			    document.querySelector('section#opt-modal header h5').innerText = options.webUpdates.title;
			    document.querySelector('article.opt-modal h6.opt-sub.header').style.display = "none";
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').style.display = "block";
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').innerHTML = options.webUpdates.pricePkg;
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.webUpdates.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerHTML = options.webUpdates.descr;
			    break;
			  case 'opt row opt-9':
			   	document.querySelector('section#opt-modal header h5').innerText = options.trainingHowTo.title;
			   	document.querySelector('article.opt-modal').classList.remove('single');

			   	document.querySelector('article.opt-modal h6.opt-sub.header').style.display = "inline";
			    document.querySelector('article.opt-modal h6.opt-sub.header').innerText = options.trainingHowTo.multi.recordedDemo.title;
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').style.display = "block";
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').innerHTML = options.trainingHowTo.multi.recordedDemo.pricePkg;
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.trainingHowTo.multi.recordedDemo.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerHTML = options.trainingHowTo.multi.recordedDemo.descr;

			    document.querySelector('article.opt-modal').nextElementSibling.style.display = "inline";

			    document.querySelector('article.opt-modal').nextElementSibling.querySelector('h6.opt-sub.header').style.display = "inline";
			    document.querySelector('article.opt-modal').nextElementSibling.querySelector('h6.opt-sub.header').innerText = options.trainingHowTo.multi.customHowToDocs.title;
			    document.querySelector('article.opt-modal').nextElementSibling.querySelector('p.opt-sub.price-pkg').innerHTML = options.trainingHowTo.multi.customHowToDocs.pricePkg;
			    document.querySelector('article.opt-modal').nextElementSibling.querySelector('p.opt-sub.price-nopkg').innerHTML = options.trainingHowTo.multi.customHowToDocs.priceNoPkg;
			    document.querySelector('article.opt-modal').nextElementSibling.querySelector('p.opt-sub.descr').innerHTML = options.trainingHowTo.multi.customHowToDocs.descr;
			    break;
			  case 'opt row opt-10':
			    document.querySelector('article.opt-modal').nextElementSibling.style.display = "none";
			    if (document.querySelector('article.opt-modal').classList.contains('single')) {} else {
			    	document.querySelector('article.opt-modal').classList.add('single')
			    }
			    document.querySelector('section#opt-modal header h5').innerText = options.specialWebFeatures.title;
			    document.querySelector('article.opt-modal h6.opt-sub.header').style.display = "none";
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').style.display = "block";
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').innerHTML = options.specialWebFeatures.pricePkg;
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.specialWebFeatures.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerHTML = options.specialWebFeatures.descr;
			    break;
			  case 'opt row opt-11':
			    document.querySelector('article.opt-modal').nextElementSibling.style.display = "none";
			    if (document.querySelector('article.opt-modal').classList.contains('single')) {} else {
			    	document.querySelector('article.opt-modal').classList.add('single')
			    }
			    document.querySelector('section#opt-modal header h5').innerText = options.uxAudit.title;
			    document.querySelector('article.opt-modal h6.opt-sub.header').style.display = "none";
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').style.display = "block";
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').innerHTML = options.uxAudit.pricePkg;
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.uxAudit.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerHTML = options.uxAudit.descr;
			    break;
			  case 'opt row opt-12':
			    document.querySelector('article.opt-modal').nextElementSibling.style.display = "none";
			    if (document.querySelector('article.opt-modal').classList.contains('single')) {} else {
			    	document.querySelector('article.opt-modal').classList.add('single')
			    }
			    document.querySelector('section#opt-modal header h5').innerText = options.socialAuditPlan.title;
			    document.querySelector('article.opt-modal h6.opt-sub.header').style.display = "none";
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').style.display = "block";
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').innerHTML = options.socialAuditPlan.pricePkg;
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.socialAuditPlan.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerHTML = options.socialAuditPlan.descr;
			    break;
			  case 'opt row opt-13':
			    document.querySelector('article.opt-modal').nextElementSibling.style.display = "none";
			    if (document.querySelector('article.opt-modal').classList.contains('single')) {} else {
			    	document.querySelector('article.opt-modal').classList.add('single')
			    }
			    document.querySelector('section#opt-modal header h5').innerText = options.socialTemplates.title;
			    document.querySelector('article.opt-modal h6.opt-sub.header').style.display = "none";
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').style.display = "block";
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').innerHTML = options.socialTemplates.pricePkg;
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.socialTemplates.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerHTML = options.socialTemplates.descr;
			    break;
			  default:
			    document.querySelector('article.opt-modal').nextElementSibling.style.display = "none";
			    if (document.querySelector('article.opt-modal').classList.contains('single')) {} else {
			    	document.querySelector('article.opt-modal').classList.add('single')
			    }
			    document.querySelector('section#opt-modal header h5').innerText = options.staticWebLg.title;
			    document.querySelector('article.opt-modal h6.opt-sub.header').style.display = "none";
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').style.display = "none";
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.staticWebLg.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerHTML = options.staticWebLg.descr;
			}
		});
	}
	
	// close modal
	window.onclick = function(event) {
	   	if ((event.target.id != 'opt-modal') && (event.target.id != '') && modalEnabled) {
	   	   		optModal.classList.remove('enabled');
	   	   		modalEnabled = false;
	   	}
	}

	
	

	
}

