import Component, { ComponentProps } from '@/base/component';

export default class Spoiler extends Component {
    constructor(element: ComponentProps) {
        super(element);

        this.nRoot.addEventListener('click', this.clickHandler);
    }

    clickHandler = (e: Event) => {
        const btn = (<HTMLElement>e.target).closest('.spoiler__btn');

        if (!btn) return;

        const content = btn.nextElementSibling as HTMLElement;

        if (btn.classList.contains('spoiler__btn_active')) {
            btn.classList.remove('spoiler__btn_active');
            btn.setAttribute('aria-expanded', 'false');
        } else {
            btn.classList.add('spoiler__btn_active');
            btn.setAttribute('aria-expanded', 'true');
        }

        if (content.style.maxHeight) {
            content.style.maxHeight = '';
        } else {
            content.style.maxHeight = `${content.scrollHeight}px`;
        }
    };
}
