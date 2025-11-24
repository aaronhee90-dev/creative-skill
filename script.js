//Theme changer
const switchBtn = document.getElementById('switchBtn');

switchBtn.addEventListener('click', () => {
document.body.classList.toggle('light-mode');
});

//Dynamic Form Script

const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const otherField = document.getElementById("otherField");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	let valid = true;

	//validate the name
	if (nameInput.value.length < 3) {
		document.getElementById("nameError").textContent = "Name must be at least 3 characters long";
		valid = false;
	} else {
		document.getElementById("nameError").textContent = " ";
	}

	//Validate the email
	const emailPattern = /\S+@\S+\.\S+/;
	if (!emailPattern.test(emailInput.value)) {
		document.getElementById("emailError").textContent = "Please enter a valid email.";
		valid = false;
	} else {
		document.getElementById("emailError").textContent = ";"
	}

	//If all validation pass
	if (valid) {
		alert ("Form submitted successfully!");
		form.reset();
		otherField.style.display = "none"; //reset hidden field
	}
});

const reasonSelect = document.getElementById("reason");
const supportFields = document.getElementById("supportFields");
const feedbackFields = document.getElementById("feedbackFields");
const ratingSlider = document.getElementById("rating");
const ratingValue = document.getElementById("ratingValue");
//show and hide fields based on reason
reasonSelect.addEventListener("change", () => {
	//hide everything
	supportFields.classList.add("hidden");
	feedbackFields.classList.add("hidden");

	//show selected ones
	if (reasonSelect.value === "SUPPORT") {
		supportFields.classList.remove("hidden");
	} else if (reasonSelect.value === ("FEEDBACK") {
		feedbackFields.classList.remove("hidden");
	}	
});

//Update value live
ratingSlider.addEventListener("input", ()=> {
	ratingValue.textContent = ratingSlider.value;
})