

function start(){
	engine(0);
}


///////////////////////////////// BACKGROUND ////////////////////////////////////////////////

function background(){
	var scene = document.getElementById('scene');
	var sketch = scene.getContext("2d");
	
	sketch.beginPath();
	sketch.drawImage(street, 0, 0);
	sketch.closePath();
}

function clearing(){
	var scene = document.getElementById('scene');
	var sketch = scene.getContext("2d");
	
	sketch.beginPath();
	sketch.clearRect(0, 0, scene.width, scene.height);
	sketch.closePath();
}



///////////////////////////////// GAME OBJECTS /////////////////////////////////////////////

function heroSprite(mode){
	if(mode == "move"){
		if(hero_face == "right"){
			return heroright;
		}
		else{
			return heroleft;
		}
	}
	else if(mode == "attack"){
		if(hero_face == "right"){
			return herohitright;
		}
		else{
			return herohitleft;
		}
	}
	else if(mode == "down"){
		if(hero_face == "right"){
			return herodownright;
		}
		else{
			return herodownleft;
		}
	}
}

function badguySprite(mode){
	if(mode == "move"){
		if(badguy_face == "right"){
			return badguyright;
		}
		else{
			return badguyleft;
		}
	}
	else if(mode == "attack"){
		if(badguy_face == "right"){
			return badguyhitright;
		}
		else{
			return badguyhitleft;
		}
	}
	else if(mode == "down"){
		if(badguy_face == "right"){
			return badguydownright;
		}
		else{
			return badguydownleft;
		}
	}
}

function character(x, y, sprite, mode, face){
	this.x = x;
	this.y = y;
	this.sprite = sprite;
	this.mode = mode;
	this.face = face;
	this.stillDown = false;
	
	if(this.stillDown){
		this.mode = "down";
	}
	else{
		this.mode = "move";
	}

	
	this.display = function(){
		var scene = document.getElementById('scene');
		var sketch = scene.getContext("2d");
		
		sketch.beginPath();
		sketch.drawImage(this.sprite, this.x, this.y);
		sketch.closePath();
	}
	
	this.assault = function(other){
		var punch_x;
		var punch_y;
		var otherTop;
		var otherLeft;
		var otherRight;
		var otherBottom;
		if(other.face == "left"){
			punch_x = this.x + 85;
			punch_y = this.y + 45;
			otherTop = other.y + 40;
			otherLeft = other.x + 44;
			otherRight = other.x + 82;
			otherBottom = other.y + 85;
			
		}
		else{
			punch_x = this.x + 20;
			punch_y = this.y + 45;
			otherTop = other.y + 40;
			otherLeft = other.x + 20;
			otherRight = other.x + 53;
			otherBottom = other.y + 85;
		}
		if(punch_x > otherLeft && punch_x < otherRight && punch_y > otherTop && punch_y < otherBottom){
			other.mode = "down";
			other.stillDown = true;
			setTimeout(function(){other.stillDown = false; badguy_mode = "move"; hero_mode = "move";}, 1500);// he's not getting back up???
		}
	}
}


function badguyAttack(character, other){
		var punch_x;
		var punch_y;
		var otherTop;
		var otherLeft;
		var otherRight;
		var otherBottom;
		if(other.face == "left"){
			punch_x = character.x + 85;
			punch_y = character.y + 45;
			otherTop = other.y + 40;
			otherLeft = other.x + 44;
			otherRight = other.x + 82;
			otherBottom = other.y + 85;
			
		}
		else{
			punch_x = character.x + 20;
			punch_y = character.y + 45;
			otherTop = other.y + 40;
			otherLeft = other.x + 20;
			otherRight = other.x + 53;
			otherBottom = other.y + 85;
		}
		if(punch_x > otherLeft && punch_x < otherRight && punch_y > otherTop && punch_y < otherBottom){
			var chance = Math.floor(Math.random() * 11);
			if(chance == 5){
				return true;
			}
		}
		else{
			return false;
		}
}




/////////////////////////////////// ENGINE AND CONTROL //////////////////////////////////////

var hero_x = 120;
var hero_y = 230;
var hero_mode = "move";
var hero_face = "right";

var badguy_x = 320;
var badguy_y = 170;
var badguy_mode = "move";
var badguy_face = "left";
var badguy_control = Math.floor(Math.random() * 4);


function engine(control_counter){
	control_counter++;
	var clock = setTimeout(function(){engine(control_counter);}, 50);
	clearing();
	background();
	
	if(hero_y > badguy_y){
		var badguy = new character(badguy_x, badguy_y, badguySprite(badguy_mode),badguy_mode, badguy_face);
		badguy.display();
		
		var hero = new character(hero_x, hero_y, heroSprite(hero_mode), hero_mode, hero_face);
		hero.display();
	}
	else{
		var hero = new character(hero_x, hero_y, heroSprite(hero_mode), hero_mode, hero_face);
		hero.display();

		var badguy = new character(badguy_x, badguy_y, badguySprite(badguy_mode), badguy_mode, badguy_face);
		badguy.display();
	}
	
	
	
	if(hero_mode == "attack"){
		hero.assault(badguy);
		badguy_mode = badguy.mode;
	}
	
	
	if(control_counter%20 == 0){
		badguy_control = Math.floor(Math.random() * 4);
	}
	else{
		if(badguyAttack(badguy, hero)){
			badguy_control = 4;
		}
	}
	
	characterControl(badguy_control);

	if(badguy_mode == "attack"){
		badguy.assault(hero);
		hero_mode = hero.mode;
	}
}


document.onkeydown = function(event){
	var press = String.fromCharCode(event.keyCode);
	if(press == "A" && hero_x > 3){
		hero_face = "left";
		hero_x -= 3;
	}
	else if(press == "S" && hero_y < 300){
		hero_y += 3;
	}
	else if(press == "D" && hero_x < 550){
		hero_face = "right";
		hero_x += 3;
	}
	else if(press == "W" && hero_y > 70){
		hero_y -= 3;
	}
	else if(event.keyCode == 32){
			//spacebar
		hero_mode = "attack";
		setTimeout(function(){hero_mode = "move";}, 250);
	}
}


function characterControl(action){
	//condition to check distance to character, if close 1 in 5 chance of attack
	if(action == 0 && badguy_x > 3){
			//left
		badguy_face = "left";
		badguy_x -= 3;
	}
	else if(action == 1 && badguy_y > 70){
			//up
		badguy_y -= 3;
	}
	else if(action == 2 && badguy_x < 550){
			//right
		badguy_face = "right";
		badguy_x += 3;
	}
	else if(action == 3 && badguy_y < 300){
			//down
		badguy_y += 3;
	}
	else if(action == 4){
			//attack
		badguy_mode = "attack";
		setTimeout(function(){badguy_mode = "move"}, 250);
	}
}




