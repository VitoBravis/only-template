import Component, { ComponentProps } from '@/base/component';

export default class Modal extends Component {
    modal: HTMLElement | null;

    constructor(element: ComponentProps) {
        super(element);

        this.modal = null;

        document.addEventListener('click', this.clickHandler);
    }

    clickHandler = (e: Event) => {
        const openBtn: HTMLElement | null = (<HTMLElement>e.target).closest('[data-role="modal-open-btn"]');
        const closeBtn: HTMLElement | null = (<HTMLElement>e.target).closest('[data-role="modal-close-btn"]');


        if (!openBtn && !closeBtn) return;

        if (openBtn) {
            this.modal = document.getElementById(`${openBtn.dataset.modalId}`);
            this.open();
        }

        if (closeBtn) this.close();
    };

    open = () => {
        if (!this.modal) return;

        document.body.style.overflow = 'hidden';

        this.modal.style.zIndex = '9999';
        this.modal.classList.add('modal_visible');
    };

    close = () => {
        if (!this.modal) return;

        document.body.style.overflow = '';

        this.modal.classList.remove('modal_visible');
    };
}
