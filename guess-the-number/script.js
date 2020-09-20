/**
 * Guess The Number Game
 * DONE LOC-33: Get user value from input and save it to variable numberGuess
 * DONE LOC-70: Generate a random number 1 to 100 and save it to variable correctNumber ; return to LOC 17 globally
 * DONE : Console whether the guess is too high, too low, or is correct inside playGame function
 * DONE : Create a function called displayResult(numberGuess) to move the logic for if the guess is too high, too low, or correct
 * DONE : Complete the showYouWon, showNumberAbove, showNumberBelow
 * DONE : Use the showYouWon... functions within displayResult to display the correct dialog
 * DONE : Save the guess history in a variable called guessess -> empty array defined globally
 * DONE : Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses - empty array
let guesses = [];

// Variable to store the correct random number globally so that the whole application can use it
let correctNumber = getRandomNumber();


/**
 * windows.onload waits for htlm to load and performs the functions within it
 */
window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame); // tells JS to execute playGame() on click of button "Check Me"; function call
  document.getElementById("restart-game").addEventListener("click", initGame);
};

/**
 * Functionality for playing the whole game - main game logic function
 * 20 Sep 2020
 * Get user value from input and save it to variable numberGuess
 * display whether the guess is too high, too low, or is correct inside playGame function
 * save the guess history
 * display the guess history
 */
function playGame() {
  let numberGuess = document.getElementById("number-guess").value;
   
    if (numberGuess.length != 0 && numberGuess != null) {
      console.log("input number:" + numberGuess);
      displayResult(numberGuess); //to check the guessed number
      saveGuessHistory(numberGuess); // save the guessed number in the array
      displayHistory(); //display the guesses array list with latest on top
    } else {
      alert("Enter a valid number!");
    }
    document.getElementById("number-guess").value = null;//to reset the input value after each guess
}

/**
 * Show the result for if the guess it too high, too low, or correct
 * called to check the guessed number with random number
 * 20 Sep 2020
 */
function displayResult(numberGuess)
{
        if (numberGuess > correctNumber) {
           
            showNumberAbove();
        } else if (numberGuess < correctNumber) {
            
            showNumberBelow();
        } else {
            showYouWon();
        }
       
    
}

/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame() {
  
  //re genarate random number aka correctNumber
    correctNumber = getRandomNumber();
    //reset the result display
    resetResultContent();//reset the result alert to ""
    //reset the guesses array
    guesses = [];
    //displayHistory();//since the guesses array is set to empty there will be no history to display
    //reset guess history display
}

/**
 * Reset the HTML content for guess history and result alert
 */
function resetResultContent() {
    document.getElementById("number-guess").value = null; //reseting the value of input field to null
    document.getElementById("result").innerHTML = "";
    document.getElementById("history").innerHTML = "";
}



/**
 * when is this called => called at LOC 17 to store this value globally
 * 20 Sep 2020
 * Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
 * Math.random() always returns a number lower than 1. (float number)
 * Math.random() used with Math.floor() can be used to return random integers.
 * Math.floor(Math.random() * 100);  returns a random integer from 0 to 99
 * 
 * Return a random number between 1 and 100
 */
function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100
    console.log("random:" + randomNumber);
    return randomNumber; //this must be used throught the application as a global var
}

/**
 * Save guess history - called in the main game function : playGame()
 *  Search Google "append to array in javascript"
 *  Use the guesses empty array defined globally
 */
function saveGuessHistory(guess) {
    guesses.push(guess); //add the new guessed number into the array and it inc the size 
   // guesses.unshift(guess);//add in the beginning of array
    console.log("Guess History :" + guesses);
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 * 
 * display the latest guess ontop 
 */
function displayHistory() {
    let index = guesses.length-1;
    let list = "<ul class='list-group'>";
    let liTag = "<li class='list-group-item'>You guessed ";
    let liActive = "<li class='list-group-item active'>You guessed "; //last guess will be highlighted in the history
 
    while (index >= 0) {
        if (index == (guesses.length - 1)) {
          list += liActive + guesses[index] + " </li>";
        } else {
          list += liTag + guesses[index] + " </li>";
        }
        index--;
        
        
    }
  list += "</ul>";
  document.getElementById("history").innerHTML = list;
}

/**
 * Retrieve the dialog based on if the guess is wrong or correct
 */
function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"; //alert warning and success are html tags
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

function showYouWon() {
  const text = "Awesome job, you got it!";
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'won' and text parameters
   */
    let dialog = getDialog('won', text);

  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
  const text = "Your guess is too high!";
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters
   */
    let dialog = getDialog('warning', text);

  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
  const text = "Your guess is too low!";
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters
   */
  let dialog = getDialog('warning', text);

  document.getElementById("result").innerHTML = dialog;
}
