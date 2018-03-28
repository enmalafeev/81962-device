var link = document.querySelector(".btn-write-us");
var popup = document.querySelector(".write-us");
var mapPopup = document.querySelector(".map");
var mapLink = document.querySelector(".map-link");
var close = document.querySelectorAll(".modal-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name = name]");
var email = popup.querySelector("[name = email]");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
	login.focus();
});

mapLink.addEventListener("click", function(event) {
	event.preventDefault();
	mapPopup.classList.add("modal-content-show");
});

for (var i = 0; i < close.length; i++) {
	close[i].addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.remove("modal-content-show");
		mapPopup.classList.remove("modal-content-show");
		}); 
	}

form.addEventListener("submit", function(event) {
	event.preventDefault();
	if (!name.value && !email.value) {
		popup.classList.add("modal-error");
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show") || 
			mapPopup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
			mapPopup.classList.remove("modal-content-show");
		}
	}
});


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slider-item");
  var dots = document.getElementsByClassName("slider-checker-link");
  var y = document.getElementsByClassName("services-content");
  var checker = document.getElementsByClassName("services-menu-link");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].className = x[i].className.replace(" active", "");;  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" black", "");
  }

  if (n > y.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = y.length}
  for (i = 0; i < y.length; i++) {
     y[i].className = y[i].className.replace(" active", "");;  
  }
  for (i = 0; i < checker.length; i++) {
     checker[i].className = checker[i].className.replace(" black-link", "");
  }

  x[slideIndex-1].className += " active";  
  dots[slideIndex-1].className += " black";

  y[slideIndex-1].className += " active";  
  checker[slideIndex-1].className += " black-link";
}

