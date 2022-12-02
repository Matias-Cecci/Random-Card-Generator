/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let cardNumber = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let cardSuit = ["♦", "♥", "♠", "♣"];

  let number = document.querySelector("#number");
  number.style.fontSize = "150px";
  let suit = document.querySelectorAll(".suit");

  let randomNumberIndex = Math.floor(Math.random() * cardNumber.length);
  number.innerHTML = cardNumber[randomNumberIndex];

  let randomSuitIndex = Math.floor(Math.random() * cardSuit.length);
  for (let i = 0; i < suit.length; i++) {
    if (randomSuitIndex <= 1) {
      suit[i].style.color = "red";
    }

    suit[i].innerHTML = cardSuit[randomSuitIndex];
    suit[i].style.fontSize = "100px";
  }
};

// Agregar = si sale la carta ya no pueda salir
// agregar el boton
// agregar que si sale la ultima carta me diga no hay mas cartas
