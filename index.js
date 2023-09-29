let hasRefreshed = sessionStorage.getItem("key");

function rolldice() {
  if (hasRefreshed == 1) {
    var randomNumber1 = Math.round(Math.random() * 6 + 1);
    var randomNumber2 = Math.round(Math.random() * 6 + 1);

    var img1 = "images/dice" + randomNumber1 + ".png";
    var img2 = "images/dice" + randomNumber2 + ".png";

    document.querySelector(".dice .img1").setAttribute("src", img1);
    document.querySelector(".dice .img2").setAttribute("src", img2);

    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "Player 1 wins";
    } else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1").innerHTML = "Player 2 wins";
    } else {
      document.querySelector("h1").innerHTML = "Draw";
    }
  } else {
    sessionStorage.setItem("key", "1");
  }
}
window.onload = rollTheDice();
