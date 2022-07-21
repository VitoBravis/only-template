import Component, { ComponentProps } from '@/base/component';

export default class Spoiler extends Component {
    constructor(element: ComponentProps) {
        super(element);

        this.nRoot.addEventListener('click', this.clickHandler)
    }

    clickHandler = (e: Event) => {
        const collapse = this.nRoot.querySelector('.spoiler__collapse') as any;

        this.nRoot.classList.toggle('active');
        const isActive = this.nRoot.classList.contains('active');

        setTimeout(() => {
            if (isActive) {
                collapse.style.height = `${collapse.scrollHeight}px`;
            } else {
                collapse.style.height = 0;
            }
        }, 300)
    }
}
