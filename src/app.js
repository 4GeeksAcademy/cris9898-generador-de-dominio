/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let pronouns = ["the", "our"];
let adjs = ["great", "big"];
let nouns = ["jogger", "racoon"];
let dominios = document.getElementById("dominios");

window.onload = function() {
  //write your code here
  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        console.log(pronoun + adj + noun + ".com");
        dominios.innerHTML += pronoun + adj + noun + ".com";
      }
    }
  }
};
