const sky = document.getElementById("sky");
const violet = document.getElementById("violet");
const orange = document.getElementById("orange");
const green = document.getElementById("green");
const btnStart = document.getElementById("btnStart");

class Game {
    constructor() {
        this.start();
        this.generateSimon();
        this.nextLevel();
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

    nextLevel() {
        this.turnOnSimon();
    }

    turnOnSimon() {
        for(let i = 0; i < this.level; i++) {
            const color = this.convertNumberToColor(this.simon[i]);
            setTimeout(() => this.turnOnColor(color), 1000 * i);
        }
    }

    convertNumberToColor(num) {
        switch(num) {
            case 0:
                return 'sky';
            case 1:
                return 'violet';
            case 2:
                return 'orange';
            case 3:
                return 'green';
        }
    }

    turnOnColor(color) {
        this.colors[color].classList.add('light');
        setTimeout(() => this.turnOffColor(color), 350);
    }

    turnOffColor(color) {
        this.colors[color].classList.remove('light');
    }

}

function startGame() {
    window.game = new Game();
}
