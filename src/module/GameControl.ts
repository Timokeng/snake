import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    direction: string = 'ArrowRight';

    islive: boolean = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();

        this.init();
    }

    init() {
        document.addEventListener("keydown", this.keyDownHandler.bind(this));

        this.run();
    }

    keyDownHandler(event: KeyboardEvent) {
        const ifTurnRound = this.validateKeyVal(event.key);
        ifTurnRound && (this.direction = event.key);
    }

    run() {
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this.direction) {
            case 'ArrowUp':
                Y -= 10;
                break;
            case 'ArrowDown':
                Y += 10;
                break;
            case 'ArrowLeft':
                X -= 10;
                break;
            case 'ArrowRight':
                X += 10;
                break;
        }

        this.checkEat(X, Y);
        
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch(e) {
            console.log((e as Error).message + 'Game Over!');
            this.islive = false;
        }

        const time = 300 - (this.scorePanel.level - 1) * 30;
        this.islive && setTimeout(this.run.bind(this), time);
    }

    checkEat(X: number, Y:number) {
        const ifEat = X === this.food.X && Y === this.food.Y;
        if(ifEat) {
            this.scorePanel.addScore();
            this.snake.addBody();
            this.food.change();
        }
    }

    validateKeyVal(dir: string) {
        if(this.direction !== 'ArrowUp' && dir === 'ArrowDown') {
            return true;
        }
        if(this.direction !== 'ArrowDown' && dir === 'ArrowUp') {
            return true;
        }
        if(this.direction !== 'ArrowRight' && dir === 'ArrowLeft') {
            return true;
        }
        if(this.direction !== 'ArrowLeft' && dir === 'ArrowRight') {
            return true;
        }
        return false;
    }
}

export default GameControl;