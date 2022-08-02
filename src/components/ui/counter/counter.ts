import Component, { ComponentProps } from '@/base/component';
import { changeValueCounter } from '@/pages/index';




export default class Counter extends Component {
    btnDecrement: HTMLElement;

    counterCount: any = document.querySelector('.counter__count');
    counterValue: number;

    constructor(element: ComponentProps) {
        super(element);

        this.counterValue = 0;
        this.counterCount = this.nRoot.querySelector('.counter__count');
        this.btnDecrement = this.nRoot.querySelector('.decrement');

        this.nRoot.addEventListener('click', this.handleChangeCounter)

    }


    handleChangeCounter = (e: Event) => {
        const decrementBtn = (<HTMLElement>e.target).closest('.decrement');
        const incrementBtn = (<HTMLElement>e.target).closest('.increment');

        if (!decrementBtn && !incrementBtn) return;

        decrementBtn ? this.decrement() : this.increment();

        changeValueCounter(this.counterValue);




    }
    decrement = () => (this.counterCount.textContent = `${--this.counterValue}`);
    increment = () => (this.counterCount.textContent = `${++this.counterValue}`);




    destroy = () => {
        // Destroy functions
    }
}
