   
   
   
   
   
    var DaysOfWeek= ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];  
   
    var opponents= ["Lightning", "Combines", "Combines","Combines","Lightning","Lightning","Lightning", "Lightning", "Barn Raisers", "Barn Raisers","Barn Raisers","Sodbusters",
					   "Sodbusters","Sodbusters","Sodbusters","(off)","River Riders","River Riders","River Riders","Big Dippers", "Big Dippers", 
					   "Big Dippers", "(off)", "Sodbusters", "Sodbusters", "Sodbusters", "Combines", "Combines", "Combines", "(off)", "(off)"];  
	
	
	var GameLocation = ["away","away","away","away","home","home","home","home","home","home","home","away","away","away ","away ","","away","away","away","away","away","away","",
						"home","home","home","home","home","home","",""];
						
						
	function addColumHeaders() { 
	var i = 0; 
	
	while (i < 7 ) { 
	document.getElementsByTagName("th")[i].innerHTML = DaysOfWeek[i]; 
	i++;
		}
	}
	
	function addCalendarDates() { 
	
	var i = 1; 
	var paragraphs = ""; 
	
	do { 
	var tableCell = document.getElementById("08-" + i); 
	paragraphs = tableCell.getElementsByTagName("p"); 
	paragraphs[0].innerHTML = i; 
	i++; 
	}while (i <= 31); 
	}
	
	function addGameInfo() { 
	var paragraphs = ""; 
	
	for (var i = 0; i < 31; i++) { 
	
	var date = i + 1; 
	var tableCell = document.getElementById("08-" + date); 
	paragraphs = tableCell.getElementsByTagName("p"); 
	
	/*
		if (GameLocation[i] === "away") { 
			paragraphs[1].innerHTML = "@ "; 
		}
		if (GameLocation[i] === "home") { 
			paragraphs[1].innerHTML = "vs "; 
		}
		paragraphs[1].innerHTML += opponents[i]; 
		}
	
	if (GameLocation[i] === "away") { 
		paragraphs[1].innerHTML = "@ "; 
	}
	else {  
		if (GameLocation[i] === "home") { 
			paragraphs[1].innerHTML = "vs "; 
		}
	}
	paragraphs[1].innerHTML += opponents[i]; 
	*/ 
	
	switch (GameLocation[i]) { 
		case "away":
		paragraphs[1].innerHTML = "@ "; 
		break; 
		case "home": 
			paragraphs[1].innerHTML = "vs "; 
			break; 
			
		}	
		paragraphs[1].innerHTML += opponents[i]; 
		}
	}
	
	function setUpPage()  { 
	addColumHeaders(); 
	addCalendarDates(); 
	addGameInfo(); 
	} 
	
	// Adding event listener so fucntion will run when the page loads. 
//	if (window.addEventListener("load", setUpPage, false); 
	
	if (window.addEventListener) { 
		window.addEventListener("load", setUpPage, false); 
	} else if (window.attachEvent) { 
		window.attachEvent("onload", setUpPage); 
	}
	
	
	