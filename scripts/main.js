history.scrollRestoration = 'auto';

var navbar = document.getElementById("navbarContainer");
var button = document.getElementById("menuButton");
var icon = document.getElementById("menuButton-image");
var menu = document.getElementById("menu");
var menuOpen = 0;
var modalGame1 = document.getElementById("game1");
var modalGame2 = document.getElementById("game2");
var modalPetscop1 = document.getElementById("modalPetscop1");
var modalPetscop2 = document.getElementById("modalPetscop2");
var desktopWidth = window.matchMedia("(min-width: 890px)")

const widthOutput = document.querySelector("#width");
window.onresize = reportWindowSize;

function showMenu() {
	icon.style.opacity = "100%";
	menu.style.height = "267px";
	menu.style.boxShadow = "var(--shadow-medium)";
	menuOpen = 1;
}

function hideMenu() {
	icon.style.opacity = null;
	menu.style.height = null;
	menu.style.boxShadow = "var(--shadow-none)";
	menuOpen = 0;
}

function game1() {
	modalGame1.style.display = "block";
	modalGame2.style.display = "none";
}

function game2() {
	modalGame1.style.display = "none";
	modalGame2.style.display = "block";
}

function petscop1() {
	modalPetscop1.style.display = "block";
	modalPetscop2.style.display = "none";
}

function petscop2() {
	modalPetscop1.style.display = "none";
	modalPetscop2.style.display = "block";
}


function toggleMenu() {
	if (menuOpen == 0) {
		showMenu();
	} else {
		hideMenu();
	}
}

function reportWindowSize() {
	if (desktopWidth.matches) {
		hideMenu();
	}
}

















document.getElementById('profile').src = "assets/images/about/profile2.gif?a=" + Math.random();
