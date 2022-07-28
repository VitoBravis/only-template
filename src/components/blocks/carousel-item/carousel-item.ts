import Component, { ComponentProps } from '@/base/component';
import { getComponent } from '@/helpers/helpers';

import Counter from '@/components/ui/counter/counter';
import { watchedCounter } from '@/pages/index';

export default class CarouselItem extends Component {
    counter: Counter;

    constructor(element: ComponentProps) {
        super(element);

        this.counter = new Counter(getComponent('counter', this.nRoot));

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
        watchedCounter.value = this.counter.value;
    };

    decrement = () => {
        watchedCounter.value = this.counter.value;
    };
}
