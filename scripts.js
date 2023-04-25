function validateForm() {
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var gender = document.getElementById("gender").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var message = document.getElementById("message").value;
	var emailPattern = /\S+@\S+\.\S+/;
	var phonePattern = /^\d{10}$/;
	var errors = "";
	if (name === "") {
		errors += "Name is required.\n";
	}
	if (age === "") {
		errors += "Age is required.\n";
	} else if (age < 18) {
		errors += "You must be at least 18 years old.\n";
	}
	if (gender === "") {
		errors += "Gender is required.\n";
    }
}
