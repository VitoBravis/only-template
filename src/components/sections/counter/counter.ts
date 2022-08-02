import Component, { ComponentProps } from '@/base/component';
import Button from '@/components/ui/button/button';
import { interval } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

import ModalSlider from '@/components/ui/modal-slider/modal-slider';
import { getComponent } from '@/helpers/helpers';


export default class Counter extends Component {
    ModalSlider = new ModalSlider(getComponent('modal-slider'))
    countValue = document.querySelector('.counter__value span') as HTMLElement

    constructor(element: ComponentProps) {
        super(element);

        this.countValue.innerText = `${this.ModalSlider.getCount}`


        document.addEventListener('click', (event: Event) => {
            this.countValue.innerText = `${this.ModalSlider.getCount}`
        })
    }

    destroy = () => {
        // Destroy functions
    }
}
