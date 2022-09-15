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
        makeSelection(selectionName)
    })
})