import Component, { ComponentProps } from '@/base/component';
import Modal from '@/components/blocks/modal/modal';
import { getComponent } from '@/helpers/helpers';

export default class ModalSection extends Component {
    modal: Modal;
    counterElement: HTMLElement;
    openBtn: HTMLElement;

    constructor(element: ComponentProps) {
        super(element);

        this.counterElement = this.getElement('counter-value')!;
        this.openBtn = this.getElement('open-modal')!;
        this.modal = new Modal(getComponent('modal', this.nRoot), this.counterElement);

        this.openBtn?.addEventListener('click', (e: Event) => {
            e.preventDefault();
            this.modal.onOpen();
        });
    }

    destroy = () => {
        this.modal.destroy();
    }
}
