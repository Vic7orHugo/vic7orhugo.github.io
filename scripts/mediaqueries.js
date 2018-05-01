/* 
	mediaqueries.js - Makes the page more responsive, changing some css properties when the device has less than 992px of screen size
	30/04/2018 21:33 GMT -03:00
*/  

// Device screen size
const MEDIA_QUERY = "(max-width: 991px)";

function bodyFontSize(query) {
    if (query.matches) { // If media query matches
        document.body.style.fontSize = "30px";
    } else {
        document.body.style.fontSize = "20px";
    }
}

function contentPadding(query) {
    if (query.matches) { // If media query matches
        document.querySelector("#about-me").style.padding = "40px 10px";
        document.querySelector("#portfolio").style.padding = "40px 10px";
        document.querySelector("#contact").style.padding = "50px 10px";
    } else {
        document.querySelector("#about-me").style.padding = "40px 15%";
        document.querySelector("#portfolio").style.padding = "40px 15%";
        document.querySelector("#contact").style.padding = "50px 15%";
    }
}

function init() {
	let newWidth = parseInt(document.documentElement.clientWidth) / 2;
	document.querySelector(".triangle-down").style.borderLeft = newWidth.toString() + "px solid #2B2B2B";
	document.querySelector(".triangle-down").style.borderRight = newWidth.toString() + "px solid #2B2B2B";
	document.querySelector(".triangle").style.borderLeft = newWidth.toString() + "px solid rgba(220, 220, 220, .8)";
	document.querySelector(".triangle").style.borderRight = newWidth.toString() + "px solid rgba(220, 220, 220, .8)";
}

window.onload = init;

window.addEventListener('resize', (event) => {
	let newWidth = parseInt(document.documentElement.clientWidth) / 2;
	document.querySelector(".triangle-down").style.borderLeft = newWidth.toString() + "px solid #2B2B2B";
	document.querySelector(".triangle-down").style.borderRight = newWidth.toString() + "px solid #2B2B2B";
	document.querySelector(".triangle").style.borderLeft = newWidth.toString() + "px solid rgba(220, 220, 220, .8)";
	document.querySelector(".triangle").style.borderRight = newWidth.toString() + "px solid rgba(220, 220, 220, .8)";
});

let bodyQuery = window.matchMedia(MEDIA_QUERY);
let contentQuery = window.matchMedia(MEDIA_QUERY);

bodyFontSize(bodyQuery);   			 // Call listener function at run time
contentPadding(contentQuery);
bodyQuery.addListener(bodyFontSize); // Attach listener function on state changes   			 
contentQuery.addListener(contentPadding); 