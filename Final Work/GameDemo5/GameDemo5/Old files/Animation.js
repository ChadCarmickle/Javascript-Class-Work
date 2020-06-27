
// The function that will start all the functions 
function start() { 
engine(0);  // starts the engine 
} 

// Pikachu's Animation. 

CharacterStop = false; 
function testSprite() { 

// Jumping frame. 
if (Character_y > 250 && Character_y < 419) { 
	return frame3; 
}

// landing frame. 
else if (Character_y > 420 && Character_y < 440) { 
	return frame4; 
}else if (Character_y === 440 && CharacterStop === true) { 
//	console.log("CHARACTER STOP: " + CharacterStop); 
	return frame4; 
}else {   
	 	
	if(engine_Frame%4 == 0) { 
		return frame1; 
		
	}else if (engine_Frame%4 === 1) { 
		return frame2; 

	}else if (engine_Frame%4 === 2) { 
		return frame3; 

	}else if (engine_Frame%4 === 3) { 
		return frame4; 
	}
	}	
}


// Rock Enemy 
var rock = new Image(); 
rock.src = "rock.png"; 

// Ketchup bottle 
var ketchupBottle = new Image(); 
ketchupBottle.src = "ketchup.PNG"; 

// Pokemon 1 frames 
var Pokemon1_F1 = new Image(); 
Pokemon1_F1.src = "pokemon1_frame1.PNG"; 
var Pokemon1_F2 = new Image(); 
Pokemon1_F2.src = "pokemon1_frame2.PNG"; 

// Pokemon 2 frames 
var Pokemon2_F1 = new Image(); 
Pokemon2_F1.src = "pokemon2_frame1.PNG"; 
var Pokemon2_F2 = new Image(); 
Pokemon2_F2.src = "pokemon2_frame2.PNG"; 
var Pokemon2_F3 = new Image(); 
Pokemon2_F3.src = "pokemon2_frame3.PNG"; 
var Pokemon2_F4 = new Image(); 
Pokemon2_F4.src = "pokemon2_frame4.PNG"; 




// Mob Spawns
function Mob_Spawn_Ketchup() { 

mobSpawnFrame1 = ketchupBottle;
mobSpawnFrame2 = ketchupBottle;
mobSpawnFrame3 = ketchupBottle;
mobSpawnFrame4 = ketchupBottle; 
// Code to change enemy.  
}  

function Mob_Spawn_Pokemon1() { 

mobSpawnFrame1 = Pokemon1_F1; 
mobSpawnFrame2 = Pokemon1_F2;
mobSpawnFrame3 = Pokemon1_F1;
mobSpawnFrame4 = Pokemon1_F2;
// Code to change enemy.  
}  
function Mob_Spawn_Pokemon2() { 

mobSpawnFrame1 = Pokemon2_F1; 
mobSpawnFrame2 = Pokemon2_F2;
mobSpawnFrame3 = Pokemon2_F3;
mobSpawnFrame4 = Pokemon2_F4;
// Code to change enemy.  
}  
function Mob_Spawn_Rock() { 

mobSpawnFrame1 = rock; 
mobSpawnFrame2 = rock;
mobSpawnFrame3 = rock;
mobSpawnFrame4 = rock;
// Code to change enemy.  
}   

var mobSpawnFrame1 = rock;  
var mobSpawnFrame2 = rock; 
var mobSpawnFrame3 = rock; 
var mobSpawnFrame4 = rock; 

function RandomMob() { 
	
	var RandomNumber = Math.floor(Math.random() * 5); // random number between 0 - 4. 
	console.log("RandomNumber" + RandomNumber ); 
		if(RandomNumber == 0) { 	
			Mob_Spawn_Ketchup(); 

		}else if (RandomNumber == 1) { 
			Mob_Spawn_Pokemon1(); 
		}
		else if (RandomNumber == 3) { 
			Mob_Spawn_Pokemon2(); 
		}
		else if (RandomNumber == 4) { 
			Mob_Spawn_Rock(); 
		}		
} 

// Mob_Speed
var Mob_Speed = 30; 
function MoveMob() { 
	
	
	if(engine_Frame%4 == 0) { 
	Mob_x -= Mob_Speed; 
	return mobSpawnFrame1; 
	}else if (engine_Frame%4 === 1) {
			Mob_x -= Mob_Speed

	return mobSpawnFrame2; 
	}else if (engine_Frame%4 === 2) { 
		Mob_x -= Mob_Speed

	return mobSpawnFrame3; 
	}else if (engine_Frame%4 === 3) {
			Mob_x -= Mob_Speed

	return mobSpawnFrame4; 
	}
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
	
	// testing if the user hits a mob. 
	this.collison = function(mob) { 
	
	var x1 = mob.x; 
	var x2 = mob.x + mob.width; 

	var y1 = mob.y; 
	var y2 = mob.y + mob.height; 
	

		//console.log("v: " + v); 

			
				

	// Checking the hitbox of X cords. 
	for(let u =  this.x + 29; u <= this.x + 70; u += 2) {
		
//	for(let u =  this.x + 29; u <= 95; u++) {
		//console.log("U: " + u);

			// Checking the hitbox of Y cords 
		for(let v = this.y + 16; v <= this.y + 55; v+= 2) {
//		for(let v = this.y + 16; v <= 55; v++) {

		//console.log( u + " " + " " + v); 

		if(u > x1 && u < x2 && v > y1 && v < y2) { 
			//console.log(" Character was hit!!! "); 
			
			// Player Collected the bottle. 
			if (mobSpawnFrame1 === ketchupBottle) { 
			console.log("Good Job"); 
			//    document.getElementById("gameover").innerHTML = "Good Job!"; 
			currentScore = currentScore + 100; 
			document.getElementById("gameScore").innerHTML = "Score: " + currentScore; 
			Rock_x = 1200; 	
			
			// Player Did not collect a bottle 
			} else { 
			
			console.log("Collide"); 

			gameOver = true; 
			document.getElementById("gameover").innerHTML = "Game Over"; 	
		}
		}
		}
	}
	
} 

}		

var currentScore = 00000; 


function testObject2(x, y, mob) { 

// Equaling all the objects to this. 
this.x = x; 
this.y = y; 
this.mob = mob; 

	// Function that will show the character 
	this.display = function() { 
		var scene = document.getElementById('myCanvas');  // Obtaining the scene from the html also known as the canvas. 
		var sketch = scene.getContext("2d"); 
		
		// drawing the image. 
		sketch.beginPath(); 
		sketch.drawImage(this.mob, this.x, this.y); 
		sketch.closePath(); 
		
		
	}
	// Setting the height and widthi of the hitbox. 
	this.width = mob.width; 
	this.height = mob.height;

		// obtaining the setters and getters. 
	this.getWidth = function() { 
		return this.width; 
	} 
	this.getHeight = function() { 
		return this.height; 
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


// Backgrounds 
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

// Character Movements. 
document.onkeydown = function(event) {
	var press = String.fromCharCode(event.keyCode); 
	
	// Arrow Keys 
	 if (event.keyCode == '37') {
       // left arrow
	   Character_x -= 5; 

    }
	else if (event.keyCode == '39') {
		// right arrow
		Character_x += 5; 
    }
    else if (event.keyCode == '40') {
        // down arrow
		Character_y += 5; 
    }
	
	// WD Keys 

    else if (press == 'A') {
       // left arrow
	   //Character_x -= 5; 
	   if(Character_x_velocity > 0) { 
	    Character_x_velocity = 0; 
	   } 
	    if(Character_x_velocity > -20) {
	   CharacterStop = true; 
	   //console.log("LEFT: " + Character_x_velocity); 			
	   	Character_x_velocity -= 5;
	   	}
	  
    }
    else if (press == 'D') {
		// right arrow
		//Character_x += 5;
		if (Character_x_velocity < 10) {
	 //  console.log("Right: " + Character_x_velocity); 			
	   	Character_x_velocity += 2;
		}
	
    }
	
	// Jump keys W, Up Arrow, Space bar 
	else if (press == 'W') {
        // up arrow
		if ( CanJump === true) { 
		
		//if(Character_y === 440) { 
		Character_y_velocity = -40; 
		//}
	//	console.log("W Key: " + Character_y_velocity); 
		//Character.c = -40; 
		}
	}
	else if (event.keyCode == '38') {
        // up arrow
		if ( CanJump === true) { 
		//Character_velocity = -40; 
		}
	}		
	else if (event.keyCode == '32') {
        
		if (gameOver === true) { 
			RestartGame(); 
		}
			else { 
				gameOver = false; 
	
					if ( CanJump === true) { 
					//Character_velocity = -40; 
				}
			} 
	
	}
	// Restat Game 
	else if (event.keyCode == '27') { // Esc key {
		if (gameOver === true) { 
			RestartGame(); 
		}
			else { 
				gameOver = false; 
			} 
		}	 
	else if (event.keyCode == '13')  // Enter key {
		if (gameOver === true) { 
			RestartGame(); 
		}else { 
			gameOver = false; 
		} 
	
} 

document.onkeyup = function(event) {
	var press = String.fromCharCode(event.keyCode);  
	
	 if (event.keyCode == '37') {
       // left arrow
	   
	   CharacterStop = false; 

    }
	
    else if (press == 'A') {
       // left arrow
	   //Character_x -= 5; 
	   
	   CharacterStop = false;
	   Character_x_velocity = 0; 	
	   
	   
	   while (Character_x_velocity > 0) { 
	   	Character_x_velocity = Character_x_velocity - 0.5; 
			//	console.log("LEFT: " + Character_x_velocity); 
		}
	  
    }
    else if (press == 'D') {
			//console.log("D Key up "); 

		// right arrow
		//Character_x += 5;
		//while (Character_x_velocity > 0) { 
				//	console.log("onkeyup: Character_x_velocity: " + Character_x_velocity); 
					Character_x_velocity = 0; 
	   	//Character_x_velocity = Character_x_velocity - 0.5; 
		//} 
		//console.log("Right: " + Character_x_velocity); 
		
    }

}
 

function CheckBoundry() { 
if(Character_x < 8) { 
	Character_x = 8; 
}else if (Character_x > 900) { 
	Character_x = 900;
}  

} 

function checkgravity() { 

if (Character_y < 440 ) { 
		CanJump = false; 
		
		
		Character_y_velocity += 5; 
		//console.log("checkgravity: " + Character_y_velocity); 

		
		}else 
		{ 
		CanJump = true;
		}
		
if (Character_y > 440) { 
			
	Character_y = 440; 
	} 

if (Mob_y > 440) { 
			
	Mob_y = 440; 

}else if (Mob_x < -280) { 

	RandomMob(); 
	Mob_x = 1200; 
	}
	

} 
function RestartGame() { 
	
			gameOver = false;
		// Engine speed will relate to frames per second. 
		engine_speed = 50; // 40 milliseconds = 25fps.  
		engine_Frame = 0; 

		counter = 0; 
		// Characters x and y position on the canvas. 
		Character_x = 23; 
		Character_y = 440; 
		Character_x_velocity = 0; 
		Character_y_velocity = 0;
		
		Mob_x = 1200; 
		Mob_y = 440; 
		engine(); 
		}

// Engine speed will relate to frames per second. 
var engine_speed = 50; // 40 milliseconds = 25fps.  
var engine_Frame = 0; 

var counter = 0; 
// Characters x and y position on the canvas. 
var Character_x = 23; 
var Character_y = 440; 
Character_x_velocity = 0; 
Character_y_velocity = 0; 


//var Character_velocity = 0; 

var Mob_x = 1200; 
var Mob_y = 440; 

gameOver = false; 

function engine() { 
	
if (gameOver === false) { 	
	var clock = setTimeout(function(){engine();}, engine_speed);
	
	// Check gravity of character reset it back.	
	checkgravity();  	
	CheckBoundry(); 
	// clears the background. 
	clearing(); 
	
	animation(); 
	// Calling the character to equal to testObject that will take in the characters position and create the spirte of the character. 
	var Character = new testObject(Character_x, Character_y, testSprite()); 
	
	
	Character_y += Character_y_velocity; 
	Character_x += Character_x_velocity; 
		 //  console.log("Engine: " + Character_x_velocity); 			

//Character_x_velocity *= 0.9;// friction
	//Character_y_velocity *= 0.9;// friction
	
	var Mob = new testObject2(Mob_x, Mob_y, MoveMob()); 

	// Now to display the character. 
	Character.display(); 
	Mob.display(); 
	Character.collison(Mob); 
	
	
	// Calling a counter to slow down the animation. 		
	if (counter%2 == 0) { 
	// increasing the frame every second. 
	engine_Frame++;  	
	} 
	// adding the counter. 
	counter++; 
	} 
} 