import Component, { ComponentProps } from '@/base/component';
import { getComponent } from '@/helpers/helpers';
import ModalSlider from '../modal-slider/modal-slider';

export default class Button extends Component {

    modal
    counter

    constructor(element: ComponentProps) {
        super(element);

        this.modal = document.querySelector('.modal-slider')
        this.counter = document.querySelector('.counter')

        document.addEventListener('click', this.onClick)
    }

    onClick = (e: Event) => {
        const open_btn = (<HTMLElement>e.target).closest('.modal-slider__open')
        const close_btn = (<HTMLElement>e.target).closest('.modal-slider__close')

        close_btn && this.showSlider()
        open_btn && this.showSlider()
    }

    showSlider = () => {
        this.modal?.classList.toggle('hidden')
        this.counter?.classList.toggle('hidden')
    }


    destroy = () => {
        // Destroy functions
    }
}
