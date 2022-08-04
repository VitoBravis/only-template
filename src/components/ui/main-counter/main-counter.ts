import Component, { ComponentProps } from '@/base/component';

export default class MainCounter extends Component {
    private _value: number;

    constructor(element: ComponentProps) {
        super(element);

        this._value = 0;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;

        this.nRoot.textContent = `${this._value}`;
    }
}
