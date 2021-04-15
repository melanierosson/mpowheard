// Footer copyright year variable for current year
var year = new Date().getFullYear();
document.getElementById('currentYear').innerText = year;


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
			priceNoPkg: `TEXT`,
			title: `Static Website (Small)`,
			descr: `TEXT`,
			multi: null
		},
		staticWebLg: {
			onetime: true,
			pricePkg: null,
			priceNoPkg: `TEXT`,
			title: `Static Website (Large)`,
			descr: `TEXT`,
			multi: null
		},
		wpSiteSm: {
			onetime: true,
			pricePkg: null,
			priceNoPkg: `TEXT`,
			title: `WordPress Site (Small)`,
			descr: `TEXT`,
			multi: null
		},
		wpSiteLg: {
			onetime: true,
			pricePkg: null,
			priceNoPkg: `TEXT`,
			title: `WordPress Site (Large)`,
			descr: `TEXT`,
			multi: null
		},
		ecommWebSm: {
			onetime: true,
			pricePkg: null,
			priceNoPkg: `TEXT`,
			title: `E-Commerce Site (Small)`,
			descr: `TEXT`,
			multi: null
		},
		ecommWebLg: {
			onetime: true,
			pricePkg: null,
			priceNoPkg: `TEXT`,
			title: `E-Commerce Site (Large)`,
			descr: `TEXT`,
			multi: null
		},
		socialEngage: {
			onetime: false,
			pricePkg: `TEXT`,
			priceNoPkg: `TEXT`,
			title: `Social Media Engagement`,
			descr: `TEXT`,
			multi: null
		},
		copyWriting: {
			onetime: false,
			pricePkg: `TEXT`,
			priceNoPkg: `TEXT`,
			title: `Copywriting`,
			descr: `TEXT`,
			multi: null
		},
		webUpdates: {
			onetime: false,
			pricePkg: `TEXT`,
			priceNoPkg: `TEXT`,
			title: `Website Updates`,
			descr: `TEXT`,
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
					pricePkg: `<b>$50 hrly.</b> with a package`,
					priceNoPkg: `<b>$100 hrly.</b> per diem`,
					title: `Recorded Demos`,
					descr: `Recorded demos are like personal webinars that demonstrate how to use, maintain, ` +
					`or update a specific feature or service. They can be purchased as a standalone educational ` +
					`item or accompanying a product package.`
				},
				customHowToDocs: {
					onetime: false,
					pricePkg: `<b>$40 hrly.</b> with a package`,
					priceNoPkg: `<b>$50 hrly.</b> per diem`,
					title: `Custom How-To Documentation`,
					descr: `Custom How-To Documentation will usually involve a written tutorial or step-by-step ` +
					`guide published on Google Docs. It will always contain screen shots and very simple, clear ` +
					`instructions for how to use, maintain, or update a specific feature or service.`
				}
			}
		},
		specialWebFeatures: {
			onetime: false,
			pricePkg: `TEXT`,
			priceNoPkg: `TEXT`,
			title: `Special Website Features`,
			descr: `TEXT`,
			multi: null
		},
		uxAudit: {
			onetime: false,
			pricePkg: `TEXT`,
			priceNoPkg: `TEXT`,
			title: `UX Audit`,
			descr: `TEXT`,
			multi: null
		},
		socialAuditPlan: {
			onetime: false,
			pricePkg: `TEXT`,
			priceNoPkg: `TEXT`,
			title: `Social Media Audit & Plan`,
			descr: `TEXT`,
			multi: null
		},
		socialTemplates: {
			onetime: false,
			pricePkg: `TEXT`,
			priceNoPkg: `TEXT`,
			title: `Social Media Templates`,
			descr: `TEXT`,
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
			    document.querySelector('section#opt-modal header h5').innerText = options.staticWebSm.title;
			    document.querySelector('article.opt-modal h6.opt-sub.header').innerText = options.staticWebSm.title;
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').style.display = "none";
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.staticWebSm.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerText = options.staticWebSm.descr;
			    break;
			  case 'opt row opt-1':
			    document.querySelector('article.opt-modal').nextElementSibling.style.display = "none";
			    document.querySelector('section#opt-modal header h5').innerText = options.staticWebLg.title;
			    document.querySelector('article.opt-modal h6.opt-sub.header').innerText = options.staticWebLg.title;
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').style.display = "none";
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.staticWebLg.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerText = options.staticWebLg.descr;
			    break;
			  case 'opt row opt-2':
			    document.querySelector('article.opt-modal').nextElementSibling.style.display = "none";
			    document.querySelector('section#opt-modal header h5').innerText = options.wpSiteSm.title;
			    document.querySelector('article.opt-modal h6.opt-sub.header').innerText = options.wpSiteSm.title;
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').style.display = "none";
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.wpSiteSm.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerText = options.wpSiteSm.descr;
			    break;
			  case 'opt row opt-3':
			    document.querySelector('article.opt-modal').nextElementSibling.style.display = "none";
			    document.querySelector('section#opt-modal header h5').innerText = options.wpSiteLg.title;
			    document.querySelector('article.opt-modal h6.opt-sub.header').innerText = options.wpSiteLg.title;
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').style.display = "none";
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.wpSiteLg.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerText = options.wpSiteLg.descr;
			    break;
			  case 'opt row opt-4':
			    document.querySelector('article.opt-modal').nextElementSibling.style.display = "none";
			    document.querySelector('section#opt-modal header h5').innerText = options.ecommWebSm.title;
			    document.querySelector('article.opt-modal h6.opt-sub.header').innerText = options.ecommWebSm.title;
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').style.display = "none";
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.ecommWebSm.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerText = options.ecommWebSm.descr;
			    break;
			  case 'opt row opt-5':
			    document.querySelector('article.opt-modal').nextElementSibling.style.display = "none";
			    document.querySelector('section#opt-modal header h5').innerText = options.ecommWebLg.title;
			    document.querySelector('article.opt-modal h6.opt-sub.header').innerText = options.ecommWebLg.title;
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').style.display = "none";
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.ecommWebLg.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerText = options.ecommWebLg.descr;
			    break;
			  case 'opt row opt-6':
			    document.querySelector('article.opt-modal').nextElementSibling.style.display = "none";
			    document.querySelector('section#opt-modal header h5').innerText = options.socialEngage.title;
			    document.querySelector('article.opt-modal h6.opt-sub.header').innerText = options.socialEngage.title;
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').innerHTML = options.socialEngage.pricePkg;
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.socialEngage.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerText = options.socialEngage.descr;
			    break;
			  case 'opt row opt-7':
			    document.querySelector('article.opt-modal').nextElementSibling.style.display = "none";
			    document.querySelector('section#opt-modal header h5').innerText = options.copyWriting.title;
			    document.querySelector('article.opt-modal h6.opt-sub.header').innerText = options.copyWriting.title;
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').innerHTML = options.copyWriting.pricePkg;
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.copyWriting.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerText = options.copyWriting.descr;
			    break;
			  case 'opt row opt-8':
			    document.querySelector('article.opt-modal').nextElementSibling.style.display = "none";
			    document.querySelector('section#opt-modal header h5').innerText = options.webUpdates.title;
			    document.querySelector('article.opt-modal h6.opt-sub.header').innerText = options.webUpdates.title;
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').innerHTML = options.webUpdates.pricePkg;
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.webUpdates.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerText = options.webUpdates.descr;
			    break;
			  case 'opt row opt-9':
			   	document.querySelector('section#opt-modal header h5').innerText = options.trainingHowTo.title;
			   	
			    document.querySelector('article.opt-modal h6.opt-sub.header').innerText = options.trainingHowTo.multi.recordedDemo.title;
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').innerHTML = options.trainingHowTo.multi.recordedDemo.pricePkg;
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.trainingHowTo.multi.recordedDemo.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerText = options.trainingHowTo.multi.recordedDemo.descr;
			    document.querySelector('article.opt-modal').nextElementSibling.style.display = "inline";
			    document.querySelector('article.opt-modal').nextElementSibling.querySelector('h6.opt-sub.header').innerText = options.trainingHowTo.multi.customHowToDocs.title;
			    document.querySelector('article.opt-modal').nextElementSibling.querySelector('p.opt-sub.price-pkg').innerHTML = options.trainingHowTo.multi.customHowToDocs.pricePkg;
			    document.querySelector('article.opt-modal').nextElementSibling.querySelector('p.opt-sub.price-nopkg').innerHTML = options.trainingHowTo.multi.customHowToDocs.priceNoPkg;
			    document.querySelector('article.opt-modal').nextElementSibling.querySelector('p.opt-sub.descr').innerText = options.trainingHowTo.multi.customHowToDocs.descr;
			    break;
			  case 'opt row opt-10':
			    document.querySelector('article.opt-modal').nextElementSibling.style.display = "none";
			    document.querySelector('section#opt-modal header h5').innerText = options.specialWebFeatures.title;
			    document.querySelector('article.opt-modal h6.opt-sub.header').innerText = options.specialWebFeatures.title;
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').innerHTML = options.specialWebFeatures.pricePkg;
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.specialWebFeatures.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerText = options.specialWebFeatures.descr;
			    break;
			  case 'opt row opt-11':
			    document.querySelector('article.opt-modal').nextElementSibling.style.display = "none";
			    document.querySelector('section#opt-modal header h5').innerText = options.uxAudit.title;
			    document.querySelector('article.opt-modal h6.opt-sub.header').innerText = options.uxAudit.title;
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').innerHTML = options.uxAudit.pricePkg;
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.uxAudit.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerText = options.uxAudit.descr;
			    break;
			  case 'opt row opt-12':
			    document.querySelector('article.opt-modal').nextElementSibling.style.display = "none";
			    document.querySelector('section#opt-modal header h5').innerText = options.socialAuditPlan.title;
			    document.querySelector('article.opt-modal h6.opt-sub.header').innerText = options.socialAuditPlan.title;
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').innerHTML = options.socialAuditPlan.pricePkg;
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.socialAuditPlan.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerText = options.socialAuditPlan.descr;
			    break;
			  case 'opt row opt-13':
			    document.querySelector('article.opt-modal').nextElementSibling.style.display = "none";
			    document.querySelector('section#opt-modal header h5').innerText = options.socialTemplates.title;
			    document.querySelector('article.opt-modal h6.opt-sub.header').innerText = options.socialTemplates.title;
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').innerHTML = options.socialTemplates.pricePkg;
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.socialTemplates.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerText = options.socialTemplates.descr;
			    break;
			  default:
			    document.querySelector('article.opt-modal').nextElementSibling.style.display = "none";
			    document.querySelector('section#opt-modal header h5').innerText = options.staticWebLg.title;
			    document.querySelector('article.opt-modal h6.opt-sub.header').innerText = options.staticWebLg.title;
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').style.display = "none";
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.staticWebLg.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerText = options.staticWebLg.descr;
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

