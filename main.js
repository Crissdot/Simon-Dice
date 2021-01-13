const sky = document.getElementById("sky");
const violet = document.getElementById("violet");
const orange = document.getElementById("orange");
const green = document.getElementById("green");
const btnStart = document.getElementById("btnStart");

class Game {
    constructor() {
        this.start();
    }

    start() {
        btnStart.classList.add("hide");
    }
}

function startGame() {
    var game = new Game();
}
