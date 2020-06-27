
// The function that will start all the functions 
function start() { 
engine(0);  // starts the engine 
} 

// Pikachu's Animation. 

CharacterStop = false; 
function testSprite() { 

// Jumping frame. 
if (Character_y > 250 && Character_y < 538) { 
	return frame3; 
}

// landing frame. 
else if (Character_y > 539 && Character_y < 540) { 
	return frame4; 
}else if (Character_y === 540 && CharacterStop === true) { 
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

// Mob_Speed
var Mob_Speed = 15; 


// Move mob left. 
function MoveMob() { 
		
	if(var_RandomNumber == 14) { 
	Mob_Speed = 24;
	}
	else { 
	Mob_Speed = 15; 
	}	
		
	if(engine_Frame%4 == 0) { 
			Mob_x -= Mob_Speed; 
	}else if (engine_Frame%4 === 1) {
			Mob_x -= Mob_Speed
	}else if (engine_Frame%4 === 2) { 
 			Mob_x -= Mob_Speed

	}else if (engine_Frame%4 === 3) {
			Mob_x -= Mob_Speed 
	}
}

var currentScore = 0; 

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
	this.collison = function(TestMob) { 
	
	var x1 = TestMob.x; 
	var y1 = TestMob.y; 
	
	if (var_RandomNumber == 8 || RandomNumber == 13) { 
	var y2 = TestMob.y + 150;  
	var x2 = TestMob.x + 100; 
	}else {
	var x2 = TestMob.x + TestMob.width; 
	var y2 = TestMob.y + TestMob.height; 
	}
	

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
			if (MobImage === "Ketchup") { 
			
			console.log("Bottle moved" + Mob_x); 							
			
			BottleCollected = true; 
			break; 
			}
				// Player Did not collect a bottle 
			else { 
			
			//console.log("Collide"); 

			gameOver = true; 
			document.getElementById("gameover").innerHTML = "Game Over"; 	
		}
		}
		}
	}
	
} 
	}
// 	makes a random number that will relate to SpawnEnemy(); 
	 
	var var_RandomNumber = 0; 
	var number_range = 16;   // Whatever number is set the range will be 0 to that # - 1. 
	var ThirdNumber; 
	var Placeholder = Math.floor(Math.random() * number_range); // random number between 0 - 16. 

	function RandomNumber() { 
	
	var Placeholder = Math.floor(Math.random() * number_range); // random number between 0 - 16. 
	
	if (Placeholder === ThirdNumber) {
			
	Placeholder = Math.floor(Math.random() * number_range);
	}else { 
	var_RandomNumber = Placeholder;
	ThirdNumber = Placeholder; 
	}
	}
					 
	
	// Takes that random number and decided which enemy to spawn. 
	function SpawnEnemy()  { 

			if(var_RandomNumber == 0) { 
			MobImage = "Ketchup"
			}else if (var_RandomNumber == 1) { 
			MobImage = "Rock"
			} else if (var_RandomNumber == 2) { 
			MobImage = "SecondRock"
			}else if (var_RandomNumber == 3) { // Chikerita
			MobImage = "Pokemon0"
			} else if (var_RandomNumber == 4) { // Magikarp
			MobImage = "Pokemon1"
			}else if (var_RandomNumber == 5) { // Cubone
			MobImage = "Pokemon2"
			}else if (var_RandomNumber == 6) { // Caterpie
			MobImage = "Pokemon3"
			}else if (var_RandomNumber == 7) { // Cyndaquil
			MobImage = "Pokemon4"
			}else if (var_RandomNumber == 8) { // Haunter
			MobImage = "Pokemon5"
			}else if (var_RandomNumber == 9) { // Hoppip
			MobImage = "Pokemon6"
			}else if (var_RandomNumber == 10) { // Jolt
			MobImage = "Pokemon7"
			}else if (var_RandomNumber == 11) { // Mew
			MobImage = "Pokemon8"
			}else if (var_RandomNumber == 12) { // Pidgey 
			MobImage = "Pokemon9"
			}else if (var_RandomNumber == 13) { // Snorlax 
			MobImage = "Pokemon10"
			}else if (var_RandomNumber == 14) { // Taros
			MobImage = "Pokemon11"
			}else if (var_RandomNumber == 15) { // Vaporion
			MobImage = "Pokemon12"
			} 
	}
	
	function SpawnRock() { 
	var PokemonArray = new Array(); 
	PokemonArray[0] = rock;   	
	CurrentFrame = PokemonArray[FrameNumber % 1]; 
	}
	function SpawnSecondRock() { 
	var PokemonArray = new Array(); 
	PokemonArray[0] = SecondRock;   	
	CurrentFrame = PokemonArray[FrameNumber % 1]; 
	}
	function SpawnKetchup() { 
	var PokemonArray = new Array(); 
	PokemonArray[0] = ketchup;  
	CurrentFrame = PokemonArray[FrameNumber % 1]; 
	}
	function Spawnchikorita() { 
	var PokemonArray = new Array(); 
	PokemonArray[0] = chikorita_frame0;  
	PokemonArray[1] = chikorita_frame1; 
	CurrentFrame = PokemonArray[FrameNumber % 2]; 
	}
	function spawnMagickarp() { 
	var PokemonArray = new Array(); 
	PokemonArray[0] = Magickarp_frame0;  
	PokemonArray[1] = Magickarp_frame1; 
	PokemonArray[2] = Magickarp_frame2; 
	PokemonArray[3] = Magickarp_frame3;
	PokemonArray[4] = Magickarp_frame0;  
	PokemonArray[5] = Magickarp_frame1; 
	PokemonArray[6] = Magickarp_frame2; 
	PokemonArray[7] = Magickarp_frame3; 	
	CurrentFrame = PokemonArray[FrameNumber % 8]; 
	}

	function Spawn_cubone() { 
	var PokemonArray = new Array(); 
	PokemonArray[0] = cubone_1;  
	PokemonArray[1] = cubone_2;  
	PokemonArray[2] = cubone_3; 
	PokemonArray[3] = cubone_4; 
	PokemonArray[4] = cubone_5; 	
	CurrentFrame = PokemonArray[FrameNumber % 5]; 
	} 	
	function spawn_caterpie() { 
	var PokemonArray = new Array(); 
	PokemonArray[0] = caterpie_1;  
	PokemonArray[1] = caterpie_2; 
	PokemonArray[2] = caterpie_3; 
	PokemonArray[3] = caterpie_4;
	PokemonArray[4] = caterpie_5;  
	PokemonArray[5] = caterpie_6; 
	PokemonArray[6] = caterpie_7; 
	PokemonArray[7] = caterpie_8; 	 	
	CurrentFrame = PokemonArray[FrameNumber %6]; 
	}
	function spawn_Cyndaquil() { 
	var PokemonArray = new Array(); 
	PokemonArray[0] = cyndaquil_1;  
	PokemonArray[1] = cyndaquil_2; 
	PokemonArray[2] = cyndaquil_3; 
	PokemonArray[3] = cyndaquil_4;
	PokemonArray[4] = cyndaquil_5;  
	PokemonArray[5] = cyndaquil_6; 
	PokemonArray[6] = cyndaquil_7;
	PokemonArray[7] = cyndaquil_8;  
	PokemonArray[8] = cyndaquil_9; 
	PokemonArray[9] = cyndaquil_10; 
	PokemonArray[10] = cyndaquil_11; 
	PokemonArray[11] = cyndaquil_12;
	PokemonArray[12] = cyndaquil_13;  
	PokemonArray[13] = cyndaquil_14; 	
	CurrentFrame = PokemonArray[FrameNumber % 14]; 
	} 
	function spawn_Haunter() { 
	var PokemonArray = new Array(); 
	PokemonArray[0] = Haunter_1;  
	PokemonArray[1] = Haunter_2; 
	PokemonArray[2] = Haunter_3; 
	PokemonArray[3] = Haunter_4;
	PokemonArray[4] = Haunter_5;  
	PokemonArray[5] = Haunter_6; 
	PokemonArray[6] = Haunter_7;
	PokemonArray[7] = Haunter_8;  
	PokemonArray[8] = Haunter_9; 
	PokemonArray[9] = Haunter_10; 
	PokemonArray[10] = Haunter_11; 
	PokemonArray[11] = Haunter_12;
	PokemonArray[12] = Haunter_13;  
	PokemonArray[13] = Haunter_14; 		
	CurrentFrame = PokemonArray[FrameNumber % 14]; 
	} 
	function spawn_Hoppip() { 
	var PokemonArray = new Array(); 

	PokemonArray[0] = Hoppip_1;  
	PokemonArray[1] = Hoppip_2; 
	PokemonArray[2] = Hoppip_3; 
	PokemonArray[3] = Hoppip_4;
	PokemonArray[4] = Hoppip_5;  
	PokemonArray[5] = Hoppip_6; 
	PokemonArray[6] = Hoppip_7;
	PokemonArray[7] = Hoppip_8;  
	PokemonArray[8] = Hoppip_9; 
	PokemonArray[9] = Hoppip_10; 
	CurrentFrame = PokemonArray[FrameNumber % 10]; 
	} 	
	function spawn_Jolt() { 
	var PokemonArray = new Array(); 
	PokemonArray[0] = jolt_1;  
	PokemonArray[1] = jolt_2; 
	PokemonArray[2] = jolt_3; 
	PokemonArray[3] = jolt_4; 	
	CurrentFrame = PokemonArray[FrameNumber % 4]; 
	}
	function spawn_Mew() { 
	var PokemonArray = new Array(); 
	PokemonArray[0] = mew_1;  
	PokemonArray[1] = mew_2; 
	PokemonArray[2] = mew_3; 
	PokemonArray[3] = mew_4;
	PokemonArray[4] = mew_5;  
	PokemonArray[5] = mew_6; 
	PokemonArray[6] = mew_6;
	PokemonArray[7] = mew_6;
	PokemonArray[8] = mew_6;  
	PokemonArray[9] = mew_6; 
	PokemonArray[10] = mew_6; 
	PokemonArray[11] = mew_6;
	PokemonArray[12] = mew_6;  
	PokemonArray[13] = mew_6; 
	PokemonArray[14] = mew_7;
	PokemonArray[15] = mew_8;	
	CurrentFrame = PokemonArray[FrameNumber % 8]; 
	} 
	function spawn_Pidgey() { 
	var PokemonArray = new Array(); 
	PokemonArray[0] = pidgey_1;  
	PokemonArray[1] = pidgey_2; 
	PokemonArray[2] = pidgey_3; 
	PokemonArray[3] = pidgey_4;
	PokemonArray[4] = pidgey_5;  
	PokemonArray[5] = pidgey_6; 
	PokemonArray[6] = pidgey_7;
	PokemonArray[7] = pidgey_8;  
	PokemonArray[8] = pidgey_9; 
	PokemonArray[9] = pidgey_10; 
	PokemonArray[10] = pidgey_11; 
	PokemonArray[11] = pidgey_12;
	PokemonArray[12] = pidgey_13;  
	PokemonArray[13] = pidgey_14; 
	PokemonArray[14] = pidgey_15;  
	PokemonArray[15] = pidgey_16; 
	PokemonArray[16] = pidgey_17; 
	PokemonArray[17] = pidgey_18;
	PokemonArray[18] = pidgey_19;  
	PokemonArray[19] = pidgey_20; 
	PokemonArray[20] = pidgey_21;
	PokemonArray[21] = pidgey_22;  
	PokemonArray[22] = pidgey_23; 
	PokemonArray[23] = pidgey_24; 
	PokemonArray[24] = pidgey_25; 
	CurrentFrame = PokemonArray[FrameNumber % 25]; 
	} 
	function spawn_Snorlax() { 
	var PokemonArray = new Array(); 
	PokemonArray[0] = Snorlax_1;  
	PokemonArray[1] = Snorlax_2; 
	PokemonArray[2] = Snorlax_3; 
	PokemonArray[3] = Snorlax_4; 
	PokemonArray[4] = Snorlax_5;  
	PokemonArray[5] = Snorlax_6; 
	PokemonArray[6] = Snorlax_7; 
	PokemonArray[7] = Snorlax_8;
	PokemonArray[8] = Snorlax_1;  
	PokemonArray[9] = Snorlax_2; 
	PokemonArray[10] = Snorlax_3; 
	PokemonArray[11] = Snorlax_4; 
	PokemonArray[12] = Snorlax_5;  
	PokemonArray[13] = Snorlax_6; 
	PokemonArray[14] = Snorlax_7; 
	PokemonArray[15] = Snorlax_8;
	CurrentFrame = PokemonArray[FrameNumber % 6]; 
	}  	
	function spawn_Taros() { 
	Taros_1.style.width = "25"; 
	var PokemonArray = new Array(); 
	PokemonArray[0] = Taros_1;  
	PokemonArray[1] = Taros_2; 
	PokemonArray[2] = Taros_3; 
	PokemonArray[3] = Taros_4; 
	PokemonArray[4] = Taros_5;  
	PokemonArray[5] = Taros_6; 
	PokemonArray[6] = Taros_7; 
	PokemonArray[7] = Taros_8;  	
	CurrentFrame = PokemonArray[FrameNumber % 8]; 
	} 
	function spawn_Vaporion() { 
	var PokemonArray = new Array(); 
	PokemonArray[0] = vaporeon_1;  
	PokemonArray[1] = vaporeon_2; 
	PokemonArray[2] = vaporeon_3; 
	PokemonArray[3] = vaporeon_4;
	PokemonArray[4] = vaporeon_5;  
	PokemonArray[5] = vaporeon_6; 
	PokemonArray[6] = vaporeon_7;
	PokemonArray[7] = vaporeon_8;  
	PokemonArray[8] = vaporeon_9; 
	PokemonArray[9] = vaporeon_10; 
	PokemonArray[10] = vaporeon_11; 
	PokemonArray[11] = vaporeon_12;
	PokemonArray[12] = vaporeon_13;  
	PokemonArray[13] = vaporeon_14; 
	PokemonArray[14] = vaporeon_15;  
	PokemonArray[15] = vaporeon_16; 
	PokemonArray[16] = vaporeon_17; 
	PokemonArray[17] = vaporeon_18;
	PokemonArray[18] = vaporeon_19;  
	PokemonArray[19] = vaporeon_20; 
	PokemonArray[20] = vaporeon_21;
	PokemonArray[21] = vaporeon_22;  
	PokemonArray[22] = vaporeon_23; 
	PokemonArray[23] = vaporeon_24; 
	PokemonArray[24] = vaporeon_25; 
	PokemonArray[25] = vaporeon_26; 
	PokemonArray[26] = vaporeon_27;
	PokemonArray[27] = vaporeon_28;  	
	CurrentFrame = PokemonArray[FrameNumber % 28]; 
	} 
	
	var CurrentFrame; 
	function Spawn_Sprite(MobImage) {
	
	if(MobImage == "Ketchup") { 
		SpawnKetchup(); 
	}else if (MobImage == "Rock") { 
		SpawnRock(); 
	}else if (MobImage == "SecondRock") { 
		SpawnSecondRock(); 
	}else if (MobImage == "Pokemon0") { 
		Spawnchikorita(); 
	}else if (MobImage == "Pokemon1") { 
		spawnMagickarp(); 
	}else if (MobImage == "Pokemon2") { 
		Spawn_cubone(); 
	}else if (MobImage == "Pokemon3") { 
		spawn_caterpie(); 
	}else if (MobImage == "Pokemon4") { 
		spawn_Cyndaquil(); 
	}else if (MobImage == "Pokemon5") { 
		spawn_Haunter(); 
	}else if (MobImage == "Pokemon6") { 
		spawn_Hoppip(); 
	}else if (MobImage == "Pokemon7") { 
		spawn_Jolt(); 
	}else if (MobImage == "Pokemon8") { 
		spawn_Mew(); 
	}else if (MobImage == "Pokemon9") { 
		spawn_Pidgey(); 
	}else if (MobImage == "Pokemon10") { 
		spawn_Snorlax(); 
	}else if (MobImage == "Pokemon11") { 
		spawn_Taros(); 
	}else if (MobImage == "Pokemon12") { 
		spawn_Vaporion(); 
	}
		
	return CurrentFrame 
	}

function EnemyObject(x, y, MyImage,) { 

// Equaling all the objects to this. 
this.x = x; 
this.y = y;
this.MyImage = MyImage;   


	// Function that will show the character 
	this.display = function() { 
		var scene = document.getElementById('myCanvas');  // Obtaining the scene from the html also known as the canvas. 
		var sketch = scene.getContext("2d"); 
	
	
		// Setting the height and widthi of the hitbox. 
	this.width = MyImage.width; 
	this.height = MyImage.height;
	
		// obtaining the setters and getters. 
	this.getWidth = function() { 
		return this.width; 
	} 
	this.getHeight = function() { 
		return this.height; 
	}

	sketch.beginPath();
	sketch.drawImage(this.MyImage, this.x, this.y);
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


var Beach_Img = new Image();
Beach_Img.src = "beach_Background.jpg";


var Dusk_Img = new Image();
Dusk_Img.src = "Dusk_Background.jpg";

var Night_Img = new Image();
Night_Img.src = "Night.jpg";

var Forest_Img = new Image();
Forest_Img.src = "Forest_Background.jpg";

var End_Img = new Image();
End_Img.src = "beach_Background.jpgw";

var Image = Beach_Img; 



function background(x){
	
	// Change background when user gets 1000 points. 
	
	if (currentScore >= 500 && currentScore <= 1100) { 
	Image = Dusk_Img; 

	} else if (currentScore >= 1200 && currentScore <= 1900) { 
	Image = Night_Img;

	} else if (currentScore >= 2000 && currentScore <= 4900) { 
	Image = Forest_Img; 
	
	}else if (currentScore >= 5000) {  	
	Image = End_Img; 
	document.getElementById("GameScoreText").innerHTML = "Winner!"; 
	GameWon = true; 
	
	}else { 
	Image = Beach_Img; 
	}
	
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

// Character Movements. 
document.onkeydown = function(event) {
	var press = String.fromCharCode(event.keyCode); 
	
	// Arrow Keys 
	 if (event.keyCode == '37') {
       // Left Arrow key 
	   if(Character_x_velocity > 0) { 
	    Character_x_velocity = 0; 
	   } 
	    if(Character_x_velocity > -20) {
	   CharacterStop = true; 
	   //console.log("LEFT: " + Character_x_velocity); 			
	   	Character_x_velocity -= 5;
	   	}
	  
    } 

	else if (event.keyCode == '39') {
		if (Character_x_velocity < 10) {
	 //  console.log("Right: " + Character_x_velocity); 			
	   	Character_x_velocity += 2;
		}  
	
	// WD Keys 

	}else if (press == 'A') {
		
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
		
		//if(Character_y === 540) { 
		Character_y_velocity = -40; 
		//}
	//	console.log("W Key: " + Character_y_velocity); 
		//Character.c = -40; 
		}
	}
	else if (event.keyCode == '38') {
        // up arrow
		if ( CanJump === true) { 
		
		//if(Character_y === 540) { 
		Character_y_velocity = -40; 
		//}
	//	console.log("W Key: " + Character_y_velocity); 
		//Character.c = -40; 
		}
	}	
	else if (event.keyCode == '32') {
	if (gameOver === true) { 
			RestartGame(); 
		}else { 
			gameOver = false; 
		}      

	 if ( CanJump === true) { 
		
		//if(Character_y === 540) { 
		Character_y_velocity = -40; 
		//}
	//	console.log("W Key: " + Character_y_velocity); 
		//Character.c = -40; 
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

if (Character_y < 540 ) { 
		CanJump = false; 
		
		
		Character_y_velocity += 5; 
		//console.log("checkgravity: " + Character_y_velocity); 

		
		}else 
		{ 
		CanJump = true;
		}
		
if (Character_y > 540) { 
			
	Character_y = 540; 
	} 
/*
if (Mob_y > 540) { 
			
	Mob_y = 540; 
*/
if (Mob_x < -280) {
	Mob_x = 1200; 
	}
/* Pokemon List. 
0- Ketchup 
1- Rock 
2- SecondRock
3- Chikerita
4- Magikarp
5- Cubone
6- caterpie
7- Cyndaquil
8- Haunter 
9- Hoppip
10-Jolt
11-Mew
12-Pidey
13-Snorlax
14-Taros
15-Vaporion
*/ 
} 
 
function RestartGame() { 
	
			gameOver = false;
		// Engine speed will relate to frames per second. 
		engine_speed = 50; // 40 milliseconds = 25fps.  
		engine_Frame = 0; 

		counter = 0; 
		// Characters x and y position on the canvas. 
		Character_x = 23; 
		Character_y = 540; 
		Character_x_velocity = 0; 
		Character_y_velocity = 0;
		
		Mob_x = 1200; 
		Mob_y = 540; 
		engine();
		var_RandomNumber = 0;
		currentScore = 0; 
		document.getElementById("gameScore").innerHTML = "00000"; 
		document.getElementById("gameover").style.display = "none"; 

		}

// Engine speed will relate to frames per second. 
var engine_speed = 50; // 40 milliseconds = 25fps.  
var engine_Frame = 0; 

var counter = 0; 
// Characters x and y position on the canvas. 
var Character_x = 23; 
var Character_y = 540; 
Character_x_velocity = 0; 
Character_y_velocity = 0; 


//var Character_velocity = 0; 

var Mob_x = 1200; 
var Mob_y = 540; 

var gameOver = false; 

var SpawnKetchupCap = 0; 

var MobImage = "Rock"; 
var FrameNumber = 0;
var BottleCollected = false; 
var GameWon = false; 

function engine() { 
	
if (gameOver === false) { 
		// Internal engine clock 
	var clock = setTimeout(function(){engine();}, engine_speed);
	
	// Checks if the bottle was collected and adds a score.  
	if (BottleCollected == true) { 
		currentScore = currentScore + 100; 
		document.getElementById("gameScore").innerHTML = currentScore; 
		BottleCollected = false; 
		Mob_x = 1400; 
	} 
	
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
	
	//console.log("Engine: " + Character_x_velocity); 			
	//Character_x_velocity *= 0.9;// friction
	//Character_y_velocity *= 0.9;// friction
	
	
	MoveMob(); 
		// Random mob 
	if(Mob_x >= 1000) {
		RandomNumber(); 
		SpawnEnemy(); 
	}
	
	if (GameWon == true) { 
		MobImage = ""; 
	} 
	
	if(MobImage === "Ketchup") { 		  // Ketchup
						Mob_y = 560; 
						var TestMob = new EnemyObject(Mob_x, Mob_y, Spawn_Sprite(MobImage));						
						FrameNumber = 0;
					}// end of Ketchup
						 
	else if (MobImage === "Rock") {  	  // First Rock 
						Mob_y = 520; 
						var TestMob = new EnemyObject(Mob_x, Mob_y, Spawn_Sprite(MobImage)); 
						FrameNumber = 0; 
					}// end of Rock 
	else if (MobImage === "SecondRock") { // Second Rock 
						Mob_y = 540; 
						var TestMob = new EnemyObject(Mob_x, Mob_y, Spawn_Sprite(MobImage)); 
						FrameNumber = 0; 
					}// end of SecondRock 				
	else if(MobImage === "Pokemon0") { // Pokemon Chikerita, 2 frames. 
					if(FrameNumber != 2) { 
						Mob_y = 560; 
						var TestMob = new EnemyObject(Mob_x, Mob_y, Spawn_Sprite(MobImage)); 
						FrameNumber++; 
					} else { 
						var TestMob = new EnemyObject(Mob_x, Mob_y, Spawn_Sprite(MobImage)); 
						FrameNumber = 0; 
					}
					} // end of Pokemon0	
	else if (MobImage === "Pokemon1") {  // Pokemon Magikarp, 4 frames. 
					if(FrameNumber != 4) { 
						Mob_y = 540; 
						var TestMob = new EnemyObject(Mob_x, Mob_y, Spawn_Sprite(MobImage)); 
						FrameNumber++; 
					} else { 
						var TestMob = new EnemyObject(Mob_x, Mob_y, Spawn_Sprite(MobImage)); 
						FrameNumber = 0; 
					}
					} // end of Pokemon1 
					
	else if (MobImage === "Pokemon2") {  // Pokemon Cubone, 5 frames. 
					if(FrameNumber != 5) { 
						Mob_y = 540; 
						var TestMob = new EnemyObject(Mob_x, Mob_y, Spawn_Sprite(MobImage)); 
						FrameNumber++; 
					} else { 
						var TestMob = new EnemyObject(Mob_x, Mob_y, Spawn_Sprite(MobImage)); 
						FrameNumber = 0; 
					}
					} // end of Pokemon2 

	else if (MobImage === "Pokemon3") {  // Pokemon Caterpie, 9 frames. 
					if(FrameNumber != 9) { 
						Mob_y = 560; 
						var TestMob = new EnemyObject(Mob_x, Mob_y, Spawn_Sprite(MobImage)); 
						FrameNumber++; 
					} else { 
						var TestMob = new EnemyObject(Mob_x, Mob_y, Spawn_Sprite(MobImage)); 
						FrameNumber = 0; 
					}
					} // end of Pokemon3 
	else if (MobImage === "Pokemon4") {  // Pokemon Cyndaquil, 14 frames. 
					if(FrameNumber != 14) { 
						Mob_y = 560; 
						var TestMob = new EnemyObject(Mob_x, Mob_y, Spawn_Sprite(MobImage)); 
						FrameNumber++; 
					} else { 
						var TestMob = new EnemyObject(Mob_x, Mob_y, Spawn_Sprite(MobImage)); 
						FrameNumber = 0; 
					}
					} // end of Pokemon4 
	else if (MobImage === "Pokemon5") {  // Pokemon Haunter , 15 frames. 
					if(FrameNumber != 18) { 
						Mob_y = 380; 
						var TestMob = new EnemyObject(Mob_x, Mob_y, Spawn_Sprite(MobImage)); 
						FrameNumber++; 
					} else { 
						var TestMob = new EnemyObject(Mob_x, Mob_y, Spawn_Sprite(MobImage)); 
						FrameNumber = 0; 
					}
					} // end of Pokemon5 
	else if (MobImage === "Pokemon6") {  // Pokemon Hoppip, 10 frames. 
					if(FrameNumber != 10) { 
						Mob_y = 360; 
						var TestMob = new EnemyObject(Mob_x, Mob_y, Spawn_Sprite(MobImage)); 
						FrameNumber++; 
					} else { 
						var TestMob = new EnemyObject(Mob_x, Mob_y, Spawn_Sprite(MobImage)); 
						FrameNumber = 0; 
					}
					} // end of Pokemon6 
	else if (MobImage === "Pokemon7") {  // Pokemon Jolt , 4 frames. 
					if(FrameNumber != 4) { 
						Mob_y = 520; 
						var TestMob = new EnemyObject(Mob_x, Mob_y, Spawn_Sprite(MobImage)); 
						FrameNumber++; 
					} else { 
						var TestMob = new EnemyObject(Mob_x, Mob_y, Spawn_Sprite(MobImage)); 
						FrameNumber = 0; 
					}
					} // end of Pokemon7 
	else if (MobImage === "Pokemon8") {  // Pokemon Mew, 8 frames. 
					if(FrameNumber != 15) { 
						Mob_y = 240; 
						var TestMob = new EnemyObject(Mob_x, Mob_y, Spawn_Sprite(MobImage)); 
						FrameNumber++; 
					} else { 
						var TestMob = new EnemyObject(Mob_x, Mob_y, Spawn_Sprite(MobImage)); 
						FrameNumber = 0; 
					}
					} // end of Pokemon8

		else if (MobImage === "Pokemon9") {  // Pokemon Pidgey, 25 frames. 
					if(FrameNumber != 25) { 
						Mob_y = 550; 
						var TestMob = new EnemyObject(Mob_x, Mob_y, Spawn_Sprite(MobImage)); 
						FrameNumber++; 
					} else { 
						var TestMob = new EnemyObject(Mob_x, Mob_y, Spawn_Sprite(MobImage)); 
						FrameNumber = 0; 
					}
					} // end of Pokemon9
		else if (MobImage === "Pokemon10") {  // Pokemon Snorlax, 10 frames. 
					if(FrameNumber != 10) { 
						Mob_y = 480; 
						var TestMob = new EnemyObject(Mob_x, Mob_y, Spawn_Sprite(MobImage)); 
						FrameNumber++; 
					} else { 
						var TestMob = new EnemyObject(Mob_x, Mob_y, Spawn_Sprite(MobImage)); 
						FrameNumber = 0; 
					}
					} // end of Pokemon10
					
		else if (MobImage === "Pokemon11") {  // Pokemon Taros, 8 frames. 
					if(FrameNumber != 8) { 
						Mob_y = 470; 
						var TestMob = new EnemyObject(Mob_x, Mob_y, Spawn_Sprite(MobImage)); 
						FrameNumber++; 
					} else { 
						var TestMob = new EnemyObject(Mob_x, Mob_y, Spawn_Sprite(MobImage)); 
						FrameNumber = 0; 
					}
					} // end of Pokemon11
					
	else if (MobImage === "Pokemon12") {  // Pokemon vaporeon, 28 frames. 
					if(FrameNumber != 28) { 
						Mob_y = 570; 
						var TestMob = new EnemyObject(Mob_x, Mob_y, Spawn_Sprite(MobImage)); 
						FrameNumber++; 
					} else { 
						var TestMob = new EnemyObject(Mob_x, Mob_y, Spawn_Sprite(MobImage)); 
						FrameNumber = 0; 
					}
					} // end of Pokemon12
	
	
	// Now to display the character. 
	Character.display(); 

	TestMob.display();


	
	
	Character.collison(TestMob); 
	
	
	// Calling a counter to slow down the animation. 		
	if (counter%2 == 0) { 
	// increasing the frame every second. 
	engine_Frame++;  	
	} 
	// adding the counter. 
	counter++; 
	} 
}