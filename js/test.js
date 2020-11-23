function main() {
	let name = document.getElementById("inputName").value;
	let fname = document.getElementById("inputFname").value;
	let email = document.getElementById("inputEmail").value;
	let password = document.getElementById("inputPassword").value;
	let university = document.getElementById("uniFormControlSelect").value;
	let contact = document.getElementById("inputContact").value;

	// Name
	// if (!name || !/^[A-Za-z ]{3,15}/.test(name))
	// (!name || name.length < 3 || name.length > 15)
	if (!/^[A-Za-z]{3,15}/.test(name)) {
		//alert("Try again!");
		// name.focus();
		document.getElementById("inputName").style.borderColor = "red";
		document.getElementById("Result1").innerHTML =
			"Name must be more than 3 characters and less than 15!";
		return false;
	} else {
		console.log(name);
	}

	// Father Name
	// let fname = "ABcdefg";
	// !fname || !/^[A-Za-z ]{3,15}/.test(fname)
	// (!fname || fname.length < 3 || fname.length > 15)
	if (!fname || !/^[A-Za-z ]{3,15}/.test(fname)) {
		// alert("Try again!");
		// fname.focus();
		document.getElementById("inputFname").style.borderColor = "red";
		document.getElementById("Result2").innerHTML =
			"Father's Name must be more than 3 characters and less than 15! and alphabets only";
		return false;
	} else {
		console.log(fname);
	}

	// Email
	if (
		!email ||
		//!/^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/.test(email)
		!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
			email
		)
	) {
		// alert("Try again!");
		// email.focus();
		document.getElementById("inputEmail").style.borderColor = "red";
		document.getElementById("Result3").innerHTML =
			"Please enter a valid email";
		return false;
	} else {
		console.log(email);
	}

	// Password
	if (!password || password.length < 6 || password.length > 12) {
		// alert("Try again!");
		// password.focus();
		document.getElementById("inputPassword").style.borderColor = "red";
		document.getElementById("Result4").innerHTML =
			"Password cannot be empty and must be more than 6 and less than 12 characters";
		return false;
	} else {
		console.log(password);
	}

	// University
	if (university == -1) {
		// alert("Try again!");
		// university.focus();
		document.getElementById("uniFormControlSelect").style.borderColor =
			"red";
		document.getElementById("Result5").innerHTML =
			"Please Select a University!";
		return false;
	} else {
		console.log(university);
	}

	// Contact
	// if (!contact || contact.length > 11 || isNaN(contact)) {
	if (!/^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(contact)) {
		// contact.focus();
		document.getElementById("inputContact").style.borderColor = "red";
		document.getElementById("Result6").innerHTML =
			"Contact field cant be empty and contact must be greater than 11 numbers";
		return false;
	} else {
		console.log(contact);
	}

	alert("Form Subnmitted Successfully!");
	print_details(name, fname, email, password, university, contact);
	console.log(
		print_details(name, fname, email, password, university, contact)
	);

	document.getElementById("inputName").value = "";
	document.getElementById("Result1").innerHTML = "";
	document.getElementById("inputFname").value = "";
	document.getElementById("Result2").innerHTML = "";
	document.getElementById("inputEmail").value = "";
	document.getElementById("Result3").innerHTML = "";
	document.getElementById("inputPassword").value = "";
	document.getElementById("Result4").innerHTML = "";
	document.getElementById("uniFormControlSelect").selectedIndex = 0;
	document.getElementById("Result5").innerHTML = "";
	document.getElementById("inputContact").value = "";
	document.getElementById("Result5").innerHTML = "";
	return false;
}

function print_details(name, fname, email, password, university, contact) {
	let info = {
		firstName: name,
		fatherName: fname,
		email: email,
		password: password,
		university: university,
		contact: contact,
	};
	console.log(info);
	document.getElementById("o_title").innerHTML = "Submitted Data";
	document.getElementById("o_name").innerHTML = "Name: " + info.firstName;
	document.getElementById("o_fname").innerHTML =
		"Father's Name: " + info.fatherName;
	document.getElementById("o_email").innerHTML = "Email: " + info.email;
	document.getElementById("o_password").innerHTML =
		"Password: " + info.password;
	document.getElementById("o_university").innerHTML =
		"University: " + info.university;
	document.getElementById("o_contact").innerHTML = "Contact: " + info.contact;
}
