// element constants
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
const btnSubmit = document.querySelector('input[type=submit]');
const colorPicker = document.getElementById('colorPicker');
const pixelCanvas = document.getElementById('pixelCanvas');

// event listeners
// submit button
btnSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    makeGrid();
});

// grid click event
pixelCanvas.addEventListener ('click', colorGridCell);

function makeGrid() {
    // clear privous grid before drawing the new one
    clearGrid();

    const grid = document.createDocumentFragment();

    for (let i = 0; i < inputHeight.value; i++) {
        let gridRow = document.createElement('tr');
        
        // create the columns for each row
        for (let j = 0; j < inputWidth.value; j++) {
            gridRow.appendChild(document.createElement('td'));
        }

        // add the row to the grid before creating the next one
        grid.appendChild(gridRow);
    }

    pixelCanvas.appendChild(grid);
}

function clearGrid() {
    while (pixelCanvas.hasChildNodes()) {   
        pixelCanvas.removeChild(pixelCanvas.firstChild);
    }
}

function colorGridCell(event) {
    if (event.target.tagName == "TD") {
        event.target.style.backgroundColor = colorPicker.value;
    }
}
