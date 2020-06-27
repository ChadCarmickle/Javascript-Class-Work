// Chad Carmickle 
// 3/27/2019

// Making global variables. 
	var photographerCost = 0; 
	var totalCost = 0; 
	var memoryBook = false; 
	var repoductionrights = false; 

	
	// Calculates the cost for service
	function calcStaff() { 
	var num = document.getElementById("photognum"); 
	var hrs = document.getElementById("photoghrs"); 
	var distance = document.getElementById("distance"); 
	totalCost -= photographerCost; 
	photographerCost = num.value * 100 * hrs.value + distance.value * num.value; 
	totalCost += photographerCost; 
	document.getElementById("estimate").innerHTML = "$" + totalCost; 
	}
	
	// Adds or subtracts the cost from the radio buttons membook or re-production right. 
	function toggleMembook() { 
	(document.getElementById("membook").checked === false) ? totalCost -= 250 : totalCost += 250; 
	document.getElementById("estimate").innerHTML = "$" + totalCost; 
	}
	
	function toggleRights() { 
	(document.getElementById("reprodrights").checked === false) ? totalCost -= 1250 : totalCost += 1250; 
	 document.getElementById("estimate").innerHTML = "$" + totalCost; 

	}
	
 // This will reset the page 
 function resetForm() { 
 
 // This function will reset the fields if the page is refreshed. 
	document.getElementById("photognum").value = 1; 
	document.getElementById("photoghrs").value = 2; 
	document.getElementById("membook").checked = memoryBook; 
	document.getElementById("reprodrights").checked = repoductionrights; 
	document.getElementById("distance").value = 0; 
	calcStaff(); 
	createEventListeners(); 
 }
 // This function will run whenever the user changes the values for # of photographers or # of hours to photograph. 
 function createEventListeners() { 
 document.getElementById("photognum").addEventListener("change", calcStaff, false); 
 document.getElementById("photoghrs").addEventListener("change", calcStaff, false); 
 
 // This will listen for the check boxes. 
 document.getElementById("membook").addEventListener("change", toggleMembook, false); 
 document.getElementById("reprodrights").addEventListener("change", toggleRights, false); 

 // adding event for the distance
  document.getElementById("distance").addEventListener("change", calcStaff, false); 

 
 }
 
 // Adding a addEventListener to the script when the user reloads the page the fields reset. 
 window.addEventListener("load", resetForm(), false); 
