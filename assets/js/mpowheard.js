// Footer copyright year variable for current year
var year = new Date().getFullYear();
document.getElementById('currentYear').innerText = year;


// ------- OPTIONS PAGE ------- //
function optionsPage() {
	const optModal = document.getElementById('modal-overlay');
	const optLinks = document.querySelectorAll('div.opt.row');
	const modalWindow = document.getElementById('opt-modal');
	let modalEnabled = false;

	for (var i = 0; i < optLinks.length; i++) {
	// console.log(i); // index
	// console.log(optLinks[i]); // value
		optLinks[i].addEventListener('click', function() {
			optModal.classList.add('enabled');
			setTimeout(function(){ modalEnabled = true; }, 500);
			// TODO: add show content by index+option
		});
	}
	
	// close modal
	window.onclick = function(event) {
	   	if ((event.target.id != 'opt-modal') && (event.target.id != '') && modalEnabled) {
	   	   		optModal.classList.remove('enabled');
	   	   		modalEnabled = false;
	   	}
	}
	

	// TODO: Fill in content 
	const options = {
		staticWebSm: {
			onetime: true,
			pricePkg: null,
			priceNoPkg: `TEXT`,
			title: `Static Website (Small)`,
			descr: `TEXT`
		},
		staticWebLg: {
			onetime: true,
			pricePkg: null,
			priceNoPkg: `TEXT`,
			title: `Static Website (Large)`,
			descr: `TEXT`
		},
		wpSiteSm: {
			onetime: true,
			pricePkg: null,
			priceNoPkg: `TEXT`,
			title: `WordPress Site (Small)`,
			descr: `TEXT`
		},
		wpSiteLg: {
			onetime: true,
			pricePkg: null,
			priceNoPkg: `TEXT`,
			title: `WordPress Site (Large)`,
			descr: `TEXT`
		},
		ecommWebSm: {
			onetime: true,
			pricePkg: null,
			priceNoPkg: `TEXT`,
			title: `E-Commerce Site (Small)`,
			descr: `TEXT`
		},
		ecommWebLg: {
			onetime: true,
			pricePkg: null,
			priceNoPkg: `TEXT`,
			title: `E-Commerce Site (Large)`,
			descr: `TEXT`
		},
		socialEngage: {
			onetime: false,
			pricePkg: `TEXT`,
			priceNoPkg: `TEXT`,
			title: `Social Media Engagement`,
			descr: `TEXT`
		},
		copyWriting: {
			onetime: false,
			pricePkg: `TEXT`,
			priceNoPkg: `TEXT`,
			title: `Copywriting`,
			descr: `TEXT`
		},
		webUpdates: {
			onetime: false,
			pricePkg: `TEXT`,
			priceNoPkg: `TEXT`,
			title: `Website Updates`,
			descr: `TEXT`
		},
		trainingHowTo: {
			onetime: false,
			pricePkg: null,
			priceNoPkg: null,
			title: `Training & How-To Docs`,
			descr: null,
			recordedDemo: {
				onetime: false,
				pricePkg: `$50 hrly. with a package`,
				priceNoPkg: `$100 hrly. per diem`,
				title: `Recorded Demos`,
				descr: `Recorded demos are like personal webinars that demonstrate how to use, maintain, 
				or update a specific feature or service. They can be purchased as a standalone educational 
				item or accompanying a product package.`
			},
			customHowToDocs: {
				onetime: false,
				pricePkg: `$40 hrly. with a package`,
				priceNoPkg: `$50 hrly. per diem`,
				title: `Custom How-To Documentation`,
				descr: `Custom How-To Documentation will usually involve a written tutorial or step-by-step 
				guide published on Google Docs. It will always contain screen shots and very simple, clear 
				instructions for how to use, maintain, or update a specific feature or service.`
			}
		},
		specialWebFeatures: {
			onetime: false,
			pricePkg: `TEXT`,
			priceNoPkg: `TEXT`,
			title: `Special Website Features`,
			descr: `TEXT`
		},
		uxAudit: {
			onetime: false,
			pricePkg: `TEXT`,
			priceNoPkg: `TEXT`,
			title: `UX Audit`,
			descr: `TEXT`
		},
		socialAuditPlan: {
			onetime: false,
			pricePkg: `TEXT`,
			priceNoPkg: `TEXT`,
			title: `Social Media Audit & Plan`,
			descr: `TEXT`
		},
		socialTemplates: {
			onetime: false,
			pricePkg: `TEXT`,
			priceNoPkg: `TEXT`,
			title: `Social Media Templates`,
			descr: `TEXT`
		}
	};
}

