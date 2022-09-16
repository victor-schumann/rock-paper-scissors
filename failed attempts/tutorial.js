/* First, let's get the id/buttons we want */

const selectionButtons = document.querySelectorAll('[data-selection]')

/* Create a function that displays the given selection */

function makeSelection(selection) {
    console.log(selection)
}

/* 1. For each selection button, attribute an event on click;
2. On click, take an event and ge the name from the button's data-selection;
3. Store the data-selection on a variable and display it with the previously created function */

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
      const selectionName = selectionButton.dataset.selection
      /* const computerSelection = randomSelection */
      /* const selection = SELECTIONS.find(selection => selection.name === selectionName) */
      makeSelection(selection)
    })
  })

/* if things are working correctly so far, you should see the proper data selection sjow up on console after clicking the rock, paper, scissors images. Now we'll get out selection, render the proper image, and define the winner.

To do that, first, let's create a constant variable that constitutes of an array of all possible selections */

const SELECTIONS = [
    {
        name: 'rock',
        image: '<img alt="rock image" src="images/rock.svg"></img>',
        beats: 'scissors'
    },
    {
        name: 'scissors',
        image: '<img alt="scissors image" src="images/scissors.svg"></img>',
        beats: 'paper'
    },
    {
        name: 'paper',
        image: '<img alt="paper image" src="images/paper.svg"></img>',
        beats: 'rock'
    }
]

/* Now, let's add the following line to our post click event: */

    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    
/* What this line will do is finding among our selection which selections share the same name (===), and then assign that to ouR 'selection' */

/* Now it is time to define what the computer is going to select, and we'll do that with a randomSelection():
1. create a randomSelection function;
2. create a constant that equal to the randomized number (0/1) multiplied bu the lenght of the array. The possible results then are 0, 1, 2, and 3; Except this function can only return 2.999999;
3. To fix that, use the Math.floor() function, which will only give the numbers 0, 1, 2 as results;  */

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}

/* You can add */ const computerSelection = randomSelection /* to the makeSelection() and log it to the console. If you did everything correctly, it will display a "random" result everytime you click a selection. Now, let's define the winner */

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

/* This function takes both selections and compares one's "name" value to the other's "beats" value. If it's the same, they must be opposites, and one must beat another

That being done, go back to the main makeSelection function and add two constants: */

const userWins = isWinner(selection, computerSelection)
const computerWins = isWinner(computerSelection, selection)

/* They are simply calling the function and presenting the selections (user's and PC's). Now we can know who wins, or if it's a draw. To do so, let's create another function called addSelectionResult() which will add said result to the screen.
1. Take both 'selection' and 'winner' values;
2. Add a 'computer-data' column on the html and make it so the result automatically comes up instead of below the column;
3. Add a const finalColumn to the top of the document, and make it takes the value of the html correspondent */

const finalColumn = document.querySelector('data-final-column')

/* 4.  Create the div and make it so the chosen and generated image will me added after "computer" on the website*/

function addSelectionResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.image
    div.classList.add(result-selection)
    finalColumn.after(div)

    if (winner) div.classList.add('winner')
}