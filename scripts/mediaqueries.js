/* 
	mediaqueries.js - Makes the page more responsive, changing some css properties when the device has less than 992px of screen size
	30/04/2018 21:33 GMT -03:00
*/  

// Device screen size
const MEDIA_QUERY = "(max-width: 991px)";

// Function to serve as a media query for the screen size
function contentPadding(query) {
    if (query.matches) { // If media query matches
    	document.body.style.fontSize = "30px";
        document.querySelector("#about-me").style.padding = "40px 10px";
        document.querySelector("#portfolio").style.padding = "40px 10px";
        document.querySelector("#contact").style.padding = "50px 10px";
    } else {
    	document.body.style.fontSize = "20px";
        document.querySelector("#about-me").style.padding = "40px 10%";
        document.querySelector("#portfolio").style.padding = "40px 10%";
        document.querySelector("#contact").style.padding = "50px 10%";
    }
}

// Initialization function
function init() {
	let newWidth = parseInt(document.documentElement.clientWidth) / 2;
	document.querySelector(".triangle-down").style.borderLeft = newWidth.toString() + "px solid #2B2B2B";
	document.querySelector(".triangle-down").style.borderRight = newWidth.toString() + "px solid #2B2B2B";
	document.querySelector(".triangle").style.borderLeft = newWidth.toString() + "px solid rgba(220, 220, 220, .8)";
	document.querySelector(".triangle").style.borderRight = newWidth.toString() + "px solid rgba(220, 220, 220, .8)";
}

// Calls the "init" function after the page loads
window.onload = init;

// Adds a event listener when the page changes its width
window.addEventListener('resize', (event) => {
	let newWidth = parseInt(document.documentElement.clientWidth) / 2;
	document.querySelector(".triangle-down").style.borderLeft = newWidth.toString() + "px solid #2B2B2B";
	document.querySelector(".triangle-down").style.borderRight = newWidth.toString() + "px solid #2B2B2B";
	document.querySelector(".triangle").style.borderLeft = newWidth.toString() + "px solid rgba(220, 220, 220, .8)";
	document.querySelector(".triangle").style.borderRight = newWidth.toString() + "px solid rgba(220, 220, 220, .8)";
});

let contentQuery = window.matchMedia(MEDIA_QUERY); 	// State
contentPadding(contentQuery);						// Call listener function at run time
contentQuery.addListener(contentPadding); 			// Attach listener function on state changes   	