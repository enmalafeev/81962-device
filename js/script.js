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

