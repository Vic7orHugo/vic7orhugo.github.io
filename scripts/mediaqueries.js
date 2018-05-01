/* 
	mediaqueries.js - Makes the page more responsive, changing some css properties when the device has less than 992px of screen size
	30/04/2018 21:33 GMT -03:00
*/  

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
        document.querySelector("#contact").style.padding = "40px 10px";
    } else {
        document.querySelector("#about-me").style.padding = "40px 15%";
        document.querySelector("#portfolio").style.padding = "40px 15%";
        document.querySelector("#contact").style.padding = "40px 15%";
    }
}

let mediaQuery = "(max-width: 991px)";
let bodyQuery = window.matchMedia(mediaQuery);
let contentQuery = window.matchMedia(mediaQuery);

bodyFontSize(bodyQuery);   			 // Call listener function at run time
contentPadding(contentQuery);
bodyQuery.addListener(bodyFontSize); // Attach listener function on state changes   			 
contentQuery.addListener(contentPadding); 