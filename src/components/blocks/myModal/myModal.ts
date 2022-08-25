import Component, { ComponentProps } from '@/base/component';
import Slider from '@/components/ui/slider/slider';
import { getComponent } from '@/helpers/helpers';

export default class MyModal extends Component {
    modal: HTMLElement;
    modalBtn: any;
    slider: Slider;
    onClose: (value: number) => void;
    constructor(element: ComponentProps, onCloseCallback: (value: number) => void) {
        super(element);

        this.onClose = onCloseCallback;

        this.modal = document.querySelector('.modal')!;
        this.modalBtn = document.querySelector('.__btn')
        this.slider = new Slider(getComponent('slider', this.nRoot));

        document.addEventListener('click', this.hadndleModalChange);

    }

    hadndleModalChange = (e: Event) => {
        const openBtn = (<HTMLElement>e.target).closest('.__btn');
        const closeBtn = (<HTMLElement>e.target).closest('.modal__btn');

        if (!openBtn && !closeBtn) return;

        openBtn ? this.openModal() : this.closeModal();


    };

    openModal = () => {
        console.log(1)
        this.modal.classList.add('is-open');

    };

    closeModal = () => {
        this.nRoot.classList.remove('is-open');

        const activeCounterValue = this.slider.getActiveCounterValue();
        this.onClose(activeCounterValue);

    };


    destroy = () => {
        // Destroy functions
    }
}
