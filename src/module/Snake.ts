class Snake {
    element: HTMLElement;
    head: HTMLElement;
    bodies: HTMLCollection;

    constructor() {
        this.element = document.getElementById("snake")!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName("div");
    }

    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    set X(val: number) {
        if(this.X === val) {
            return
        }

        if(val < 0 || val >= 300) {
            throw new Error('snake dead!')
        }

        this.moveBody();

        this.head.style.left = val + 'px';
        this.checkHeadBody();
    }

    set Y(val: number) {
        if(this.Y === val) {
            return
        }

        if(val < 0 || val >= 300) {
            throw new Error('snake dead!')
        }

        this.moveBody();

        this.head.style.top = val + 'px';
        this.checkHeadBody();
    }

    addBody() {
        let el = document.createElement('div');
        this.element.appendChild(el);
    }

    moveBody() {
        for(let i = this.bodies.length - 1; i > 0; i--) {
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top= Y + 'px';
        }
    }

    checkHeadBody() {
        for(let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error('撞到自己了!');
            }
        }
    }
}

export default Snake;