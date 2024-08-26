let turn="x";
let count=0;
let boxes = document.querySelectorAll(".boxes");
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(box.innerText=="") {
            if(turn=="x") {
                document.querySelector("#x").style.backgroundColor = "#dff4ff";
                box.innerText="X";
                turn = "o";
                document.querySelector("#o").style.backgroundColor = "#72daff";
                count += 1;
                checkisWinner();
            }
            else if(turn=="o") {
                document.querySelector("#o").style.backgroundColor = "#dff4ff";
                box.innerText="O";
                turn = "x";
                document.querySelector("#x").style.backgroundColor = "#72daff";
                count += 1;
                checkisWinner();
            }
            if(!checkisWinner() && count==9) {
                gameDraw();
            }
        }
    });
});

const winningCombinations = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal
    [2, 4, 6]  // Diagonal
];
function checkisWinner() {
    for(let[a,b,c] of winningCombinations) {
        if(boxes[a].innerText!="" && boxes[a].innerText==boxes[b].innerText && boxes[b].innerText==boxes[c].innerText) {
            boxes[a].style.backgroundColor="deepskyblue";boxes[a].style.color="#dff4ff";
            boxes[b].style.backgroundColor="deepskyblue";boxes[b].style.color="#dff4ff";
            boxes[c].style.backgroundColor="deepskyblue";boxes[c].style.color="#dff4ff";

            document.querySelector(".message").innerText = boxes[a].innerText+" Wins";
            return true;
        }
    }
    return false;
}
function gameDraw() {
    document.querySelector(".message").innerText = "Game Draw";
}

document.querySelector(".reset").addEventListener("click",() => {
    boxes.forEach((box) => {
        box.innerText="";
        box.style.backgroundColor = "#dff4ff";
        document.querySelector(".boxes").style.color = "deepskyblue";
    });
    turn="x";
    count=0;
    document.querySelector("#x").style.backgroundColor = "#72daff";
    document.querySelector("#o").style.backgroundColor = "#dff4ff";
    document.querySelector(".message").innerText = "PLAY !";
});