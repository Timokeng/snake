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
            throw new Error('snake dead')
        }

        this.head.style.left = val + 'px';
    }

    set Y(val: number) {
        if(this.Y === val) {
            return
        }

        if(val < 0 || val >= 300) {
            throw new Error('snake dead')
        }

        this.head.style.top = val + 'px';
    }

    addBody() {
        let el = document.createElement('div');
        this.element.appendChild(el);
    }
}

export default Snake;