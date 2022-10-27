var randomNumber1=Math.floor(Math.random()*6+1);
var diceImagesource="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",diceImagesource);

var randomNumber2=Math.floor(Math.random()*6+1);
var diceImagesource2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",diceImagesource2);

if(randomNumber1>randomNumber2){
  document.getElementsByTagName("h1")[0].innerHTML="🎉Player 1wins!";
} else if (randomNumber1<randomNumber2) {
  document.getElementsByTagName("h1")[0].innerHTML="🎉Player 2wins!";
} else if (randomNumber1===randomNumber2) {
  document.getElementsByTagName("h1")[0].innerHTML="Match Draw!";
}
