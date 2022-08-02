import Component, { ComponentProps } from '@/base/component';
import { state } from '@/pages/index';



export default class CounterCurrentValue extends Component {
    constructor(element: ComponentProps) {
        super(element);
        this.nRoot.textContent = '0';
        document.addEventListener('click', this.changeValue);
    }

    changeValue = () => {
        if (this.nRoot.textContent === `${state.valueCounter}`) return;

        this.nRoot.textContent = `${state.valueCounter}`;
    };
    destroy = () => {
        // Destroy functions
    }
}
