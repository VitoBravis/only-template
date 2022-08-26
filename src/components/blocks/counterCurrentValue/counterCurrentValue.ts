import Component, { ComponentProps } from '@/base/component';
import { state } from '@/pages/index';



export default class CounterCurrentValue extends Component {
    constructor(element: ComponentProps) {
        super(element);
        this.nRoot.textContent = '0';
        
    }

    changeValue = (value: Number) => {
     

        this.nRoot.textContent = `${value}`;
    };
    destroy = () => {
        // Destroy functions
    }
}
