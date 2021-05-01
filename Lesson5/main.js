// function init() {
//     let div = document.getElementById('myId');

//     let newSpan = document.createElement('span')

//     newSpan.innerHTML = 'Oleg';
//     div.append
//     console.log(div);
// }

// window.onload = init;


// Task 1

var canvas = document.getElementById("renderCanvas");
var ctx = canvas.getContext("2d");
var offset = 25;

ctx.font = "20px Arial";
ctx.fillText("8", offset / 2 - 5, offset * 2 - 5);
ctx.fillText("7", offset / 2 - 5, offset * 3 - 5);
ctx.fillText("6", offset / 2 - 5, offset * 4 - 5);
// Letters
ctx.fillText("a", offset * 1 + 5, offset / 2 + 5);
ctx.fillText("b", offset * 2 + 5, offset / 2 + 5);
ctx.fillText("c", offset * 3 + 5, offset / 2 + 5);

drawCell(offset, offset, "black");
drawCell(offset * 2, offset, "rgb(220, 220, 220)");
drawCell(offset * 3, offset, "black");
drawCell(offset * 2, offset * 2, "black");
// Borders
drawLine(offset * 9, offset, offset * 9, offset * 9); // Right border
drawLine(offset, offset, offset, offset * 9); // Left border
drawLine(offset, offset, offset * 9, offset); // Top border

function drawCell(x, y, color) {
    ctx.beginPath();
    ctx.rect(x, y, 25, 25);
    ctx.fillStyle = color;
    ctx.fill();
}


function drawLine(x0, y0, x1, y1) {
    ctx.beginPath(); // Start a new path
    ctx.strokeStyle = "green";
    ctx.moveTo(x0, y0); // Move the pen to (x0, y0)
    ctx.lineTo(x1, y1); // Draw a line to (x1, y1)
    ctx.stroke(); // Render the path
}


//Variant 2
window.onload = function() {
    /*заполняем div буквами*/
    var letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    var word = document.querySelector('.wordWhite');
    for (wnum = 0; wnum < letter.length; wnum++) {
        var wordCell = document.createElement('div');
        word.appendChild(wordCell);
        wordCell.classList.add('wordCell');
        wordCell.innerHTML = letter[wnum];
    }

    var word2 = document.querySelector('.wordBlack');
    for (wnum = 0; wnum < letter.length; wnum++) {
        var word2Cell = document.createElement('div');
        word2.appendChild(word2Cell);
        word2Cell.classList.add('wordCell');
        word2Cell.innerHTML = letter[wnum];
    }

    /*заполняем div номерами*/
    var number = document.querySelector('.numberWhite');
    for (num = 0; num < letter.length; num++) {
        var numCell = document.createElement('div');
        number.appendChild(numCell);
        numCell.classList.add('numCell');
        numCell.innerHTML = letter.length - num;
    }
    var number2 = document.querySelector('.numberBlack');
    for (num = 0; num < letter.length; num++) {
        var num2Cell = document.createElement('div');
        number2.appendChild(num2Cell);
        num2Cell.classList.add('numCell');
        num2Cell.innerHTML = letter.length - num;
    }

    /*формируем доску*/
    var chessBoard = document.querySelector('.board');
    var i = 0;
    for (count = 0; count < 8 * 8; count++) {
        var cell = document.createElement('div');
        chessBoard.appendChild(cell);
        cell.classList.add('boardCell');

        if (i % 2)
            cell.classList.add('cellBlack');
        i += ((i + 2) % 9) ? 1 : 2;

        /*заполняем фигурами*/
        if (count < 16) {
            var figureBoardB = document.createElement('img');
            cell.appendChild(figureBoardB);
            figureBoardB.setAttribute('src', 'img/figure/' + (count + 1) + '.png');
        } else if (count > 47) {
            var figureBoardW = document.createElement('img');
            cell.appendChild(figureBoardW);
            figureBoardW.setAttribute('src', 'img/figure/' + (count - 31) + '.png');
        }
    }
};