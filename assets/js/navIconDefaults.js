//Nav Icon Hash and Panel reset
//Grabbing trigger items
const resetPanels = document.querySelectorAll('.panel');
const icons = document.querySelectorAll('.nav-icon');

//Function describing reseting to specific panels when the nav icons are triggered
function panelReset(e) {
    var clickedId = this.id;
    console.log(clickedId);
    for(i=0; i<resetPanels.length; i++) {
        if(!resetPanels[i].classList.contains('inactive')) {
            var activePanel = resetPanels[i].id;
            console.log(activePanel);
        }
    }
    if(clickedId === "home-icon") {
        resetPanels.forEach(panel => panel.classList.add('inactive'));
        document.getElementById(activePanel).style.display = "none";
        document.getElementById('home').style.display = "flex";
        document.getElementById('home').classList.toggle('inactive');
        document.getElementById('home-icon').classList.add('active');
        document.getElementById('contents-icon').classList.remove('active');
        document.getElementById('contact-icon').classList.remove('active');    
    }
    if(clickedId === "contents-icon") {
        resetPanels.forEach(panel => panel.classList.add('inactive'));
        document.getElementById(activePanel).style.display = "none";
        document.getElementById('table-of-contents').style.display = "block";
        document.getElementById('table-of-contents').classList.toggle('inactive');
        document.getElementById('home-icon').classList.remove('active');
        document.getElementById('contents-icon').classList.add('active');
        document.getElementById('contact-icon').classList.remove('active');    
    }
    if(clickedId === "contact-icon") {
        resetPanels.forEach(panel => panel.classList.add('inactive'));
        document.getElementById(activePanel).style.display = "none";
        document.getElementById('contact').style.display = "block";
        document.getElementById('contact').classList.toggle('inactive');
        document.getElementById('home-icon').classList.remove('active');
        document.getElementById('contents-icon').classList.remove('active');
        document.getElementById('contact-icon').classList.add('active');    
    }
}

//Triggering your functions
icons.forEach(icon => icon.addEventListener('click', panelReset));