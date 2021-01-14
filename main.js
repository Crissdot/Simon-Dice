const sky = document.getElementById("sky");
const violet = document.getElementById("violet");
const orange = document.getElementById("orange");
const green = document.getElementById("green");
const btnStart = document.getElementById("btnStart");
const LAST_LEVEL = 10;

class Game {
    constructor() {
        this.start();
        this.generateSimon();
        setTimeout(this.nextLevel, 500);
    }

    start() {
        this.nextLevel = this.nextLevel.bind(this);
        this.chooseColor = this.chooseColor.bind(this);
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
        this.simon = new Array(LAST_LEVEL).fill(0).map(n => Math.floor(Math.random() * 4));
    }

    nextLevel() {
        this.subLevel = 0;
        this.turnOnSimon();
        this.addEventClick();
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

    addEventClick() {
        this.colors.sky.addEventListener('click', this.chooseColor);
        this.colors.violet.addEventListener('click', this.chooseColor);
        this.colors.orange.addEventListener('click', this.chooseColor);
        this.colors.green.addEventListener('click', this.chooseColor);
    }

    chooseColor(ev) {
        const nameColor = ev.target.dataset.color;
        const numColor = this.convertColorToNumber(nameColor);
        this.turnOnColor(nameColor);
        if(numColor === this.simon[this.subLevel]) {
            this.subLevel++;
            if(this.subLevel === this.level) {
                this.level++;
                this.deleteEventClick();
                if(this.level === LAST_LEVEL + 1) {
                    // win
                } else {
                    setTimeout(this.nextLevel, 1500);
                }
            }
        } else {
            // Lost
        }
    }

    convertColorToNumber(color) {
        switch(color) {
            case 'sky':
                return 0;
            case 'violet':
                return 1;
            case 'orange':
                return 2;
            case 'green':
                return 3;
        }
    }

    deleteEventClick() {
        this.colors.sky.removeEventListener('click', this.chooseColor);
        this.colors.violet.removeEventListener('click', this.chooseColor);
        this.colors.orange.removeEventListener('click', this.chooseColor);
        this.colors.green.removeEventListener('click', this.chooseColor);
    }

}

function startGame() {
    const game = new Game();
}
