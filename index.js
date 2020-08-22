var randomNumber1 = Math.floor(Math.random(randomNumber1)*6)+1;

var randomDiceImage ="images/dice"+randomNumber1+".png";

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src",randomDiceImage);

var randomNumber2 = Math.floor(Math.random(randomNumber2)*6)+1;

var randomDiceImages ="images/dice"+randomNumber2+".png";

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src",randomDiceImages);

var heading = document.querySelector("h1");


if(randomNumber1>randomNumber2){
  heading.textContent="🚩Player 1  Wins";
}else if (randomNumber1<randomNumber2) {
  heading.textContent="Player 2 Wins🚩";

}else{
  heading.textContent="Draw!"
}
