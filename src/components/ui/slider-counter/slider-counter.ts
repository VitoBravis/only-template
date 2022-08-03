import Component, { ComponentProps } from "@/base/component";
import { watchedState } from "@/pages/index";

export default class SliderCounter extends Component {
    block: HTMLElement;
    count: number;
    constructor(element: ComponentProps) {
        super(element);

        this.block = this.getElement("block")!;

        this.count = 0;

        this.block.textContent = `${this.count}`;

        this.nRoot.addEventListener("click", this.clickHandler);
    }

    clickHandler = (e: any) => {
        if (e.target.closest(".slider-counter__inc-btn")) this.increment(e);
        if (e.target.closest(".slider-counter__dec-btn")) this.decrement(e);
    };

    increment = (e: any) => {
        this.count += 1;
        this.block.textContent = `${this.count}`;
        watchedState.counter.mainCount.set(this, this.count);
    };

    decrement = (e: any) => {
        this.count -= 1;
        this.block.textContent = `${this.count}`;
        watchedState.counter.mainCount.set(this, this.count);
    };
}
