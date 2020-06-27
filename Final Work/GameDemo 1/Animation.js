
// The function that will start all the functions 
function start() { 

engine(0);  // starts the engine 
 
} 

// Pikachu's Animation. 
function testSprite() { 
	
	// Checks the engine speed 
	if(engine_Frame%4 == 0) { 
		return frame1; // if 0 frame1 and so on. 
		
	}else if (engine_Frame%4 === 1) { 
		return frame2; 

	}else if (engine_Frame%4 === 2) { 
		return frame3; 

	}else if (engine_Frame%4 === 3) { 
		return frame4; 
	}		

	// We use remainders 4 because we have 4 different remainders from 0, 1, 2, 3. 
	// this allows us to not reset the frame over and over again. 
	
}

	// Will display the sprite of the character. 
function testObject(x, y, sprite) { 

// Equaling all the objects to this. 
this.x = x; 
this.y = y; 
this.sprite = sprite; 

	// Function that will show the character 
	this.display = function() { 
		var scene = document.getElementById('myCanvas');  // Obtaining the scene from the html also known as the canvas. 
		var sketch = scene.getContext("2d"); 
		
		// drawing the image. 
		sketch.beginPath(); 
		sketch.drawImage(this.sprite, this.x, this.y); 
		sketch.closePath(); 
		
	}

} 

function clearing(){
	var scene = document.getElementById('myCanvas');
	var sketch = scene.getContext("2d");
	
	sketch.beginPath();
	sketch.clearRect(0, 0, scene.width, scene.height);
	sketch.closePath();
}

var Night_Img = new Image();
Night_Img.src = "Night.jpg";

var Beach_Img = new Image();
Beach_Img.src = "beach_Background.jpg";

var Image = Beach_Img; 

function background(x){
	var scene = document.getElementById('myCanvas');
	var sketch = scene.getContext("2d");
	
	sketch.beginPath();
	sketch.drawImage(Image, x, 0);
	sketch.closePath();
}

		var spot1 = 0 
			var spot2 = 948; 
			function animation() { 
			
				clearing(); 
				background(spot1);
				background(spot2); 
				
				spot1 -=4; 
				spot2 -=4; 
				
				if(spot1 < -947) { 
					spot1 = +948; 
				}
				if (spot2 < -947) { 
					spot2 = + 948;   
					
					}
				
			} 
var Backgroundbool = true; 

function Beach_Background() { 
document.getElementById("Night_radio").checked = false;
 Image = Beach_Img;
 animation(); 
}
function Night_Background() { 
document.getElementById("Beach_radio").checked = false;
 Image = Night_Img;
animation(); 
}  		



// Engine speed will relate to frames per second. 
var engine_speed = 50; // 40 milliseconds = 25fps.  
var engine_Frame = 0; 

var counter = 0; 
// Characters x and y position on the canvas. 
var Character_x = 23; 
var Character_y = 524; 

function engine() { 
	
	var clock = setTimeout(function(){engine();}, engine_speed);
	clearing(); 
	
	animation(); 
	// Calling the character to equal to testObject that will take in the characters position and create the spirte of the character. 
	var Character = new testObject(Character_x, Character_y,testSprite()); 
	
	// Now to display the character. 
	Character.display(); 
	
	// Calling a counter to slow down the animation. 		
	if (counter%2 == 0) { 
	// increasing the frame every second. 
	engine_Frame++;  	
	} 
	// adding the counter. 
	counter++; 
	
	 
} 