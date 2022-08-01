import Component, { ComponentProps } from '@/base/component';
import { BehaviorSubject, Observable } from "rxjs";

export default class Counter extends Component {
    count: number = 2;
    value$: BehaviorSubject<number> | undefined;
    valueChange$: Observable<number> | undefined;
    increaseBtn: HTMLElement | undefined;
    decreaseBtn: HTMLElement | undefined;
    counterView: HTMLElement | undefined;

    constructor(element: ComponentProps) {
        super(element);

        this.increaseBtn = this.getElement('btn-increase');
        this.decreaseBtn = this.getElement('btn-decrease');
        this.counterView = this.getElement('value__text');
        this.decreaseBtn && this.increaseBtn && this.counterView ?
            this.init() :
            null;
    };

    init() {
        this.value$ = new BehaviorSubject<number>(this.count);
        this.valueChange$ = this.value$.asObservable();
        this.decreaseBtn?.addEventListener('click', () => this.onClick('decrease'));
        this.increaseBtn?.addEventListener('click', () => this.onClick('increase'));
        this.updateValue();
    }

    onClick = (action: string) => {
        if(action === 'increase') this.setCount(++this.count);
        if(action === 'decrease' && this.count !== 0) this.setCount(--this.count);
        this.updateValue();
        this.value$?.next(this.count);
    }

    updateValue = () => {
        this.counterView ?
            this.counterView.innerText = this.count.toString() :
            null;
    };

    setCount = (value: number) => this.count = value;
    getCount = () => this.count;

    destroy = () => {
        // Destroy functions
    }
}
