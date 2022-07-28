import Component, {ComponentProps} from '@/base/component';

export default class Spoiler extends Component {
    constructor(element: ComponentProps) {
        super(element);
        this.nRoot.addEventListener('click', this.handleClick)
    }

    handleClick = (e: Event) => {
        const el = e.currentTarget as HTMLElement;
        const text = el.querySelector('.spoiler__text') as HTMLElement || null;

        if (text) {
            const height = text?.scrollHeight;

            if (!text.style.height) {
                el.classList.add('spoiler--active')
                text.style.height = `${height}px`;
            } else {
                el.classList.remove('spoiler--active')
                text.style.height = '';
            }

        }
    }

    destroy = () => {
        // Destroy functions
    }
}
