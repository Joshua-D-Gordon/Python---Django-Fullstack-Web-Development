// cheecking connection
console.log("connected...");

// Restart game
var restart = document.querySelector("#b");
// Grabs all squares
var squares = document.querySelectorAll('td');

// Clear all squares
function clearBoard() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = ' ';
    }
}

restart.addEventListener('click', clearBoard);

//check sqaures marker
function changeMarker(){
    if(this.textContent === ''){
        this.textContent = 'X';
    }else if(this.textContent === 'X'){
        this.textContent = 'O';
    }else{
        this.textContent = '';
    }
}

//for loop to add event liseners
for (var i = 0; i< squares.length; i++){
    squares[i].addEventListener('click', changeMarker);
}