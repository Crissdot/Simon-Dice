const sky = document.getElementById("sky");
const violet = document.getElementById("violet");
const orange = document.getElementById("orange");
const green = document.getElementById("green");
const btnStart = document.getElementById("btnStart");

class Game {
    constructor() {
        this.start();
        this.generateSimon();
    }

    start() {
        btnStart.classList.add("hide");
        this.level = 1;
        this.colors = {
            sky,
            violet,
            orange,
            green,
        }
    }

    generateSimon() {
        this.simon = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4));
    }
}

function startGame() {
    window.game = new Game();
}
