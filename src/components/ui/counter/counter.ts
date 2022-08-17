import Component, { ComponentProps } from "@/base/component";

export default class Counter extends Component {
    value: HTMLElement | undefined
    count: number = 0

    constructor(element: ComponentProps) {
        super(element);

        this.value = this.getElement('value');
        this.nRoot.addEventListener('click', this.onClick);

    }

    onClick = (event: Event) => {
        const buttonIncrement = (<HTMLElement>event.target).closest(".counter__button.increment")
        const buttonDecrement = (<HTMLElement>event.target).closest(".counter__button.decrement")

        if(buttonIncrement) {
            this.count += 1
            this.value!.textContent = `${this.count}`
        }
        if(buttonDecrement) {
            this.count -= 1
            this.value!.textContent = `${this.count}`
        }
    };
}