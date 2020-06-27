"use sctrict"; 


// Function that will check what card type the user uses. 

/* 
American Express - Numbers start with 34 or 37 and consist of 15 digits. 
Discover - Numbers begin with 6011 or 65 and consist of 16 digits. 
Master Card - Numbers start with numbers 51-55 and consist of 16 digits. 
Visa - Number start with a 4; new cards consist of 16 digigts and old cards consisit of 13 digits. 


*/

function selectCardType() { 
 
 	 var cardNumValue = document.getElementById("ccNum").value;
	 var visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
	 var mc = /^5[1-5][0-9]{14}$/;
	 var discover = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
	 var amex = /^3[47][0-9]{13}$/;
 
		// Checking if the checkboxes were checked if so take the value of cardNumValue. 
	if (visa.test(cardNumValue)) { 
		document.getElementById("visa").checked = "checked"; 
	}else if (mc.test(cardNumValue)) {
			document.getElementById("mc").checked = "checked"; 
	}else if (discover.test(cardNumValue)) { 
			document.getElementById("discover").checked = "checked"; 
	}else if (amex.test(cardNumValue)) { 
			document.getElementById("amex").checked = "checked"; 
	}   
}  	

	// Creating a event listener for the function. 
function createEventListener() { 
	var cardNum = document.getElementById("ccNum"); 
	if(ccNum.addEventListener) { 
		cardNum.addEventListener("change", selectCardType, false); 
	}else if (cardNum.attachEvent) { 
		cardNum.attachEvent("onchange", selectCardType); 
	} 	
}

if (window.addEventListener) { 
	window.addEventListener("load", createEventListener, false); 	
}else if (window.attachEvent) { 
	window.attachEvent("onload", createEventListener); 
}   