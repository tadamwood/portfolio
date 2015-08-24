// JavaScript Document


//Hides divs containing each element from the form dropdowns for the male
function showDiv(prefix,chooser) {
	for (var i=0;i<chooser.options.length;i++) {
		var div = document.getElementById(prefix+chooser.options[i].value);
			div.style.display = 'none';
	}
	var div = document.getElementById(prefix+chooser.value);
	div.style.display = 'block';
}

//Hides divs containing each element from the form dropdowns for the female
function femshowDiv(prefix,chooser) {
	for (var i=0;i<chooser.options.length;i++) {
		var div = document.getElementById(prefix+chooser.options[i].value);
			div.style.display = 'none';
	}
	var div = document.getElementById(prefix+chooser.value);
	div.style.display = 'block';
}

//Shows the options based on the redio selection
function showhidediv(rad){
var rads=document.getElementsByName(rad.name);
document.getElementById('maleShow').style.display=(rads[0].checked)?'block':'none' ;
document.getElementById('femShow').style.display=(rads[1].checked)?'block':'none' ;
document.getElementById('male-table').style.display=(rads[0]).checked?'block':'none';
document.getElementById('fem-table').style.display=(rads[1]).checked?'block':'none';
}

//Validates form when submit
function validateForm() {
	var errors = false;
	var form = document.thisChar;
//Checks for a value in the first name field
	if (!form.elements.firstName.value) {
		document.getElementById('firstNameError').innerHTML='Give me the First Name!';
		errors = true;	
	}else {
		document.getElementById('firstNameError').innerHTML='';	
	}
//Checks for a value in the last name field
	if (!form.elements.lastName.value) {
		document.getElementById('lastNameError').innerHTML='Give me the Last Name!';
		errors = true;	
	} else {
		document.getElementById('lastNameError').innerHTML='';	
	}

//Checks to see if a radio button was selected	
	var radios = document.thisChar.elements['sex'];
	var numChecked = 0;
	
	for (var i=0; i<radios.length; i++) {
		if (radios[i].checked) {
			numChecked++;
		}
	}
	
	if (!numChecked) {
		document.getElementById('genderError').innerHTML='Select One!';
		errors = true;	
	} else {
		document.getElementById('genderError').innerHTML='';	
	}
	
	if (!form.elements.chardescription.value) {
		document.getElementById('descriptionError').innerHTML='Give me a description!';
		errors = true;	
	} else {
		document.getElementById('descriptionError').innerHTML='';	
	}
	var checkboxes = document.thisChar.elements['malecheck']; //returns a nodeList
	var numChecked = 0;
	
	for (var i=0; i < checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			numChecked++;
		}
	}
	
	if (!numChecked) {
		alert('Check some places!!!');
		errors = true;
	}
//If there are errors the form will not be submitted	
	if (errors) {
		return false;
	} else {
		return true;
	}
   
}

function femvalidateForm() {
	var errors = false;
	var form = document.thisfemChar;
//Checks for a value in the first name field
		if (!form.elements.femfirstName.value) {
		document.getElementById('femfirstNameError').innerHTML='Give me the First Name!';
		errors = true;	
	} else {
		document.getElementById('femfirstNameError').innerHTML='';	
	}
//Checks for a value in the last name field
	if (!form.elements.femlastName.value) {
		document.getElementById('femlastNameError').innerHTML='Give me the Last Name!';
		errors = true;	
	} else {
		document.getElementById('femlastNameError').innerHTML='';	
	}
//Checks to see if a radio button was selected	
	var radios = document.thisfemChar.elements['sex'];
	var numChecked = 0;
	
	for (var i=0; i<radios.length; i++) {
		if (radios[i].checked) {
			numChecked++;
		}
	}
	
	if (!numChecked) {
		document.getElementById('genderError').innerHTML='Select One!';
		errors = true;	
	} else {
		document.getElementById('genderError').innerHTML='';	
	}
	
	if (!form.elements.femchardescription.value) {
		document.getElementById('femdescriptionError').innerHTML='Give me a description!';
		errors = true;	
	} else {
		document.getElementById('femdescriptionError').innerHTML='';	
	}
	var checkboxes = document.thisfemChar.elements['femcheck']; //returns a nodeList
	var numChecked = 0;
	
	for (var i=0; i < checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			numChecked++;
		}
	}
//If there are errors the form will not be submitted	
	if (errors) {
		return false;
	} else {
		return true;
	}
}

