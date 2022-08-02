import Component, { ComponentProps } from '@/base/component';

export default class MyModal extends Component {
    modal: HTMLElement;
    modalBtn: any;
    constructor(element: ComponentProps) {
        super(element);

        this.modal = document.querySelector('.modal')!;
        this.modalBtn = document.querySelector('counter-container__btn')

        document.addEventListener('click', this.hadndleModalChange)

    }

    hadndleModalChange = (e: Event) => {
        const openBtn = (<HTMLElement>e.target).closest('.counter-container__btn');
        const closeBtn = (<HTMLElement>e.target).closest('.modal__btn');

        if (!openBtn && !closeBtn) return;

        openBtn ? this.openModal() : this.closeModal();


    };

    openModal = () => {
        this.modal.classList.add('is-open');
       
    };

    closeModal = () => {
        this.modal.classList.remove('is-open');

    };

    destroy = () => {
        // Destroy functions
    }
}
