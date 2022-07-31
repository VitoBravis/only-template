import Component, { ComponentProps } from '@/base/component';

export default class Modal extends Component {
    modal: HTMLElement;

    constructor(element: ComponentProps) {
        super(element);

        this.modal = document.querySelector('.modal')!;

        document.addEventListener('click', this.clickHandler);
    }

    clickHandler = (e: Event) => {
        const openBtn = (<HTMLElement>e.target).closest('.modal__open-btn');
        const closeBtn = (<HTMLElement>e.target).closest('.modal__close-btn');

        if (!openBtn && !closeBtn) return;

        if (openBtn) this.open();
        if (closeBtn) this.close();
    };

    open = () => {
        document.body.style.overflow = 'hidden';

        this.modal.style.zIndex = '9999';
        this.modal.classList.add('modal_visible');
    };

    close = () => {
        document.body.style.overflow = '';

        this.modal.classList.remove('modal_visible');
    };
}
