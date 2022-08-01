import Component, { ComponentProps } from '@/base/component';


export default class Counter extends Component {
    incBtn: HTMLElement;
    decBtn: HTMLElement;
    textContainer: HTMLElement;
    count: number;

    constructor(element: ComponentProps) {
        super(element);
        this.textContainer = this.getElement("text")!;
        this.count = 0;
        this.incBtn = this.getElement("button-inc")!;
        this.decBtn = this.getElement("button-dec")!;

        this.textContainer.textContent = `${this.count}`;

        this.incBtn.addEventListener("click", this.increment);
        this.decBtn.addEventListener("click", this.decriment);
    }

    increment = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        this.count += 1;
        this.textContainer.textContent = `${this.count}`;
    };

    decriment = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        this.count -= 1;
        this.textContainer.textContent = `${this.count}`;
    };

}
