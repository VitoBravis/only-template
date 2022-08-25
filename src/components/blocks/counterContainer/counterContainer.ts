import Component, { ComponentProps } from '@/base/component';
import { getComponent } from '@/helpers/helpers';
import CounterCurrentValue from '../counterCurrentValue/counterCurrentValue';
import MyModal from '../myModal/myModal';

export default class CounterContainer extends Component {
    mainCounter: CounterCurrentValue;
    modal: MyModal;
    constructor(element: ComponentProps) {
        super(element);


        this.mainCounter = new CounterCurrentValue(getComponent('counterCurrentValue', this.nRoot));
        this.modal = new MyModal(getComponent('modal'), this.updateMainCounter);
    }
    updateMainCounter = (value: number) => {
        this.mainCounter.changeValue(value);
    }
    destroy = () => {
        // Destroy functions
    }
}
