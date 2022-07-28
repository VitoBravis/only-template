import Component, { ComponentProps } from '@/base/component';

export default class Counter extends Component {
    value: number;
    display: HTMLElement;

    constructor(element: ComponentProps) {
        super(element);

        this.value = 0;
        this.display = this.nRoot.querySelector('.counter__value')!;

        this.nRoot.addEventListener('click', this.clickHandler);
    }

    clickHandler = (e: Event) => {
        const btn = (<HTMLElement>e.target).closest('.counter__btn') as HTMLElement;

        if (!btn) return;

        const action = btn.dataset.action;

        if (action === 'increment') this.increment();
        if (action === 'decrement') this.decrement()
    }

    increment = () => {
        this.display.textContent = `${++this.value}`;
    };

    decrement = () => {
        if (this.value === 0) return;

        this.display.textContent = `${--this.value}`;
    };
}