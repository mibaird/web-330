/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Michelle Baird
  Date: December 12, 2025
  Filename: script.js
*/

"use strict";

const movies = [
  // Add your movie objects here
   {title: "A Christmas Story",
    director: "Bob Clark",
    year: 1983,
    synopsis: "Ralphie Parker dreams of getting a Red Ryder BB gun for Christmas. Between bullies, flat tires, and pink bunny pajamas he discovers Christmas doesn't always go as planned but is still memorable"
  },

  {
    title: "Christmas Vacation",
    director: "Jeremiah S. Chechik",
    year: 1989,
    synopsis: "Clark Griswold has dreams of hosting a big family Christmas celebration, but his vision hilariously falls apart the harder he tries, especially when family arrives."
  },

  {
    title: "Elf",
    director: "Jon Favreau",
    year: 2003,
    synopsis: "Buddy realizes he is a human raised by elves at the North Pole, so he sets out for New York City to find his real father. Through his comical misadventures, he shows everyone the value of faith, family, and the joy of childlike wonder."
  },

  {
  title: "Home Alone",
  director: "Chris Columbus",
  year: 1990,
  synopsis: "Kevin McCallister is accidentally left home alone for Christmas. Through clever traps and unexpected bravery, he proves that he is not afraid anymore as outsmarts two burglars in a hilarious holiday showdown."
},

{
  title: "How the Grinch Stole Christmas",
  director: "Ron Howard",
  year: 2000,
  synopsis: "The Grinch plans to steal Christmas from the Whos in Whoville, but after a whirlwind of chaos and comedy, an unexpected friendship with Cindy Lou Who teaches him that the true meaning of the season comes from love and kindness. "
}
];

function fetchMovie(title) {
  // Implement this function
  return new Promise((resolve, reject) => {

     setTimeout(() => {

      // Find the movie in the array
      const movie = movies.find(movie =>
        movie.title.toLowerCase() === title.trim().toLowerCase()
      );

      if (movie) {
        // Promise fulfilled
        resolve(movie);
      } else {
        // Promise rejected
       reject(`"${title}" isn't on Michelle's Top 5 list, but good guess! Want to try again?`);
      }
    }, 1000);
  });
}

document.getElementById("movie-form").addEventListener("submit", async (event) => {

  event.preventDefault();

  // Implement this function
  const title = document.getElementById("title-input").value;
  const movieTitle = document.getElementById("movie-title");
  const movieDirector = document.getElementById("movie-director");
  const movieYear = document.getElementById("movie-year");
  const movieSynopsis = document.getElementById("movie-synopsis");
  const errorMessage = document.getElementById("error-message");

  // Clear previous data
  movieTitle.textContent = "";
  movieDirector.textContent = "";
  movieYear.textContent = "";
  movieSynopsis.textContent = "";
  errorMessage.textContent = "";

  try {
    // Await the movie data
    const movie = await fetchMovie(title);

    movieTitle.textContent = movie.title;
    movieDirector.textContent = `Director: ${movie.director}`;
    movieYear.textContent = `Year: ${movie.year}`;
    movieSynopsis.textContent = movie.synopsis;

  } catch (error) {
    // Handle errors
    errorMessage.textContent = error;
  }
});