var player1 = prompt("player one: enter your name, you will be blue");
var player1color = 'rgb(86, 151, 255)';

var player2 = prompt("player one: enter your name, you will be red");
var player2color = 'rgb(237, 45, 73)';

var game_on = true;
var table = $('table tr');

function reportWin(rnum, cnum){
    console.log("You won starting at:");
    console.log(rnum);
    console.log(cnum);
}

function changeColor(rowIndex, ColIndex, color){
    return table.eq(rowIndex).find('td').eq(ColIndex).find('button').css('background-color', color);
}

function reportColor(rowIndex, ColIndex){
    return table.eq(rowIndex).find('td').eq(ColIndex).find('button').css('background-color');
}

function checkbottom(ColIndex){
    var colorReport = reportColor(5, ColIndex);
    for (let row = 5; row > -1; row--) {
        colorReport = reportColor(row, ColIndex);
        if(colorReport === 'rgb(128, 128, 128)'){
            return row
        }
    }
}

function colormatchcheeck(one, two, three, four){
    return (one === two && one === three && one === four && one!= 'rgb(128, 128, 128)' && one!== undefined );
}

//check horizonal wins
function horizonalWins(){
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 4; col++) {
            if(colormatchcheeck(reportColor(row, col), reportColor(row, col+1), reportColor(row, col+2), reportColor(row, col+3))){
                console.log("horizi")
                reportWin(row, col);
                return true;
            }else{
                continue;
            }
        }
        
    }
}

function verWins(){
    for (let col = 0; col < 7; col++) {
        for (let row = 0; row < 3; row++) {
            if(colormatchcheeck(reportColor(row, col), reportColor(row+1, col), reportColor(row+2, col), reportColor(row+3, col))){
                console.log('vertical');
                reportWin(row, col);
                return true;
            }else{
                continue;
            }
        }
    }
}

function diagWins(){
    for (let col = 0; col < 5; col++) {
        for (let row = 0; row < 7; row++) {
            if(colormatchcheeck(reportColor(row, col), reportColor(row+1, col+1), reportColor(row+2, col+2), reportColor(row+3, col+3))){
                console.log('diag');
                reportWin(row, col);
                return true;
            }else if(colormatchcheeck(reportColor(row, col), reportColor(row-1, col+1), reportColor(row-2, col+2), reportColor(row-3, col+3))){
                console.log('diag');
                reportWin(row, col);
                return true;
            }else{
                continue;
            }

        }
    }
}

var cuurentPlayer = 1;
var currentName = player1;
var currentColor = player1color;

$('h3').text(player1+ "it is your turn");

$('.board button').on('click', function(){
    var col = $(this).closest('td').index();
    var bottomAvilable = checkbottom(col);

    changeColor(bottomAvilable, col, currentColor);

    if(horizonalWins() || verWins() || diagWins()){
        $('h1').text(currentName + " WINS!")
        $('h3').fadeOut('fast');
        $('h2').fadeOut('fast');
    }

    cuurentPlayer = cuurentPlayer * -1;

    if(cuurentPlayer === 1){
        currentName = player1;
        $("h3").text(currentName+ "it is your turn")
        currentColor = player1color;
    }else{
        currentName = player2;
        $("h3").text(currentName+"its your turn")
        currentColor = player2color;
    }
})