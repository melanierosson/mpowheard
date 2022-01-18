// Footer copyright year variable for current year
var year = new Date().getFullYear();
document.getElementById('currentYear').innerText = year;

// ------- OPTIONS PAGE ------- //
function optionsPage() {
	const optModal = document.getElementById('modal-overlay');
	const optLinks = document.querySelectorAll('div.opt.row');
	const modalWindow = document.getElementById('opt-modal');
	let modalEnabled = false;

	const options = {
		staticWebSm: {
			onetime: true,
			pricePkg: null,
			priceNoPkg: null,
			title: `Static Website (Small)`,
			descr: `This is a 1-page responsive website design and development package that can include light content ` +
			`strategy, copywriting, SEO, and optimized images.<br/><small>*Pricing does not include domain and ` +
			`hosting costs, nor animations, how-to documentation, or additional features.</small>`,
			multi: null
		},
		staticWebLg: {
			onetime: true,
			pricePkg: null,
			priceNoPkg: null,
			title: `Static Website (Large)`,
			descr: `This is a 1-5 page responsive website design and development package that can include light content ` +
			`strategy, copywriting, SEO, optimized images, plus one additional feature<sup>1</sup>.<br/><small>*Pricing ` +
			`does not include domain and hosting costs.</small><br/><small><sup>1</sup> Additional features include how-to ` +
			`documentation, demos, animations, and more advanced integrations.</small>`,
			multi: null
		},
		wpSiteSm: {
			onetime: true,
			pricePkg: null,
			priceNoPkg: null,
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
			priceNoPkg: null,
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
			priceNoPkg: null,
			title: `E-Commerce Site (Small)`,
			descr: `This is a WooCommerce Online Store with 5-20 different products (other features will need to be added separately). ` +
			`Package includes light content strategy, copywriting, SEO, and optimized images.<br/><small>*Pricing ` +
			`does not include domain and hosting costs.</small>`,
			multi: null
		},
		ecommWebLg: {
			onetime: true,
			pricePkg: null,
			priceNoPkg: null,
			title: `E-Commerce Site (Large)`,
			descr: `This is a WooCommerce Online Store with 20-50+ different products (other features will need to be added separately). ` +
			`Package includes light content strategy, copywriting, SEO, and optimized images.<br/><small>*Pricing ` +
			`does not include domain and hosting costs.</small>`,
			multi: null
		},
		ghostKitchen: {
			onetime: false,
			pricePkg: null,
			priceNoPkg: null,
			title: `Ghost Kitchen Menus`,
			descr: `We curate "ghost kitchen" menus and branding for existing restaurants that want to increase their volume of to-go orders. <br/>` +
			`<br/><small><sup>*</sup>Ghost kitchens are those that serve a certain menu as delivery only. If it's prepared in an already existing ` +
			`dine-in restaurant, the ghost menu will be promoted under a different name and theme. The menu item ingredients are not much ` +
			`different (if at all) from what is already available in the restaurant's kitchen.</small>`,
			multi: null
		},
		webUpdates: {
			onetime: false,
			pricePkg: null,
			priceNoPkg: null,
			title: `Website Updates`,
			descr: `Updates can be done on your website with content verbiage, file changes, or media content, ` +
			`Wordpress, WP Plugins, HTML, SCSS/CSS, JavaScript, JQuery, PHP, React JS, or other formats as needed.`,
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
					pricePkg: null,
					priceNoPkg: null,
					title: `Recorded Demos`,
					descr: `Recorded demos are like personal webinars that demonstrate how to use, maintain, ` +
					`or update a specific feature or service. They can be purchased as a standalone educational ` +
					`item or accompanying a product package.`
				},
				customHowToDocs: {
					onetime: false,
					pricePkg: null,
					priceNoPkg: null,
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
			priceNoPkg: null,
			title: `Special Website Features`,
			descr: `Additional website features includes custom animations, special functioning modal boxes, ` +
			`accessibility features, unique dynamic content, risky subjects, add-on WP features like blog, ` +
			`live social feed integration, UX phases such as wireframes, data gathering, user testing, etc.`,
			multi: null
		},
		uxAudit: {
			onetime: false,
			pricePkg: null,
			priceNoPkg: null,
			title: `UX Audit`,
			descr: `Our UX Audit is a complete user experience audit around the website or software as ` +
			`requested. Results are recorded in a spreadsheet with items categorized by urgency and type. Communications ` +
			`with other staff or developers can optionally be included.`,
			multi: null
		},
		socialAuditPlan: {
			onetime: false,
			pricePkg: null,
			priceNoPkg: null,
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
			pricePkg: null,
			priceNoPkg: null,
			title: `Social Media Templates`,
			descr: `This package includes 5 custom, branded Instagram story templates and 10 post templates, plus additional resources and assets for creating ` +
			`reels + videos. (Templates can be made in either Canva or Adobe XD.)`,
			multi: null
		},
		socialEngage: {
			onetime: false,
			pricePkg: null,
			priceNoPkg: null,
			title: `Social Media Engagement`,
			descr: `This option includes 20-45 minutes each day (exact time spent can be specified) engaging on a ` +
			`social media platform's algorithmic rating system as well as accounts that match your business's target audience. ` +
			`Consistent social media engagement activity increases the visibility of that account's published content.` +
			` We regularly collect analytics to ensure our work is producing desired results.`,
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
			    document.querySelector('section#opt-modal header h5').innerText = options.ghostKitchen.title;
			    document.querySelector('article.opt-modal h6.opt-sub.header').style.display = "none";
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').style.display = "block";
			    document.querySelector('article.opt-modal p.opt-sub.price-pkg').innerHTML = options.ghostKitchen.pricePkg;
			    document.querySelector('article.opt-modal p.opt-sub.price-nopkg').innerHTML = options.ghostKitchen.priceNoPkg;
			    document.querySelector('article.opt-modal p.opt-sub.descr').innerHTML = options.ghostKitchen.descr;
			    break;
			  case 'opt row opt-7':
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
			  case 'opt row opt-8':
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
			  case 'opt row opt-9':
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
			  case 'opt row opt-10':
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
			  case 'opt row opt-11':
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
			  case 'opt row opt-12':
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
			  case 'opt row opt-13':
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

