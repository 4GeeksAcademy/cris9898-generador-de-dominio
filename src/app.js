/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let pronouns = ["the", "our"];
let adjs = ["great", "big"];
let nouns = ["jogger", "racoon"];
let exts = [".com", ".net", ".us", ".io"];
let dominios = document.getElementById("dominios");

window.onload = function() {
  //write your code here
  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let ext of exts) {
          dominios.innerHTML += pronoun + adj + noun + ext + "<br>";
        }
      }
    }
  }
};
