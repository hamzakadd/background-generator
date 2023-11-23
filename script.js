var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

//color1 = rgb(0, 255, 0)
//color2 = rgb(255, 0, 0)

body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

css.textContent = body.style.background + ";";
var randomColor;

button.addEventListener("click", function(){
	var randomNumber1 = Math.floor(Math.random()*16777215).toString(16);
	var randomNumber2 = Math.floor(Math.random()*16777215).toString(16);
	// console.log(randomNumber1);
	// console.log(randomNumber2);
	var randomColor1 = '#'+randomNumber1;
	var randomColor2 = '#'+randomNumber2;

	color1.value = randomColor1; 
	color2.value = randomColor2;

	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
})

color1.value = randomColor; 

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}





color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);