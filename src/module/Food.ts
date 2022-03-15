class Food {
    element: HTMLElement;

    constructor() {
        // 获取页面中的food元素
        //  ！ 可以让代码忽略可能的null情况
        this.element = document.getElementById('food')!;
    }

    get X() {
        return this.element.offsetLeft;
    }

    get Y() {
        return this.element.offsetTop;
    }

    change() {
        const x = Math.floor(Math.random() * 30) * 10;
        const y = Math.floor(Math.random() * 30) * 10;

        this.element.style.left = x + 'px';
        this.element.style.top = y + 'px';
    }
}

export default Food;