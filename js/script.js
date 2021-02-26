// BackToTop button //////////////////////////////////////////////////////

backToTop = document.getElementById('backToTop');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {

	var actual_width = window.innerWidth;


	if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {

		backToTop.style.display = "block";

	}

	else {

		backToTop.style.display = "none";

	}
}


function topFunction() {

	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}


// FUNCTION TO OPEN / CLOSE SIDENAV WHEN BUTTON IS CLICKED

addEventListener("load", () => {

	const sideNav = document.querySelectorAll(".sideNav");
	const btnOpen = document.querySelectorAll("#btn-open");
	const btnClose = document.querySelectorAll("#btn-close");
	const btnSideSubmenu = document.querySelectorAll("#sideNav-submenu"); 
	const btnNavSubmenu = document.querySelectorAll("#navbar-submenu");
	const sideNavSubmenuLinks = document.querySelectorAll(".sideNav-submenu-links");
	const sideNavRowCharacters = document.querySelectorAll("#sideNav-row-characters");
	const navbarSubmenuLinks = document.querySelectorAll(".navbar-submenu-links");


	// sideNav Open / Close functions **************************************

	function openSidenav() {

		sideNav[0].style.width = "100vw";

	}

	function closeSidenav() {
	
		sideNav[0].style.width = "0px";

	}

	// Submenu open / close functions ************************************


	function clickSideNavSubmenu() {

		if (sideNavSubmenuLinks[0].classList.contains("show-sideNav-submenu")) {

			sideNavSubmenuLinks[0].classList.remove("show-sideNav-submenu");

			btnSideSubmenu[0].textContent = 'characters ▼';

			sideNavRowCharacters[0].style.height = "68px";
		}

		else {

			sideNavSubmenuLinks[0].classList.add("show-sideNav-submenu");

			btnSideSubmenu[0].textContent = 'characters ▲';

			sideNavRowCharacters[0].style.height = "290px";
		}

	}

	function clickNavbarSubmenu() {

		if (navbarSubmenuLinks[0].classList.contains("show-navbar-submenu")) {

			navbarSubmenuLinks[0].classList.remove("show-navbar-submenu");

			btnNavSubmenu[0].textContent = 'characters ▼';
		}

		else {

			navbarSubmenuLinks[0].classList.add("show-navbar-submenu");

			btnNavSubmenu[0].textContent = 'characters ▲';
		}
	}


	btnOpen[0].addEventListener("click", openSidenav);
	btnClose[0].addEventListener("click", closeSidenav);
	btnSideSubmenu[0].addEventListener("click", clickSideNavSubmenu);
	btnNavSubmenu[0].addEventListener("click", clickNavbarSubmenu);

});