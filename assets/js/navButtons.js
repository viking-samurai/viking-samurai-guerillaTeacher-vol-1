//Buttons
//Grabbing trigger items
const backButton = document.getElementById('back-scroller');
const nextButton = document.getElementById('forward-scroller');
const workButton = document.getElementById('work-button');
const panels = document.querySelectorAll('.panel');

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

//Function describng homepage forward button and moving the hash with the button
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

//Triggering your nav functions
backButton.addEventListener('click', previousPanel);
nextButton.addEventListener('click', advancePanel);
workButton.addEventListener('click', landingPageHashChange);