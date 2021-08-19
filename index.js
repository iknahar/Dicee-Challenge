
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let imageOfPlayerOne = "images/dice" + randomNumber1 + ".png";
let imageOfPlayerTwo = "images/dice" + randomNumber2 + ".png";

document.getElementsByTagName("img")[0].setAttribute("src", imageOfPlayerOne);
document.getElementsByTagName("img")[1].setAttribute("src", imageOfPlayerTwo);

if (randomNumber1 > randomNumber2) {
    document.getElementsByTagName('h1')[0].innerText = "🚩Player 1 Won"
}

else if (randomNumber2 > randomNumber1) {
    document.getElementsByTagName('h1')[0].innerText = "Player 2 Won🚩"
}

else {
    document.getElementsByTagName('h1')[0].innerText = "Refresh 🔄"
}