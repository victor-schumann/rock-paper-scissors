/* First, let's get the choises and results using 'getElementBy' */

const computerChoiceDIsplay = document.getElementsByClassName('computer-choice')
const userChoiceDisplay = document.getElementsByClassName('user-choice')
const resultDisplayPc = document.getElementsByClassName('result-score-pc')
const resultDisplayYou = document.getElementsByClassName('result-score-you')
let userChoice

/* Now, game buttons! */
const possibleChoices = document.querySelectorAll('selection')

/* Now, whenever I click on any of the possible choices, I want to know which button it was. To do that, let's use add.EventListener and same the id somewhere */

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.class
    userChoiceDisplay.innerHTML = userChoice
}))