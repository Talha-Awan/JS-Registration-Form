let name;
let regex;

function testName() {
	name = document.getElementById("inputName");
	//alert(name);
	// name = "Muhammad Talha";
	// regex = /^[A-Za-z ]{3,15}/;
	if (!(/^[A-Za-z ]{3,15}/.test(name.value)) || !name.value) {
		name.focus();
		name.style.background = "red";
		document.getElementById("Result1").innerHTML =
			"Name must be greater than 3 & less than 15 characters and can't be empty!";
		return false; // keep form from submitting
	} else {
		info.firstName = name;
		document.getElementById("o_name").value = info.firstName;
		//document.getElementById("inputName").value;
		// info.firstName = name;
		// return true;
	}
}

function testFname() {
	name = document.getElementById("inputFname").value;
	regex = /^[A-Za-z]+$/;
	if (name.length < 3 || name.length > 15) {
		alert(
			"Father's Name must be more than 15 characters and can't be empty!"
		);
		name.focus();
		name.style.background = "red";
		document.getElementById("Result2").innerHTML =
			"Father's Name must be more than 3 characters and less than 15!";
		return false; // keep form from submitting
	} else if (!isNaN(name) || !name.match(regex)) {
		//alert("Father's Name must be alphabets only");
		name.focus();
		name.style.background = "red";
		document.getElementById("Result2").innerHTML =
			"Father's Name must be alphabets only";
		return false;
	} else {
		info.fatherName = name;
		document.getElementById("o_fname").value = info.fatherName;
		//document.getElementById(inputFname).value;
		return true;
	}
}

function testUniversity() {
	name = document.getElementById("uniFormControlSelect").value;
	if (name.value == "-1") {
		//alert("Please provide your University!");
		name.focus();
		name.style.background = "red";
		document.getElementById("Result5").innerHTML =
			"Please provide your University!";
		return false;
	} else {
		info.university = name;
		//document.getElementById("o_university").value = info.university;
		return true;
	}
}

function testPassword() {
	name = document.getElementById("inputPassword").value;
	if (name.length < 6 || name.length > 12) {
		//alert("Password must be more than 12 characters and can't be empty!");
		name.focus();
		name.style.background = "red";
		document.getElementById("Result4").innerHTML =
			"Password must be more than 12 characters and can't be empty!";
		return false; // keep form from submitting
	} else {
		info.password = name; // document.getElementById('inputPassword').value;
		document.getElementById("o_pasword").value = info.password;
		return true;
	}
}

function testEmail() {
	name = document.getElementById("inputEmail").value;
	regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
	if (name === "" || !name.match(regex)) {
		//alert("Please enter correct email address");
		name.focus();
		name.style.background = "red";
		document.getElementById("Result3").innerHTML =
			"Please enter correct email address";
		return false;
	} else {
		info.email = name; //document.getElementById("inputEmail").value;
		document.getElementById("o_email").value = info.email;
		return true;
	}
}

function testAddress() {
	name = document.getElementById("inputAddress").value;
	// regex = /^[0-9a-zA-Z]+$/;
	if (name === "") {
		alert("Please enter your address");
		name.focus();
		name.style.background = "red";
		document.getElementById("Result6").innerHTML =
			"Please enter your address";
		return false; // keep form from submitting
	} else {
		info.address = name; //document.getElementById("inputAddress").value;
		document.getElementById("o_address").value = info.address;
		return true;
	}
}

function testContact() {
	name = document.getElementById("inputContact").value;
	// let regex = /^[0-9]+$/;
	if (name.value === "" || name.value > 11) {
		//alert("Contact# must be less than 15 characters and can't be empty!");
		name.focus();
		name.style.background = "red";
		document.getElementById("Result7").innerHTML =
			"Contact# must be less than 15 characters and can't be empty!";
		return false; // keep form from submitting
	} else if (NaN(name)) {
		//alert("Please Enter a valid number");
		name.focus();
		name.style.background = "red";
		document.getElementById("Result7").innerHTML =
			"Please Enter a valid number";
		return false;
	} else {
		info.contact = name; //document.getElementById("inputContact").value;
		document.getElementById("0_contact").value = info.contact;
		return right;
	}
}

function main() {
	testName();
	testFname();
	testUniversity();
	testPassword();
	testEmail();
	testAddress();
	testContact();
	// if(true)
	// {
	// 	alert("Form Submitted Successfully");
	// }
	// console.log(info);
}
