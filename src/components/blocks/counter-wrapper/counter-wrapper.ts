import Component, { ComponentProps } from '@/base/component';
import { getComponent } from "@/helpers/helpers";
import Counter from "@/components/ui/counter/counter";
import { debounceTime } from "rxjs/operators";
import ModalSlider from "@/components/blocks/modal-slider/modal-slider";
import { fromEvent, Subscription } from "rxjs";

export default class CounterWrapper extends Component {
    counter: Counter | undefined;
    modal: ModalSlider | undefined;
    showCount: HTMLElement | undefined;
    openBtn: HTMLElement | undefined;
    subscribe: Subscription | undefined;

    constructor(element: ComponentProps) {
        super(element);

        this.showCount = this.getElement('value');
        const findCounter = getComponent('counter', this.nRoot);
        if (findCounter.component) {
            this.counter = new Counter(findCounter);
            this.subscribe = this.counter.valueChange$?.pipe(debounceTime(300))
                .subscribe((value) => this.setCount(value));
        }
        const findModal = getComponent('modal-slider');
        if (findModal.component) {
            this.modal = new ModalSlider(findModal);
        }
        this.openBtn = this.getElement('button-open')
        if(this.openBtn){
            fromEvent(this.openBtn, 'click').subscribe(() => this.modal?.open())
        }
    }

    setCount = (value: number) => {
        if (this.showCount) this.showCount.innerText = value.toString();
    }

    destroy = () => {
        // Destroy functions
        this.modal?.destroy();
        this.counter?.destroy();
        this.subscribe?.unsubscribe();
    }
}
