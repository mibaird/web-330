/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Michelle Baird
  Date: December 6, 2025
  Filename: script.js
*/

"use strict";

// Define an array of chef objects
let chefs = [
  {
    name: "Chef Michelle",
    specialty: "Southern Cuisine",
    weakness: "Rude customers make her cry",
    restaurantLocation: "Boring, Oregon"
  },

  {
    name: "Chef Jeff",
    specialty: "Ramen Noodles with Hot Dogs",
    weakness: "Argues with others for not seeing his hotdog visions",
    restaurantLocation: "Hell, Michigan"
  },

  {
    name: "Chef Caleb",
    specialty: "Macaroni and Cheese",
    weakness: "Adds Takis and hot sauce to Everything",
    restaurantLocation: "Why, Arizona"
  }
];

// Failure helper
function shouldFail () {
  return Math.random () <.3;
}

// Define a function to retrieve the first chef's information
function retrieveChef1() {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail()) {
        reject("Error: Failed to retrieve Chef 1's data.");
      } else {
        resolve(chefs[0]);
      }
    }, 2000);
  });
}

// Define a function to retrieve the second chef's information
function retrieveChef2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail()) {
        reject("Error: Failed to retrieve Chef 2's data.");
      } else {
        resolve(chefs[1]);
      }
    }, 3000);
  });
}

// Define a function to retrieve the third chef's information
function retrieveChef3() {
 return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail()) {
        reject("Error: Failed to retrieve Chef 3's data.");
      } else {
        resolve(chefs[2]);
      }
    }, 4000);
  });
}

// Use Promise.allSettled to retrieve all chefs' information and update the webpage accordingly
Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()])
  .then((results) => {
    // results[0] -> Chef 1, results[1] -> Chef 2, results[2] -> Chef 3
    results.forEach((result, index) => {
      const chefId = "chef" + (index + 1);       // "chef1", "chef2", "chef3"
      const container = document.getElementById(chefId);

      // Clear anything that might already be there
      container.innerHTML = "";

      if (result.status === "fulfilled") {
        // The promise resolved successfully, show chef data
        const chef = result.value;

        // Create elements to display the chef info
        const heading = document.createElement("h2");
        heading.textContent = chef.name;

        const specialtyP = document.createElement("p");
        specialtyP.textContent = "Specialty: " + chef.specialty;

        const weaknessP = document.createElement("p");
        weaknessP.textContent = "Weakness: " + chef.weakness;

        const locationP = document.createElement("p");
        locationP.textContent = "Location: " + chef.restaurantLocation;

        // Add elements to the container
        container.appendChild(heading);
        container.appendChild(specialtyP);
        container.appendChild(weaknessP);
        container.appendChild(locationP);
      } else {

        // Promise was rejected. Show an error message
        const heading = document.createElement("h2");
        heading.textContent = "Chef " + (index + 1);

        const errorP = document.createElement("p");
        errorP.className = "error-message";
        errorP.textContent = result.reason;

        container.appendChild(heading);
        container.appendChild(errorP);
      }
    });
  })

  .catch((error) => {
    const errorDiv = document.getElementById("error");
    errorDiv.hidden = false;
    errorDiv.textContent = "An unexpected error occurred: " + error;
    console.error(error);
  });
