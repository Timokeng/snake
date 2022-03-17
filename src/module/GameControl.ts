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
        this.direction = event.key;
    }

    run() {
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch(this.direction) {
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

        if(Y >= 300 || X >= 300 || Y < 0 || X < 0) {
            this.islive = false;
            console.log('lose');
            return;
        }

        this.snake.X = X;
        this.snake.Y = Y;

        const time = 300 - (this.scorePanel.level - 1) * 20;
        setTimeout(this.run.bind(this), time);
    }
}

export default GameControl;