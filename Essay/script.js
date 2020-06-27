


/*******************************************
*										   *
*	Global Variables for The buttons  	   *
*******************************************/ 
 var x = document.getElementById("Intro_div");
 var HeaderID = document.getElementsByTagName("h2");
 var Paragraph = document.getElementsByTagName("p");
 var SourcesTags = document.getElementsByTagName("p2"); 
 var SourcesSites = document.getElementsByTagName("p3"); 

 /******************************************
*										   *
*	Function to hide or display elements   *
*******************************************/ 

function HideElement() { 
  if (x.style.display === "none") {
	
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

/*******************************************
*										   *
*			Obtaining the div's   	       *
*******************************************/ 
Intro = document.getElementById("Intro_div");
History = document.getElementById("History_div");
Script = document.getElementById("Script_div");
Server = document.getElementById("Server_div");
JavaScript = document.getElementById("JavaScript_div");
Conclusion = document.getElementById("Conclusion_div");
Sources = document.getElementById("Sources_div");

/***********************************************
*										       *
* Function to display or hide all elements.    *
***********************************************/ 

function Display_All() { 
Intro.style.display = "block"; 
History.style.display = "block"; 
Script.style.display = "block"; 
Server.style.display = "block"; 
JavaScript.style.display = "block"; 
Conclusion.style.display = "block"; 
Sources.style.display = "block"; 


} 

function Hide_All() { 
Intro.style.display = "none"; 
History.style.display = "none"; 
Script.style.display = "none"; 
Server.style.display = "none"; 
JavaScript.style.display = "none"; 
Conclusion.style.display = "none"; 
Sources.style.display = "none"; 

}  

/*******************************************
*										   *
*				Listener Functions 		   *
*******************************************/ 

if (HeaderID[0].addEventListener) {
        HeaderID[0].addEventListener("click", Intro_Hide_Display, false);
    } else {
        HeaderID[0].attachEvent('onclick', Intro_Hide_Display);
    }  
	
if (HeaderID[1].addEventListener) {
        HeaderID[1].addEventListener("click", History_Hide_Display, false);
    } else {
        HeaderID[1].attachEvent('onclick', History_Hide_Display);
    }  
	
if (HeaderID[2].addEventListener) {
        HeaderID[2].addEventListener("click", Script_Hide_Display, false);
    } else {
        HeaderID[2].attachEvent('onclick', Script_Hide_Display);
    }

if (HeaderID[3].addEventListener) {
        HeaderID[3].addEventListener("click", Server_Hide_Display, false);
    } else {
        HeaderID[3].attachEvent('onclick', Server_Hide_Display);
    }  

if (HeaderID[4].addEventListener) {
        HeaderID[4].addEventListener("click", JS_Hide_Display, false);
    } else {
        HeaderID[4].attachEvent('onclick', JS_Hide_Display);
    }  

if (HeaderID[5].addEventListener) {
        HeaderID[5].addEventListener("click", Conclusion_Hide_Display, false);
    } else {
        HeaderID[5].attachEvent('onclick', Conclusion_Hide_Display);
    }  	
	
if (HeaderID[6].addEventListener) {
        HeaderID[6].addEventListener("click", Sources_Hide_Display, false);
    } else {
        HeaderID[6].attachEvent('onclick', Sources_Hide_Display);
    }  	
	
/*******************************************
*										   *
*		Functions that call HideElement    *
*******************************************/ 
	
function Intro_Hide_Display() { 
x = document.getElementById("Intro_div");  
HideElement(); 
} 
function History_Hide_Display() { 
x = document.getElementById("History_div"); 
HideElement(); 
} 
 function Script_Hide_Display() { 
x = document.getElementById("Script_div");
HideElement(); 
} 
 function Server_Hide_Display() { 
x = document.getElementById("Server_div");   
HideElement(); 
} 
 function JS_Hide_Display() { 
x = document.getElementById("JavaScript_div");  
HideElement(); 
} 
 function Conclusion_Hide_Display() { 
x = document.getElementById("Conclusion_div"); 
HideElement(); 
}
 function Sources_Hide_Display() { 
x = document.getElementById("Sources_div"); 
HideElement(); 
}

/*******************************************
*										   *
*  Setting the P tags to equal the essay   *
*******************************************/ 

Paragraph[0].innerHTML = "On January 2019th it was recorded that over 4.4 billion people across the world were active internet users (Global digital population as of January 2019 (in millions), 2019). With so many people using the internet and features on the internet that includes activities such as banking, checking emails, use of social media websites, shopping and more, you might wonder how does the internet work under the hood? What are the differences between programming languages and scripts? And what is Javascript? In this essay, those questions will be answered and more."; 
Paragraph[1].innerHTML = "In 1883 a woman named Ada loveace with her college Charles Baddage worked a computer called the Analytical engine. As Baddage entered numbers and symbols into the machine, loveace saw that the numbers he inputted could represent more and went on to create an algorithm for the engine to make more features that would be used by the engine (A History of Computer Programming Languages, 2019). This became the very first programing language, with different needs and requirements in the next years, more languages followed soon after. In 1972 nearly one hundred years later a man named Dennis Ritchie created the programming language known as C. He created it so an operating system known as Unix. This programming language later became one of the first high-level operating systems of the time. During the time of these programming languages being created, scripts were also created but what is a script and how did it become so different to a programming language  (A History of Computer Programming Languages, 2019)? "; 
Paragraph[2].innerHTML = "Scripts alongside programming language is a serious of instructions that a programmer creates to have the computers or systems do a series of events. All scripts are programming languages, the only difference between the two is that a scripting language does not require compilation and are rather interpreted.  When a person creates a program, they use a programming language, they will then compile the program also known as start. When the computer compiles the code, the machine will read and analyze the code only once then report any errors to the users. An interpreter will instead read the code that is provided, repeatedly run the code continuously until a specific condition is met or an error causes the program to crash.  (What’s the difference between Scripting and Programming Languages?, 2019). Today most users will never see how scripts are used and many scripts are used in the background to repeat certain actions over and over without the user ever knowing. One example of a script can be found in video games that keep track of the current time to display a sun or moon to the user. Most scripts are used on websites though to make them environment rich-sites, allowing the user to preform various actions on the website in which the website will respond based on the action done. Once scripts found their way to the internet they quickly became divided into two categories, client-side scripting and server-side scripting."; 
Paragraph[3].innerHTML = "When a user logs into their email, programs or onto a website, the creators of the service might decide to use something called server-side scripting. Server-side scripting is used when a server is used to perform various scripts to allow the programs or website to work. Many websites will use Server-side scripting to store data into their databases when a user enters in their data. Server side scripting will most likely be invisible to the user at all times when they are using the website. A common use for Server-Side Scripting to when a user plays a video game, all the files that were used to create the game are stored on the game creator’s system, allowing the game creators the ability to edit the files and content and only having the user update their game to the current files. Some files may be stored on the user’s computer to allow different features, this is known as Client-side Scripting. One of the most commonly used Client-side scripts is a scripting language known as JavaScript. JavaScript is found on websites beside the language known as HTML which is the language a large majority of websites on the internet are created from. JavaScript is used on websites to make the website function based upon the user’s requirements. When a user enters data into a textbox, a portion of Javascript code will run and display the results to the user based on the information they entered."; 
Paragraph[4].innerHTML = "According to Mind fire Solutions, over 94.5% of all websites use JavaScript, but where did this powerful scripting language come from (How important is JavaScript for Modern Web Developers?, 2017)? The year was 1995 when the business known as Netscape Communications Corporation had a strong presence in the young internet world. With its browser, Netscape Communicator the company was gaining popularity fast, with money and independence they decided to seek a new way to make their websites more dynamic and unique to its competitor NCSA Mosaic. Netscape needed a solution to make their websites work with animations, interactions from the user and other forms of automatic functions. The company soon created a software known as Mocha, a simple language with dynamic features and was accessible to non-developers. During the time of Mocha creation, the programming language known as Java started becoming a large programming language for big, professional companies, Brendan Eich, father of JavaScript saw an opportunity that changed the entire company. The idea at the time was that Java’s audience didn’t include the amateur scripters, designers and creators. Since Mocha’s language was still new, it could interest the audience that Java couldn’t and was meant to work beside Java. In December 1995 the programming language known as Mocha went on to be renamed LiveScript and later Javascript to piggy back on the popularity of Java. Due to JavaScript’s prototype-based Object Model it quickly skyrocketed past its competitors. Many features would soon be updated to the scripting language such as Anonymous function and prototype chains, many websites sooner or later started using Javascript as a standard due to its features compared to its competitors making it one of the most used languages in the world."; 
Paragraph[5].innerHTML = "With over 4.4 billion people using the internet and more online everyday the power of scripting languages continues to improve. Thanks to the work that ada loveace and Charles Baddage made on their project in 1883, skyrocketed the use of computers and allowed many languages we use today to be created. While the difference between script and programming languages becomes harder to tell apart daily, and the advancements of client side and Server-side scripting, one scripting language that will surely be one to stay for years to come is JavaScript "; 


/*******************************************
*										   *
*	Setting the Sources to equal variables *
*******************************************/ 

// Setting the website sources. 
var Source1 = "A History of Computer Programming Languages. (2019, 4 16). Retrieved from onlinecollegeplan: <br>  " ; 
var Source2 = "Global digital population as of January 2019 (in millions). (2019, January 31). Retrieved from statista: "; 
var Source3 = "How important is JavaScript for Modern Web Developers? (2017, June 26). Retrieved from medium: ";
var Source4 = "What’s the difference between Scripting and Programming Languages? (2019, 4 16). Retrieved from geeksforgeeks: "; 
 
 // Setting the website sources websites. 
var SourceSite1 = "https://www.onlinecollegeplan.com/computer-programming-languages/";  
var SourceSite2 = "https://www.statista.com/statistics/617136/digital-population-worldwide/"; 
var SourceSite3 = "https://medium.com/@mindfiresolutions.usa/how-important-is-javascript-for-modern-web-developers-2854309b9f52"; 
var SourceSite4 = "https://www.geeksforgeeks.org/whats-the-difference-between-scripting-and-programming-languages/"; 
 
 
 // Setting the paragraph tags and the sources. 
SourcesTags[0].innerHTML = Source1 + ""; 
SourcesSites[0].innerHTML = SourceSite1 + "  "; 
  
SourcesTags[1].innerHTML = Source2 + " "; 
SourcesSites[1].innerHTML = SourceSite2 + "  "; 
 
SourcesTags[2].innerHTML = Source3 + " "; 
SourcesSites[2].innerHTML = SourceSite3 + "  "; 
 
SourcesTags[3].innerHTML = Source4 + " "; 
SourcesSites[3].innerHTML = SourceSite4 + " "; 
