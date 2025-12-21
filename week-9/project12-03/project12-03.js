"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Michelle Baird
      Date:   December 18, 2025

      Filename: project12-03.js
*/

$("article > h2").click(function() {

    // Step 4a: heading = the clicked h2
    let heading = $(this);

    // Step 4b: list = the next sibling element (ul or ol)
    let list = heading.next();

    // Step 4c: headingImage = the img inside the h2
    let headingImage = heading.children("img");

    // Step 5: toggle the list with slide effect
    list.slideToggle(500);

    // Step 6: check the current symbol and switch it
    let currentSrc = headingImage.attr("src");

    if (currentSrc === "plus.png") {
        headingImage.attr("src", "minus.png");
    } else {
        headingImage.attr("src", "plus.png");
    }

});

