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
        this.head.style.left = val + 'px';
    }

    set Y(val: number) {
        this.head.style.top = val + 'px';
    }

    addBody() {
        let el = document.createElement('div');
        this.element.appendChild(el);
    }
}

export default Snake;