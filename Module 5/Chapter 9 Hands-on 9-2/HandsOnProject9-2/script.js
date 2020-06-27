"use script"; 

function processCookie() { 
	document.cookie = "username" + document.getElementById("usernameinput").value;  
	
} 

function populateInfo() { 
	
	if (document.cookie) { 
		var uname = document.cookie; 
		uname = uname.substring(uname.lastIndexOf("=") + 1); 
		document.getElementById("usernameinput").value = uname; 
	} 
	
}

function handleSubmit(evt) { 
	if (evt.preventDefault) { 
		evt.preventDefault(); 
	}else { 
		evt.returnValue = false; 
	}
	processCookie(); 
	document.getElementsByTagName("form")[0].submit(); 
} 

function createEventListener() { 
	var loginForm = document.getElementsByTagName("form")[0]; 
	
	if (loginForm.addEventListener) { 
		loginForm.addEventListener("submit", handleEvent, false); 
	} else if (loginForm.attachEvent) { 
		loginForm.attachEvent("onsubmit", handleEvent); 
	} 
} 

function setUpPage() { 
	populateInfo(); 
	createEventListener(); 
} 

 if (window.addEventListener) { 
	window.addEventListener("load", createEventListener, false); 	
}else if (window.attachEvent) { 
	window.attachEvent("onload", createEventListener); 
}  