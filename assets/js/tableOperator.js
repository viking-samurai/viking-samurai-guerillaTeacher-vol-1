//Table of Contents
//Grabbing trigger items
const contentListItems = document.querySelectorAll('.content-link');

//Function describing table operation
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

//Triggering your table of contents function
contentListItems.forEach(item => item.addEventListener('click', tableOperator));