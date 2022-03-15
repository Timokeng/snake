class ScorePanel {
    // 基础数据
    score: number = 0;
    level: number = 1;

    // 最高等级
    maxLevel: number;

    // 升级分数
    upScore: number;

    // DOM节点
    scoreSpan: HTMLElement;
    levelSpan: HTMLElement;

    constructor(maxLevel:number = 10, upScore:number = 10) {
        this.maxLevel = maxLevel;
        this.upScore = upScore;
        this.scoreSpan = document.getElementById('score')!;
        this.levelSpan = document.getElementById('level')!;
    }

    addScore() {
        this.scoreSpan.innerHTML = '' + ++this.score;
        if(this.score % this.upScore === 0) {
            this.addLevel();
        }
    }

    addLevel() {
        if(this.level >= this.maxLevel) {
            return;
        }
        this.levelSpan.innerHTML = '' + ++this.level;
    }
}

export default ScorePanel;