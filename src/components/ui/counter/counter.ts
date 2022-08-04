import Component, { ComponentProps } from "@/base/component";

export default class Counter extends Component {
    counters: NodeListOf<Element>;

    constructor(element: ComponentProps) {
        super(element);
        this.counters = document.querySelectorAll(".counter");
        this.counters.forEach(counter => {
            counter.addEventListener("click", (e: Event) => this.clickHandler(e, counter));
        });
    }

    clickHandler = (e: Event, counter: Element) => {
        const target = e.target;
        const counterValue = counter.querySelector(".counter__value");
        if (!counterValue) return;
        let value = +(counterValue.innerHTML);
        if ((<HTMLElement>target).closest(".button__slider")) {
            if ((<HTMLElement>target).classList.contains("plus")) {
                value++;
            } else {
                --value;
            }
            counterValue.innerHTML = String(value);
        }
    };

}
