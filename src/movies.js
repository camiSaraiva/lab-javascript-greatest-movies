// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {
    const justDirects = moviesArray.map((movie) => movie.director);
    return justDirects;
};


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) { 

    const justSteven = moviesArray.filter((movies) => movies.director === 'Steven Spielberg' && movies.genre.includes("Drama"));
        return justSteven.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) {
        return 0;
    } else{
    const result = 
    moviesArray.reduce((acc, val) => {
        return acc + val.score;
      }, 0) / moviesArray.length;
      return Math.round(result*100)/100;
    }
};

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0) {
      return 0;
    } else if (
      moviesArray.filter((movie) => movie.genre.includes("Drama")).length === 0
    ) {
      return 0;
    } else {
      let isDrama = moviesArray.filter((movie) => movie.genre.includes("Drama"));
      const avgScore =
        isDrama.reduce((acc, val) => {
          return acc + val.score;
        }, 0) / isDrama.length;
      return avgScore;
    }
  };

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
