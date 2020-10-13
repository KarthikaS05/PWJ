/**
 * DONE (12/Oct/2020): Change sortMoviesByRank() function to sort movies list by rank
 * DONE (12/Oct/2020): Sort movies by id, rank, and title through dynamic function
 * string order ABCD....-> greater; A<Z; cccca>cccc; extra a is a point more hence true
 * DONE (12/Oct/2020): Create helper function called getMaxMovieObject() for finding max movie
 */

// List of movies
let movies = [
  {
    title: "Fight Club",
    rank: 10,
    id: "tt0137523",
  },
  {
    title: "The Shawshank Redemption",
    rank: 1,
    id: "tt0111161",
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    rank: 9,
    id: "tt0167260",
  },
  {
    title: "The Godfather",
    rank: 2,
    id: "tt0068646",
  },
  {
    title: "The Good, the Bad and the Ugly",
    rank: 5,
    id: "tt0060196",
  },
  {
    title: "The Godfather: Part II",
    rank: 3,
    id: "tt0071562",
  },
  {
    title: "The Dark Knight",
    rank: 6,
    id: "tt0468569",
  },
  {
    title: "Pulp Fiction",
    rank: 4,
    id: "tt0110912",
  },
  {
    title: "Schindler's List",
    rank: 8,
    id: "tt0108052",
  },
  {
    title: "12 Angry Men",
    rank: 7,
    id: "tt0050083",
  },
];

window.onload = function () {
  // Display Movies list
  //let moviesByRank = sortMoviesByRank(movies);
  let moviesByAttr = sortMoviesByAttr(movies, 'id');
  displayMovies(moviesByAttr);
};

/**
 * Display list of movies in a table
 * You don't have to worry so much about this
 */
function displayMovies(movies) {
  let table = "<table border='1' style='width: 100%'>";
  table += "<tr><th>ID</th><th>Name</th><th>Rank</th></tr>";
  for (let index = 0; index < movies.length; index++) {
    table += "<tr>";
    table += "<td>" + movies[index].id + "</td>";
    table += "<td>" + movies[index].title + "</td>";
    table += "<td>" + movies[index].rank + "</td>";
    table += "</tr>";
  }
  // Close the table
  table += "</table>";
  document.getElementById("movies-list").innerHTML = table;
}

/**
 * Sort movies by rank from greatest to smallest
 * HINT: make sure you are comparing the right value in in if(...)
 * HINT: replace numbers with movies .
 */
function sortMoviesByRank(movies) {
  // Code from previous sortBestRatingsFirst() function
  for (let j = 0; j < movies.length - 1; j++) {
    let maxRankMovie = movies[j]; //movie obj
    let maxRankPos = j;

    for (let i = j; i < movies.length; i++) {
      if (movies[i].rank > maxRankMovie.rank) {
        // Know max AND it's index (location)
        maxRankMovie = movies[i];
        maxRankPos = i;
      }
    }
    // swap the first and the biggest
    // numbers[max_location] = numbers[j]; // --> 10
    //numbers[j] = max_num;
    movies[maxRankPos] = movies[j];
    movies[j] = maxRankMovie;
  }

  return movies;
}

/**
 * Sort movies by an attribute
 * @param sortAttr pass in 'id', 'title', or 'rank' to sort by
 */
function sortMoviesByAttr(movies, sortAttr) {
  // CODE GOES HERE
  for (let i = 0; i < movies.length - 1; i++) {
    let max = getMaxMovieObject(movies, i, sortAttr);
    let maxMovie = max["max_movie"];//max.max_movie
    let maxPos = max["max_index"];//max.max_index
    /*let max_obj = movies[i];
        let max_pos = i;
        for (let j = i; j < movies.length; j++){
            //Why we cannot give movies[j].sortAttr is because it searches for the sortAttr attr in the obj
             // instead of the attr value passed. hence have to provide in []in order to sort wrt the passed attr.
             
            if (movies[j][sortAttr] > max_obj[sortAttr]) {
                max_obj = movies[j];
                max_pos = j;
            }
        }*/
    //swap the objects
    //movies[max_pos] = movies[i];
    //movies[i] = max_obj;
    movies[maxPos] = movies[i];
    movies[i] = maxMovie;
  }
  return movies;
}

/**
 * Retrieve the max movie object based on attribute
 * HINT: make sure you are comparing the right attribute
 */
function getMaxMovieObject(movies, start, sortAttr) {
  // Code from previous findMaxHelper() function
  let max_obj = movies[start];
  let max_pos = start;

  for (let i = start; i < movies.length; i++) {
    if (movies[i][sortAttr] > max_obj[sortAttr]) {
      max_obj = movies[i];
      max_pos = i;
    }
  }
  return { max_movie: max_obj, max_index: max_pos };
}
