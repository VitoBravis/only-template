import Component, { ComponentProps } from "@/base/component";
import { watchedState } from "@/pages/index";

export default class SliderCounter extends Component {
    decBtn: HTMLElement;
    incBtn: HTMLElement;
    block: HTMLElement;
    count: number;
    constructor(element: ComponentProps) {
        super(element);

        this.decBtn = this.getElement("dec-btn")!;
        this.incBtn = this.getElement("inc-btn")!;
        this.block = this.getElement("block")!;

        this.count = 0;

        this.block.textContent = `${this.count}`;

        this.incBtn.addEventListener("click", this.increment);
        this.decBtn.addEventListener("click", this.decrement);
    }

    increment = (e: MouseEvent) => {
        this.count += 1;
        this.block.textContent = `${this.count}`;
        watchedState.counter.mainCount.set(this, this.count);
    };

    decrement = (e: MouseEvent) => {
        this.count -= 1;
        this.block.textContent = `${this.count}`;
        watchedState.counter.mainCount.set(this, this.count);
    };
}
