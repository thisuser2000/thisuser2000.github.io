history.scrollRestoration = 'auto';

var menuButton = document.getElementById("menuButton");
var menu = document.getElementById("menu");
var menuOpen = 0;
var desktopWidth = window.matchMedia("(min-width: 762px)")

const widthOutput = document.querySelector("#width");
window.onresize = reportWindowSize;

function showMenu() {
	menuButton.style.opacity = "100%";
	menu.style.height = "267px";
	menu.style.boxShadow = "0rem 0.1rem 0.67rem #000000a0";
	menuOpen = 1;
}

function hideMenu() {
	menuButton.style.opacity = null;
	menu.style.height = null;
	menu.style.boxShadow = null;
	menuOpen = 0;
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
