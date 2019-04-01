//variables
var gameOver = false;
var winningScore = 5;


//limiter
var limiter = document.querySelector(".quantity");
var trash = document.querySelector("#trash");
var trash2 = document.querySelector("#trash2");
var scoreDisplay = document.querySelector("#scoredisplay")
limiter.addEventListener("change", function(){
	scoreDisplay.textContent = limiter.value;
	winningScore = Number(limiter.value) ;
	reset1();
})
trash.addEventListener("click", function(){
	scoreDisplay.textContent = limiter.value;
	winningScore = Number(limiter.value) ;
	reset1();
})
trash2.addEventListener("click", function(){
	scoreDisplay.textContent = limiter.value;
	winningScore = Number(limiter.value) ;
	reset1();
})


//player1button
var playerOneScore = document.querySelector("#player1");
var button1 = document.querySelector("#player1b");
var p1score = 0;

button1.addEventListener("click", increment);

function increment() {
	if (!gameOver) {
		p1score++;                                          //limiter logic
		if (p1score === winningScore) {
			playerOneScore.textContent = Number(playerOneScore.textContent) + 1;
			playerOneScore.classList.add("winner");
			gameOver = true;
			addScore();	
		}
		playerOneScore.textContent = p1score;
	}
	
}

//player2button
var playertwoScore = document.querySelector("#player2");
var button2 = document.querySelector("#player2b");
var p2score = 0;

button2.addEventListener("click", increment2);

function increment2() {
	if (!gameOver) {
		p2score++;
		if (p2score === winningScore) {
			playertwoScore.textContent = Number(playertwoScore.textContent) + 1;
			playertwoScore.classList.add("winner");
			gameOver = true;
			addScore();	
		}
		playertwoScore.textContent = p2score;
	}
}

//resetbutton
var resetbutton = document.querySelector("#reset");

resetbutton.addEventListener("click", reset);

function reset() {
	playerOneScore.textContent = 0;
	playertwoScore.textContent = 0;
	gameOver = false;
	p1score = 0;
	p2score = 0;
	playertwoScore.classList.remove("winner");
	playerOneScore.classList.remove("winner");
	limiter.value = " ";
}

function reset1() {
	playerOneScore.textContent = 0;
	playertwoScore.textContent = 0;
	gameOver = false;
	p1score = 0;
	p2score = 0;
	playertwoScore.classList.remove("winner");
	playerOneScore.classList.remove("winner");
}

//add score history
var h1 = document.querySelector("h1");
var ul1 = document.querySelector("ul");
function addScore() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(h1.textContent));
  li.setAttribute("id", "element4"); // added line
  ul1.appendChild(li);
}

function removeScore() {
	ul1.innerHTML = " ";
	reset();
}

var removeb = document.querySelector("#Remove");
removeb.addEventListener("click", removeScore);