"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Michelle Baird
      Date:   November 30,2025

      Filename: project11-02.js
*/

window.addEventListener("load", function() {

// Page objects
let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

//Run when the user leaves Postal Code box
postalCode.onblur = function() {

 // Get the current values
    let codeValue    = postalCode.value;
    let countryValue = country.value;

// Clear previous results
    place.value  = "";
    region.value = "";

  // Fetch from the Zippopotam API http://api.zippopotam.us/country/code
  fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)

  // Parse JSON response
    .then(response => response.json())
    // e. Use json to fill place and region
    .then(json => {
      place.value  = json.places[0]["place name"];
      region.value = json.places[0]["state abbreviation"];
    })

    // Log any errors
      .catch(error => console.log(error));
   };

});




