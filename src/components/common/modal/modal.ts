import Component, { ComponentProps } from '@/base/component';

export default class Modal extends Component {
    id: string;
    closeBtn: HTMLElement;

    constructor(element: ComponentProps) {
        super(element);

        this.id = this.nRoot.id;
        this.closeBtn = this.nRoot.querySelector<HTMLElement>('[data-action="close-modal"]')!;
    }

    open = () => {
        document.body.style.overflow = 'hidden';

        this.nRoot.style.zIndex = '9999';
        this.nRoot.classList.add('modal_visible');

        this.closeBtn.addEventListener('click', this.close, { once: true });
    };

    close = () => {
        document.body.style.overflow = '';

        this.nRoot.classList.remove('modal_visible');
    };
}
