/*
	Astral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$main = $('#main'),
		$panels = $main.children('.panel'),
		$nav = $('#nav'), $nav_links = $nav.children('a');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '361px',   '736px'  ],
			xsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		$nav_links
			.on('click', function(event) {

				var href = $(this).attr('href');

				// Not a panel link? Bail.
					if (href.charAt(0) != '#'
					||	$panels.filter(href).length == 0)
						return;

				// Prevent default.
					event.preventDefault();
					event.stopPropagation();

				// Change panels.
					if (window.location.hash != href)
						window.location.hash = href;

			});

	// Panels.

		// Initialize.
			(function() {

				var $panel, $link;

				// Get panel, link.
					if (window.location.hash) {

				 		$panel = $panels.filter(window.location.hash);
						$link = $nav_links.filter('[href="' + window.location.hash + '"]');

					}

				// No panel/link? Default to first.
					if (!$panel
					||	$panel.length == 0) {

						$panel = $panels.first();
						$link = $nav_links.first();

					}

				// Deactivate all panels except this one.
					$panels.not($panel)
						.addClass('inactive')
						.hide();

				// Activate link.
					$link
						.addClass('active');

				// Reset scroll.
					$window.scrollTop(0);

			})();

		// Hashchange event.
			$window.on('hashchange', function(event) {

				var $panel, $link;

				// Get panel, link.
					if (window.location.hash) {

				 		$panel = $panels.filter(window.location.hash);
						$link = $nav_links.filter('[href="' + window.location.hash + '"]');

						// No target panel? Bail.
							if ($panel.length == 0)
								return;

					}

				// No panel/link? Default to first.
					else {

						$panel = $panels.first();
						$link = $nav_links.first();

					}

				// Deactivate all panels.
					$panels.addClass('inactive');

				// Deactivate all links.
					$nav_links.removeClass('active');

				// Activate target link.
					$link.addClass('active');

				// Set max/min height.
					$main
						.css('max-height', $main.height() + 'px')
						.css('min-height', $main.height() + 'px');

				// Delay.
					setTimeout(function() {

						// Hide all panels.
							$panels.hide();

						// Show target panel.
							$panel.show();

						// Set new max/min height.
							$main
								.css('max-height', $panel.outerHeight() + 'px')
								.css('min-height', $panel.outerHeight() + 'px');

						// Reset scroll.
							$window.scrollTop(0);

						// Delay.
							window.setTimeout(function() {

								// Activate target panel.
									$panel.removeClass('inactive');

								// Clear max/min height.
									$main
										.css('max-height', '')
										.css('min-height', '');

								// IE: Refresh.
									$window.triggerHandler('--refresh');

								// Unlock.
									locked = false;

							}, (breakpoints.active('small') ? 0 : 500));

					}, 250);

			});

	// IE: Fixes.
		if (browser.name == 'ie') {

			// Fix min-height/flexbox.
				$window.on('--refresh', function() {

					$wrapper.css('height', 'auto');

					window.setTimeout(function() {

						var h = $wrapper.height(),
							wh = $window.height();

						if (h < wh)
							$wrapper.css('height', '100vh');

					}, 0);

				});

				$window.on('resize load', function() {
					$window.triggerHandler('--refresh');
				});

			// Fix intro pic.
				$('.panel.intro').each(function() {

					var $pic = $(this).children('.pic'),
						$img = $pic.children('img');

					$pic
						.css('background-image', 'url(' + $img.attr('src') + ')')
						.css('background-size', 'cover')
						.css('background-position', 'center');

					$img
						.css('visibility', 'hidden');

				});

		}

})(jQuery);

//My Functions
//Forward and backwards buttons
const backButton = document.getElementById('back-scroller');
const nextButton = document.getElementById('forward-scroller');
const workButton = document.getElementById('work-button');
const panels = document.querySelectorAll('.panel');
const contentListItems = document.querySelectorAll('.content-link');

//Function describing back button
function previousPanel(e) {
	//Determine location
	for(i=0; i<panels.length; i++) {
		if(!panels[i].classList.contains('inactive')) {
			//Find this panle
			var thisPanel = panels[i].id;
			//Find previous panel
			var previousPanel = panels[i-1].id;
		}
	}
	//Pull the switch
	panels.forEach(panel => panel.classList.add('inactive'));
	if(previousPanel === "home") {
		document.getElementById(thisPanel).style.display = "none";
		document.getElementById(previousPanel).style.display = "flex";
		document.getElementById(previousPanel).classList.toggle('inactive');
	} else {
		document.getElementById(thisPanel).style.display = "none";
		document.getElementById(previousPanel).style.display = "block";
		document.getElementById(previousPanel).classList.toggle('inactive');
	}
	//Set the navArrow
	if(previousPanel === "table-of-contents" || previousPanel === "foreword" || 
		previousPanel === "work1" || previousPanel === "work2" || previousPanel === "refrain" || previousPanel === "conclusion") {
			document.getElementById('contact-icon').classList.remove('active');
			document.getElementById('contents-icon').classList.add('active');
	} else {
		document.getElementById('contents-icon').classList.remove('active');
		document.getElementById('home-icon').classList.add('active');
	}
}

//Function describing forward button
function advancePanel(e) {
	//Determine location
	for(i=0; i<panels.length; i++) {
		if(!panels[i].classList.contains('inactive')) {
			//Find this panel
			var thisPanel = panels[i].id;
			//Find next panel
			var nextPanel = panels[i+1].id;
		}
	}
	//Pull the switch
	panels.forEach(panel => panel.classList.add('inactive'));
	document.getElementById(thisPanel).style.display = "none";
	document.getElementById(nextPanel).style.display = "block";
	document.getElementById(nextPanel).classList.toggle('inactive');
	//Set the navArrow
	if(nextPanel === "table-of-contents" || nextPanel === "foreword" || 
		nextPanel === "work1" || nextPanel === "work2" || nextPanel === "refrain" || nextPanel === "conclusion") {
			document.getElementById('home-icon').classList.remove('active');
			document.getElementById('contents-icon').classList.add('active');
	} else {
		document.getElementById('contents-icon').classList.remove('active');
		document.getElementById('contact-icon').classList.add('active');
	}
}

function landingPageHashChange(e) {
	for(i=0; i<panels.length; i++) {
		if(!panels[i].classList.contains('inactive')) {
			var thisPanel = panels[i].id;
			var nextPanel = panels[i+1].id;			
		}
	}
	panels.forEach(panel => panel.classList.add('inactive'));
	document.getElementById(thisPanel).style.display = "none";
	document.getElementById(nextPanel).style.display = "block";
	document.getElementById(nextPanel).classList.toggle('inactive');
	document.getElementById('home-icon').classList.remove('active');
	document.getElementById('contents-icon').classList.add('active');
}

function tableOperator(e) {
	let clickedId = this.id;
	if(clickedId === "foreword-link") {
		panels.forEach(panel => panel.classList.add('inactive'));
		document.getElementById('table-of-contents').style.display = "none";
		document.getElementById('foreword').style.display = "block";
		document.getElementById('foreword').classList.toggle('inactive');
	}
	if(clickedId === "work1-link") {
		panels.forEach(panel => panel.classList.add('inactive'));
		document.getElementById('table-of-contents').style.display = "none";
		document.getElementById('work1').style.display = "block";
		document.getElementById('work1').classList.toggle('inactive');
	}
	if(clickedId === "work2-link") {
		panels.forEach(panel => panel.classList.add('inactive'));
		document.getElementById('table-of-contents').style.display = "none";
		document.getElementById('work2').style.display = "block";
		document.getElementById('work2').classList.toggle('inactive');
	}
	if(clickedId === "refrain-link") {
		panels.forEach(panel => panel.classList.add('inactive'));
		document.getElementById('table-of-contents').style.display = "none";
		document.getElementById('refrain').style.display = "block";
		document.getElementById('refrain').classList.toggle('inactive');
	}
	if(clickedId === "conclusion-link") {
		panels.forEach(panel => panel.classList.add('inactive'));
		document.getElementById('table-of-contents').style.display = "none";
		document.getElementById('conclusion').style.display = "block";
		document.getElementById('conclusion').classList.toggle('inactive');
	}
}

backButton.addEventListener('click', previousPanel);
nextButton.addEventListener('click', advancePanel);
workButton.addEventListener('click', landingPageHashChange);
contentListItems.forEach(item => item.addEventListener('click', tableOperator));