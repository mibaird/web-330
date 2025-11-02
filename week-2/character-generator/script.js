/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Michelle Baird
  Date: October 30, 2025
  Filename: script.js
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  return {
    getName: function() {
      return name;
    },
    getGender: function() {
      return gender;
    },
    getClass: function() {
      return characterClass;
    }
  };
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  const name = document.getElementById("heroName").value;
  const gender = document.getElementById("heroGender").value;
  const characterClass = document.getElementById("heroClass").value;

  const hero = createCharacter (name, gender, characterClass)

document.getElementById("characterOutput").innerHTML =
    "<p><strong>Name:</strong> " + hero.getName() + "</p>" +
    "<p><strong>Gender:</strong> " + hero.getGender() + "</p>" +
    "<p><strong>Class:</strong> " + hero.getClass() + "</p>";

});