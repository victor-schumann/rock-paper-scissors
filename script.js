const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const SELECTIONS = [
  {
    name: 'rock',
    code: '🪨',
    beats: 'scissors'
  },
  {
    name: 'paper',
    code: '📄',
    beats: 'rock'
  },
  {
    name: 'scissors',
    code: '✂️',
    beats: 'paper'
  }
]

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    makeSelection(selection)
  })
})

function makeSelection(selection) {
  const computerSelection = randomSelection()
  const yourWinner = isWinner(selection, computerSelection)
  const computerWinner = isWinner(computerSelection, selection)

  addSelectionResult(computerSelection, computerWinner)
  addSelectionResult(selection, yourWinner)

  if (yourWinner) incrementScore(yourScoreSpan)
  if (computerWinner) incrementScore(computerScoreSpan)
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomIndex]
}

/* Currently having difficulties with the following function. I want to use the .game images instead of emojis, but I'm not having any luck with it. My current attempt goes around changing "div.innerText" to this:

  const classes = winner ? 'img-style winner' : 'img-style");
  div.innerHTML="<img src=\'https://domain.com/adv/banner.jpg\' width=\'400px\' height=\'150px\'>";
*/

function addSelectionResult(selection, winner) {
  const div = document.createElement('div')
  div.innerText = selection.code
  div.classList.add('result-selection')
  if (winner) div.classList.add('winner')
  finalColumn.after(div)
}
