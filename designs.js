//declaring sizePicker and pixelCanvas variables
const sizePicker = document.querySelector("#sizePicker");
const pixelCanvas = document.querySelector("#pixelCanvas");

function makeGrid() {
    // getting size input 
    var height = document.querySelector("#inputHeight").value;
    var width = document.querySelector("#inputWidth").value;


    pixelCanvas.innerHTML = ' ';

    for (let rows = 1; rows <= height; rows++) {

        let row = document.createElement('tr');


        for (let colunms = 1; colunms <= width; colunms++) {
            let colunm = document.createElement('td');

            colunm.addEventListener('click', function() {
                // getting color input
                var color = document.querySelector("#colorPicker").value;
                this.style = 'background-color: ' + color + ';';
            });

            row.appendChild(colunm);
        }

        pixelCanvas.appendChild(row);
    }
}

// calling makeGrid function when submit button is clicked 
sizePicker.addEventListener('click', function(event) {
    makeGrid();
    event.preventDefault();
});