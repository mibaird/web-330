"use strict";
/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Michelle Baird
  Date: November, 17, 2025
  Filename: script.js
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  // Add your table objects here
  { tableNumber: 1, capacity: 2, isReserved: false },
  { tableNumber: 2, capacity: 4, isReserved: false },
  { tableNumber: 3, capacity: 6, isReserved: false },
  { tableNumber: 4, capacity: 2, isReserved: false },
  { tableNumber: 5, capacity: 4, isReserved: false },
  { tableNumber: 6, capacity: 6, isReserved: false },
  { tableNumber: 7, capacity: 2, isReserved: false },
  { tableNumber: 8, capacity: 4, isReserved: false }
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {

// Find table in the array
const table = tables.find(function (t) {
  return t.tableNumber === tableNumber;
});

// If table is not found
if (!table) {
  callback("Error: That table does not exist.");
  return; // stop the function
}

// If table is already reserved
if (table.isReserved) {
  callback("Error: Table " + tableNumber + " is already reserved.");
  return;
}

// Reserve table
table.isReserved = true;
console.log("Reserving table " + tableNumber + "...");

// Waiting time then callback
setTimeout(function () {
  const message = "Success: Table " + tableNumber + " has been reserved.";
  callback(message);
}, time);

}

// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get the form values
    const nameInput = document.getElementById("name");
    const tableInput = document.getElementById("tableNumber");
    const messageElem = document.getElementById("message");

    const name = nameInput.value;
    const tableNumber = parseInt(tableInput.value, 10);

    // Check for missing info
    if (!name || isNaN(tableNumber)) {
      messageElem.textContent = "Please enter your name and a table number.";
      messageElem.className = "error";
      return;
    }

    // Call reserveTable with a callback
    reserveTable(
      tableNumber,
      function (resultMessage) {
        if (resultMessage.startsWith("Success")) {
          messageElem.textContent =
            resultMessage + " Reservation under the name " + name + ".";
          messageElem.className = "success";
        } else {
          messageElem.textContent = resultMessage;
          messageElem.className = "error";
        }
      }, 3000 // time in milliseconds (3 seconds)
    );

  });
